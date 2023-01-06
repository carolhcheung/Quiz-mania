const db = require('../connection');

const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};

const getUserQuizzes = (owner_id) => {

  const dbQuery = `
  SELECT *
  FROM quizzes
  WHERE owner_id = $1;
  `;

  const dbOptions = [owner_id];

  return db.query(dbQuery, dbOptions)
    .then(data => {
      return data.rows;
    });
};

const getQuizCategories = () => {
  return db.query('SELECT DISTINCT category FROM quizzes;')
    .then(data => {
      return data.rows;
    });
}

const addQuestion = (questions) => {
  // console.log(questions)
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
    questions.category,
    questions.choice_a,
    questions.choice_b,
    questions.choice_c,
    questions.choice_d,
    questions.answer
  ])
    .then((result) => {
      // console.log(result.rows[0])
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const addQuiz = (quiz) => {
  // console.log(quiz)
  return db.query(`
  INSERT INTO quizzes (
    owner_id,
    category,
    quiz_name,
    level,
    public,
    quiz_url)
    VALUES ($1, $2, $3, $4, $5, $6)
  RETURNING *;
    `, [
    quiz.owner_id,
    quiz.category,
    quiz.quiz_name,
    quiz.level,
    quiz.public,
    quiz.quiz_url
  ])
    .then((result) => {
      // console.log(result.rows[0])
      return result.rows[0];
    })
    .catch((err) => {
      console.log(err.message);
    });
};


module.exports = {
  getUsers,
  addQuestion,
  addQuiz,
  getUserQuizzes,
  getQuizCategories
};




