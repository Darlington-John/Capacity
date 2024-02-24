import { LoaderFunction,  redirect } from "@remix-run/node";
function Index() {
    return (<div>
        hello
    </div>  );
}

export const loader: LoaderFunction = async () =>{

    return redirect("/")
}
export default Index;