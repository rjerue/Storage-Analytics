class DC_Header extends React.Component {

    //Example of a working xhr thing. It's sync, which is ehhh, but it works. Goal is to make it work for a json file later and somewhere else.
    getName() {
        var name = 'nope';
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/test', false);
        xhr.send(null);
        if (xhr.status === 200) {
            console.log(xhr.responseText);
            return xhr.responseText;
        } else {
            alert('Request failed.  Returned status of ' + xhr.status);
            return 'yolo';
        }
    }
    render() {
        return (
            <div className="jumbotron text-center">
                <h1>DataCore</h1>
                <p>{this.getName()}</p>
            </div>
        );
    }
}
export default DC_Header;
