import Swal from 'sweetalert2';

export const successMessage = () => {
    Swal.fire({
        title: "Ваше сообщение отправлено!",
        text: "Наш менеджер свяжется с вами в ближайшее время",
        icon: "success",
        confirmButtonColor: "#FB6406",
        timer: 4000
    });

    // Swal.fire({
    //     position: "top-end",
    //     icon: "success",
    //     title: "Your work has been saved",
    //     showConfirmButton: false,
    //     timer: 1500
    // });
}

export const errorMessage = () => {
    Swal.fire({
        title: "Ошибка отправки данных!",
        text: "Сообщение не отправлено. Попробуйте ещё раз!",
        icon: "error",
        timer: 4000
    });
}