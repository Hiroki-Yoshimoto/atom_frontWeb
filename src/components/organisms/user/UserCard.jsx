import styled from "styled-components";

export const UserCard = () => {
  return (
    <div>
      <img
        src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80"
        height={100}
        width={100}
        alt="プロフィール"
      />
      <p>名前</p>
      <SDL>
        <dl>
          <dt> メール</dt>
          <dt> aaa@gmail.com</dt>
          <dt> TEL</dt>
          <dt> 0120-117-177</dt>
          <dt> 会社名</dt>
        </dl>
      </SDL>
    </div>
  );
};
const SDL = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
  }
`;
