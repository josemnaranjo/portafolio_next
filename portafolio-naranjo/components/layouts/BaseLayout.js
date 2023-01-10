
import Header from "../share/Header"

const BaseLayout = (props) => {
    return (
        <>
            <Header />
            {props.children}
        </>
    );
}

export default BaseLayout;
