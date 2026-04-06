function kontak(dataform) {
    if (dataform.nama.value == ""){
        alert("Nama belum diisi");
        dataform.nama.focus();
        return false;
    }
    if (dataform.email.value == ""){
        alert("Email belum diisi");
        dataform.email.focus();
        return false;
    }
    else{
        var validemail = dataform.email.value;
        posisiAt = validemail.indexOf("@");
        posisiTitik = validemail.lastIndexOf(".");
        if(posisiAt < 1 || posisiTitik - posisiAt < 2) {
            alert("Alamat email belum benar");
            dataform.email.focus();
            return false;
        }
    }
    if (dataform.nomorhp.value == ""){
        alert("Nomor Hp belum diisi");
        dataform.nomorhp.focus();
        return false;
    }
    else{
        var validnomorhp = dataform.nomorhp.value;
        posisiKL = validnomorhp.indexOf("08");
        if(posisiKL < 0){
            alert("Nomorhp belum benar");
            dataform.nomorhp.focus();
            return false;
        }
    }
    return true;
}