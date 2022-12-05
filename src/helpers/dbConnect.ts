import mysq from 'mysql';

const dbConnect = () => {
  const connection = mysq.createConnection({
    host: 'localhost',
    user: 'bombagam_aviad',
    password: '&2(~Q^-G?75@',
    database: 'bombagam_milala',
    port: 3306,
  });

  connection.connect();

  return connection;
};

export default dbConnect;
