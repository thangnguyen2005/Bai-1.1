document.addEventListener('DOMContentLoaded', (event) => {
    // Lấy tất cả các phần tử <img> trong phần slider của trang web
    const images = document.querySelectorAll('.slider img');
    // Khởi tạo biến để lưu chỉ số của hình ảnh hiện tại
    let currentIndex = 0;
    // Biến này để kiểm tra xem hiện đang có hiệu ứng chuyển đổi ảnh hay không
    let isTransitioning = false;

    // Hàm này để hiển thị ảnh với chỉ số được truyền vào
    function showImage(index) {
        // Lặp qua tất cả các ảnh và loại bỏ các lớp active và transition-out
        images.forEach((img, i) => {
            img.classList.remove('active', 'transition-out');
            // Nếu chỉ số của ảnh đúng với chỉ số được truyền vào, thêm lớp active
            if (i === index) {
                img.classList.add('active');
            }
        });
        // Đặt isTransitioning về false để cho phép chuyển đổi ảnh tiếp theo
        isTransitioning = false;
    }

    // Hàm này để chuyển đến ảnh tiếp theo
    function nextImage() {
        // Nếu đang có hiệu ứng chuyển đổi, thoát khỏi hàm
        if (isTransitioning) return;
        // Đánh dấu là đang có hiệu ứng chuyển đổi
        isTransitioning = true;
        // Thêm lớp transition-out vào ảnh hiện tại để tạo hiệu ứng chuyển đổi
        images[currentIndex].classList.add('transition-out');
        // Sau một khoảng thời gian, chuyển đến ảnh tiếp theo
        setTimeout(() => {
            // Tính toán chỉ số của ảnh tiếp theo sử dụng toán tử %
            currentIndex = (currentIndex + 1) % images.length;
            // Hiển thị ảnh tiếp theo
            showImage(currentIndex);
        }, 1000); // 1000 milliseconds = 1 giây
    }

    // Hàm này để chuyển đến ảnh trước đó
    function prevImage() {
        // Nếu đang có hiệu ứng chuyển đổi, thoát khỏi hàm
        if (isTransitioning) return;
        // Đánh dấu là đang có hiệu ứng chuyển đổi
        isTransitioning = true;
        // Thêm lớp transition-out vào ảnh hiện tại để tạo hiệu ứng chuyển đổi
        images[currentIndex].classList.add('transition-out');
        // Sau một khoảng thời gian, chuyển đến ảnh trước đó
        setTimeout(() => {
            // Tính toán chỉ số của ảnh trước đó sử dụng toán tử %
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        }, 1000);
    }

    showImage(currentIndex);

    document.querySelector('.next').addEventListener('click', nextImage);
    document.querySelector('.prev').addEventListener('click', prevImage);
});
