getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("get", "/5.json");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.status <300) {
            console.log(typeof request.response);
            console.log(request.response);
            const bool = JSON.parse(request.response);
            console.log(typeof bool);
            console.log(bool);
        }
    };
    request.send();
};
getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/4.xml");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.status <300) {
            const dom = request.responseXML;
            const text = dom.getElementsByTagName("warning")[0].textContent;
            console.log(text.trim());
        }
    };
    request.send();
};
getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/3.html");
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status >= 200 && request.status < 300){
            const div = document.createElement("div");
            div.innerHTML = request.response;
            document.body.appendChild(div);
        }
    };
    request.send();
};
getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/2.js");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
            const script = document.createElement("script");
            script.innerHTML = request.response;
            document.body.appendChild(script);
        }
    };
    request.send();
};

getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/style.css");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.status < 300) {
            const style = document.createElement("style");
            style.innerHTML = request.response;
            document.head.appendChild(style);
        } 
    };
    request.send();
};