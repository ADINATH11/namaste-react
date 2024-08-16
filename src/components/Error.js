import { useRouteError } from "react-router-dom"

const Error = () =>{
    const err = useRouteError()
    console.log(err)
    return (
        <div className="error">
            <h1>OOPs! Page Not Found</h1>
            <h2>{err?.status}:{err?.statusText}</h2>
            <h3>{err.data}</h3>
        </div>
    )
}

export default Error;