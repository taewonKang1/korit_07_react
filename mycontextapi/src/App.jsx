import MyComponent2 from './MyComponent2'
import AuthContext from './AuthContext';
import MyTable from './MyTable';
import './App.css'
import MyForm from './MyForm';

function App() {

  const username = '김일';

  return (
    <AuthContext.Provider value={username}>
      <MyForm />
      <MyTable />
      <MyComponent2 />
    </AuthContext.Provider>
  )
}

export default App
