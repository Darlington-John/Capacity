import { Link } from "@remix-run/react";

const Button = (props) => {
    return (  <>
    {props.border && (

        <Link to={props.link} className="xs:w-full">
        <button className="px-20 py-5  rounded-full border  border-2 border-neonGreen text-base text-neonGreen bg-darkNavy hover:bg-neonGreen hover:text-black ease-in-out duration-300  xs:px-5 xs:py-2 w-full">  
{props.action}
        </button>
        </Link>
    )}
    
    </>);
}
 
export default Button;