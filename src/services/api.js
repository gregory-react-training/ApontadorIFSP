class API {
    state = {
        valor: [],
    };

    listagem() 
    {
        let url = "192.168.0.29:8086/ifciencia2018/per/webservice/per_apontador.php";
        alert(url);
        fetch(url).then((response) => response.json()).then((responseJson) =>
        {
            this.setState({valor: responseJson});
        });
    };
}

export default API;