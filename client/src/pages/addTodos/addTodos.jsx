
import '../../styles/addTodos.css'
import Header from "../../components/header";

export default function AddTodosPage(){

    return(
        <>
            <Header pageName={"Update Todos"} />
            <main>
                <section className='midTodos mid1'>
                    <h2>Current Todos</h2>
                    <div>
                        <ul>
                            <li>wow a todo</li>
                            <li>wow a todo</li>
                            <li>wow a todo</li>
                        </ul>
                    </div>
                </section>
                <section className='midTodos mid2'>
                    <div className='editArea' >
                        <button>Add Todo</button>
                        <textarea></textarea>
                        <button>Add Tags</button>
                        <ul>
                            <li>tag1</li>
                            <li>tag2</li>
                            <li>tag3</li>
                            <li>tag4</li>
                        </ul>
                    </div>
                    <div></div>
                </section>
                <section className='midTodos mid3'>
                    <h2>Past Todos</h2>
                    <div>
                        <ul>
                            <li>wow a todo</li>
                            <li>wow a todo</li>
                            <li>wow a todo</li>
                        </ul>
                    </div>
                </section>
            </main>
        </>
    )
}