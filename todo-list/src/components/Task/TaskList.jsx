import Button from '../UI/ButtonOne'
import AddTask from './AddTask'
import { useState } from 'react'

export default function TaskList() {

  const [todoData, setTodoData] = useState([]);

  function deleteTodo(e) {
    e.preventDefault();
    const id = parseInt(e.currentTarget.getAttribute('data-id'));
    console.log(id);
    setTodoData(todoData.filter((item) => item.id !== id));
  }


  return (
    <>
      <div className="task-list-wrapper">
        <AddTask newTodo={setTodoData} />
        <hr className="my-4" />
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700 uppercase text-sm">
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">Todo</th>
                <th className="px-4 py-2 text-center">Durum</th>
                <th className="px-4 py-2 text-center">İşlem</th>
              </tr>
            </thead>
            <tbody>
              {todoData.map((todo, index) => (
                <tr
                  key={todo.id}
                  className={`border-b text-gray-600 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                >
                  <td className="px-4 py-2">{todo.id}</td>
                  <td className="px-4 py-2">{todo.todo}</td>
                  <td className="px-4 py-2 text-center">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${todo.status == 1
                        ? "bg-green-100 text-green-600"
                        : "bg-red-600 text-white"
                        }`}
                    >
                      {todo.status == 1 ? 'Yapıldı' : 'Yapılmadı'}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-center">
                    <Button
                      size="small"
                      onClick={deleteTodo}
                      dataId={todo.id}
                      color="error"
                      variant="contained"
                      className="!text-white !bg-red-500 hover:!bg-red-600"
                    >
                      Sil
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </>
  )
}