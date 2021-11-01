const express = require("express");
const { Post } = require("./models");
const db = require("./models");
const morgan = require("morgan");
const cors = require('cors');
const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.sequelize
  .sync()
  .then(() => {
    console.log("데이터 베이스 연결 성공!");
  })
  .catch((err) => {
    console.error(err);
  });

  app.use(cors({
    origin: true,
    credentials: true, //이걸 해줘야 cookie도 같이 보낼 수 있다.
}));


app.get("/", (req, res, next) => {
  res.send("Hi~");
});

app.get("/posts", async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      order: [["createdAt", "DESC"]],
    });
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

app.post("/post", async (req, res, next) => {
  console.log('dfd');
  try {
    const post = await Post.findOne({
      where: { title: req.body.title },
    });
    if (post) {
      return res.status(403).send("이미 같은 제목의 게시글이 존재합니다.");
    }
    await Post.create({
      title: req.body.title,
      content: req.body.content,
    });
    res.send("게시글 작성 완료!");
  } catch (err) {
    console.error(err);
    next(err);
  }
});

app.get("/post/:id", async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.id },
    });
    if (!post) {
      return res.status(403).send("해당 게시글이 존재하지 않습니다");
    }
    res.json(post);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

app.delete("/post/:id", async (req, res, next) => {
  try {
    await Post.destroy({
      where: { id: req.params.id },
    });
    res.send("게시글 삭제 완료!");
  } catch (error) {
    console.error(err);
    next(err);
  }
});

app.patch("/post/:id", async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.id },
    });

    if (!post) {
      return res.status(403).send("해당 게시글이 존재하지 않습니다");
    }
    await Post.update(
      {
        title: req.body.title,
        content: req.body.content,
      },
      {
        where: { id: req.params.id },
      }
    );

    res.send("게시글 수정 완료!");
  } catch (err) {
    console.error(err);
    next(err);
  }
});

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

app.listen(3065, () => {
  console.log("3065 port에서 서버 실행!");
});
