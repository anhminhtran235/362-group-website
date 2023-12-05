import styled from 'styled-components';

// Styled components
const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;

const StyledThead = styled.thead`
  background-color: #009879;
  color: #ffffff;
  text-align: left;
`;

const StyledTh = styled.th`
  padding: 12px 15px;
`;

const StyledTd = styled.td`
  padding: 12px 15px;
`;

const StyledTr = styled.tr`
  border-bottom: 1px solid #dddddd;

  &:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  &:last-of-type {
    border-bottom: 2px solid #009879;
  }
`;

const Header = styled.h1`
  text-align: center;
  color: #009879;
  margin-bottom: 20px;
`;

const GroupInfo = () => {
  const students = [
    {
      name: 'Anh Minh Tran',
      studentNumber: '301448936',
      email: 'amt23@sfu.ca',
    },
    { name: 'Lihao Qian', studentNumber: '301406445', email: 'lihaoq@sfu.ca' },
    {
      name: 'Ozafa Yousuf Mahmood',
      studentNumber: '301445050',
      email: 'oym@sfu.ca',
    },
    {
      name: 'Zhuo Ping Huang',
      studentNumber: '301360106',
      email: 'edmond_huang@sfu.ca',
    },
    {
      name: 'Ryan Yu',
      studentNumber: '301365748',
      email: 'yuryany@sfu.ca',
    },
  ];

  return (
    <>
      <Header>Group 13</Header>
      <StyledTable>
        <StyledThead>
          <tr>
            <StyledTh>Name</StyledTh>
            <StyledTh>Student Number</StyledTh>
            <StyledTh>Email</StyledTh>
          </tr>
        </StyledThead>
        <tbody>
          {students.map((student) => (
            <StyledTr key={student.studentNumber}>
              <StyledTd>{student.name}</StyledTd>
              <StyledTd>{student.studentNumber}</StyledTd>
              <StyledTd>{student.email}</StyledTd>
            </StyledTr>
          ))}
        </tbody>
      </StyledTable>
      <p>
        You can download our app{' '}
        <a href='https://drive.google.com/file/d/1Ym_rrYM7l4-n0LORTPELwg6txSU1zmN2/view?usp=sharing'>
          here
        </a>
      </p>
    </>
  );
};

export default GroupInfo;
