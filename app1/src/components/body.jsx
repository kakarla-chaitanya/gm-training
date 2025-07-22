export default function Body(){
    return (<div className="body">
        <div>Section 1</div>
        <div>Section 2</div>
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEdiBJUETd2hckKrpYTTa89ffeu0aA-BY1ig&s" />
        </div>
        {false && <div> Section 4</div>}
    </div>);
}