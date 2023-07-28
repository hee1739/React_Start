const Container = ({children}) => { //Test.jsx에서의 div요소들이 children의 프록으로 들어감
    return (<div style={{ margin:20, padding:20, border: "1px solid gray" }}> 
        {children}
    </div>
    );
};

export default Container;