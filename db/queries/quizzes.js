const db = require('../connection');

const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};

const addQuestion = (questions) => {

  return db.query(`
  INSERT INTO questions (
    quiz_id,
    category,
    question,
    choice_a,
    choice_b,
    choice_c,
    choice_d,
    answer)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
  RETURNING *;
    `, [questions.quiz_id,
  questions.question,
  questions.choice_a,
  questions.choice_b,
  questions.choice_c,
  questions.choice_d,
  questions.answer,
    true])
    .then((result) => {
      console.log(result.rows[0])
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const addQuiz = (quiz) => {

  return db.query(`
  INSERT INTO quizzes (
    id,
    owner_id,
    quiz_name,
    level,
    public)
    VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING *;
    `, [quiz.id,
  quiz.owner_id,
  quiz.quiz_name,
  quiz.level,
  quiz.public,
    true])
    .then((result) => {
      console.log(result.rows[0])
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};
module.exports = {
  getUsers,
  addQuestion,
  addQuiz
};




