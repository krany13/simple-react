import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";

function App() {
    return (
        <div>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Users"} collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <OnOff/>
            <OnOff/>
            <OnOff/>
            <OnOff/>
            {/*<PageTitle title={"This is App Component"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}
            {/*Article 1*/}
            {/*<Rating value={3}/>*/}
            {/*<Accordion titleValue={"Menu"}/>*/}
            {/*<Accordion titleValue={"Users"}/>*/}
            {/*Article 2*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <h1>{props.title}</h1>
    )
}

export default App;
