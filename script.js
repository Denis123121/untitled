function buttonLoad_Click(button){
    button.textContent = "Скачивается.....";

    setTimeout(()=>{
        button.textContent = "Установлено";
    },2000);
}