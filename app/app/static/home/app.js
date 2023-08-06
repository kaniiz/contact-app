// update button
(() => {
   
})()


function handleUpdate(id) {
    const updateBtn = $(`#update-btn-${id}`)
    const emailIn = $(`#email-input-${id}`)
    const mobileIn = $(`#mobile-input-${id}`)
    const addrIn = $(`#addr-input-${id}`)



    if (updateBtn.text() === "Update") {
        emailIn.removeAttr("disabled")
        mobileIn.removeAttr("disabled")
        addrIn.removeAttr("disabled")
        updateBtn.text("Save")
    } else {
        sendUpdate(id, emailIn.val(), mobileIn.val(), addrIn.val())
        emailIn.attr("disabled", "disabled")
        mobileIn.attr("disabled", "disabled")
        addrIn.attr("disabled", "disabled")
        updateBtn.text("Update")
    }
}

function handleDelete(id) {
    const csrftoken = getCookie('csrftoken');
    $.post({
        url: '/contacts/delete',
        headers: {'X-CSRFToken': csrftoken, 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'},
        data: JSON.stringify({
            id,           
        })       
    }).done(() => {
        location.reload()
    });
}


function sendUpdate(id, email, mobile, addr) {
    const csrftoken = getCookie('csrftoken');
    $.post({
        url: '/contacts/update',
        headers: {'X-CSRFToken': csrftoken, 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest'},
        data: JSON.stringify({
            id,
            email,
            mobile,
            address: addr
        })       
    }).done(() => {
        location.reload()
    });
}

function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
