
function MyForm() {
  const handleSubmit = (event) => {
    event.preventDefault(); // md 파일에서 작성한 기본 동작 방지 메서드
    // 그러면 onSubmit에 딸려있는 default는 뭐냐면 양식 제출입니다. -> DB나 백엔드로
    alert('제출 시에 나오는 경고창입니다');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="submit" value="제출 !" />
      </form>
    </>
  );
}

export default MyForm