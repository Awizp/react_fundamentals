import useFetch from "./utils/useFetch"

const CustomHook = () => {

    // For custom hook i am ging to create fetch method into hook so I can use it everywhere

    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos")

    return (
        <div>
            {data && data.map((todo) => <p key={todo.id}>{todo.title}</p>)}

            {/* Here i mentioned data early bcoz it tooks some time to load data from Rest API so if data is true means it loads content */}
        </div>
    )
}

export default CustomHook