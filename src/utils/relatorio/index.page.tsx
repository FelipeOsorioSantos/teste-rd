
export function Download () {
        let filename = "report.txt";
        let text = "Hello, I am a TXT report";
        let blob = new Blob([text], {type:'text/plain'});
        let link = document.createElement("a");
        link.download = filename;
        //link.innerHTML = "Download File";
        link.href = window.URL.createObjectURL(blob);
        document.body.appendChild(link);
        link.click();
        setTimeout(() => {
            document.body.removeChild(link);
            window.URL.revokeObjectURL(link.href);
        }, 100);
    }



