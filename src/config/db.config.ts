import mySql from 'mysql2'

const connection = mySql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'swiggyclone'
})

connection.connect((err) => {
  if (!err) {
    console.log("Connected")
  }
  else {
    console.error(err)
  }
})

export default connection