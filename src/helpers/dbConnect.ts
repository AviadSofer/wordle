import mysq from 'mysql';

const dbConnect = () => {
  const connection = mysq.createConnection({
    host: 'localhost',
    user: 'root',
    password: '&2(~Q^-G?75@',
    database: 'milala',
  });

  connection.connect();

  return connection;
};

export default dbConnect;
