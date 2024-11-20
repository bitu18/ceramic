import classNames from 'classnames/bind';
import styles from './News.module.scss';
import HeaderProduct from '~/components/HeaderProduct';
import NewsInfor from '~/components/NewsInfor';

const cx = classNames.bind(styles);
function News() {
    return (
        <div className={cx('wrapper')}>
            <HeaderProduct title="Tin mới" />

            <NewsInfor
                date="03:36:00 13/5/2022"
                title="Pha trà như nghệ nhân"
                firstDes="Gặp chuyện tình cờ, nếu vô ý sẽ bỏ qua, còn người tinh tế có thể tận dụng để biến nó thành sự kiện
                    để đời. Như trong lời kể của ông Lý Ngọc Minh, cái tình cờ của ông đến từ 30 năm trước, khi du lịch
                    thường được bạn bè dẫn đến quán trà. Uống tại tiệm ngon nhưng mua về, trăm lần như một, ông đều cảm
                    thấy ấm ức như bị gạt vì trà pha ra chẳng thơm mà lúc nhạt nhẽo, khi đắng chát. Mua đúng gói trà
                    người bán vừa pha, đem về cũng không thơm ngon mong muốn."
                firstImg="https://prod-files-secure.s3.us-west-2.amazonaws.com/af229afb-e14c-4972-994c-0fc599f26aa6/de2ccde3-6ab1-4a5a-a7a6-f441e2264f87/e1.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241029%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241029T013021Z&X-Amz-Expires=3600&X-Amz-Signature=6b7fce9883d75b6e552b7af79f70df302edf4ef789112d450303265b491760d4&X-Amz-SignedHeaders=host&x-id=GetObject"
                secondDes="Không cam chịu “bị gạt”, ông tìm lời giải, rồi vỡ lẽ bí ẩn không chỉ ở lá trà mà còn nằm trong cách
                    pha. Tìm được lời giải ở nghệ thuật pha trà công phu, ông chợt nảy ý tưởng: đơn giản hóa các thao
                    tác ấy bằng việc sản xuất ra bộ dụng cụ để người mới pha lần đầu đạt được hương vị như đã qua bàn
                    tay của nghệ nhân, dù không có kiến thức về trà."
                secondImg="https://prod-files-secure.s3.us-west-2.amazonaws.com/af229afb-e14c-4972-994c-0fc599f26aa6/5499c39c-6b97-491f-8049-1ca91e7fb3d9/e2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241029%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241029T013021Z&X-Amz-Expires=3600&X-Amz-Signature=40099265b040eb0736cf3509662098178de2f80ddb33e3e60a087491b67180ce&X-Amz-SignedHeaders=host&x-id=GetObject"
                thirdDes=" Trà, không như các thức nước khác, không uống ừng ực để giải khát mà phải nhâm nhi để thấm cái
                    hương, nếm trọn vị. Nước trà có caffein giúp người thưởng thức cảm thấy sảng khoái, hưng phấn và vui
                    vẻ. Thế nên mời trà chính là tạo tiền đề cho sự vui vẻ cho người đối ẩm. Mà theo ông Minh, bất cứ
                    việc gì muốn thành công thì phải khiến cho đối tác vui vẻ. Bởi vui nghĩa là thích, mà thích sẽ giải
                    quyết theo hướng tích cực, hợp tác thành công; còn không thích sẽ viện dẫn lý do, trì hoãn."
                thirdImg="https://prod-files-secure.s3.us-west-2.amazonaws.com/af229afb-e14c-4972-994c-0fc599f26aa6/a5feb629-2c13-4984-a275-c05d7bae0109/e3.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241029%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241029T013022Z&X-Amz-Expires=3600&X-Amz-Signature=95c82477abea9083abcb5d4f54cc3aeb0a0a032a16ac884beef2e1d2c14f1db6&X-Amz-SignedHeaders=host&x-id=GetObject"
                fourthDes=" Văn hóa thưởng trà đã có từ hàng nghìn năm, nhưng vị tổng công trình sư vẫn có thể sáng chế ra một
                    bộ dụng cụ mới, mà với ông nó còn mang ý nghĩa của một vật để đời. Bởi không chỉ học nhiều, đọc
                    nhiều, làm đầy kho tàng kiến thức của mình mỗi ngày, ông còn vận hành Minh Long - công ty đã thành
                    lập 50 năm - với tinh thần của một người làm startup."
                fourthImg="https://prod-files-secure.s3.us-west-2.amazonaws.com/af229afb-e14c-4972-994c-0fc599f26aa6/a0f5b504-d0d9-44a2-892a-27435800c6b4/e4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241029%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241029T013022Z&X-Amz-Expires=3600&X-Amz-Signature=11e65a03e32114e6f4a3bacd5d030c9b1993524747f09114c4c31959fd169d76&X-Amz-SignedHeaders=host&x-id=GetObject"
            />

            <NewsInfor
                date="03:32:00 13/5/2022"
                title="Từ hình ảnh dân gian đến tượng chuột Phú Quý"
                firstDes="Chuột đứng đầu trong 12 con giáp, là loài quen thuộc với người Việt. Chuột vốn khôn ngoan, lanh lợi - ưu thế giúp tăng khả năng sinh tồn giữa tự nhiên. Loài vật này cũng trở thành đề tài cho các bức tranh dân gian, trong tự nhiên có lúc cắn đuôi nhau thể hiện sự đoàn kết. Chuột còn có những biểu hiện được cho là điềm lành. Như vào mùa gặt mới, tiếng chuột kêu rúc rích khắp nơi, người nông dân lại như mở cờ trong bụng với niềm tin mùa màng sẽ bội thu, kho lúa vun đầy ắp. Những đặc tính ấy được khai thác để trở thành tên gọi cho 2 bức tượng linh vật năm nay của Minh Long: Phú và Quý."
                firstImg="https://prod-files-secure.s3.us-west-2.amazonaws.com/af229afb-e14c-4972-994c-0fc599f26aa6/d31153cb-6ad5-4deb-8850-c5e6e82ad011/d1.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241029%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241029T013021Z&X-Amz-Expires=3600&X-Amz-Signature=cd8595f9d18eb75191ae32fa25b6a6e78f9367d9258705f09097b6c8dd5726ee&X-Amz-SignedHeaders=host&x-id=GetObject"
                secondDes="Nhân hóa một con vật là quá trình nhiều khó khăn. Qua được bước đầu tiên - tìm kiếm hình ảnh mong muốn, ông Lý Huy Sáng tiến tới công đoạn thứ hai: lắp ráp các chi tiết để có thiết kế hoàn thiện. Vì các đường nét được lai tạo nên phần cơ học, dáng điệu phải tính toán để đạt tỷ lệ hài hòa, nhìn vào vẫn thấy chấp nhận được, không cải biến đến mức nhìn vào không ra. Điệu cười, ánh mắt được nhấn nhá tinh tế, toát lên sự vui vẻ. Đôi má phúng phính, như đứa trẻ bụ bẫm, cũng như đang nhai đồ ăn, thể hiện nét dễ thương, no đủ."
                secondImg="https://prod-files-secure.s3.us-west-2.amazonaws.com/af229afb-e14c-4972-994c-0fc599f26aa6/acc61608-a7a2-40a9-bbbf-176b2436fbd5/d2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241029%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241029T013021Z&X-Amz-Expires=3600&X-Amz-Signature=573e54c5b5db31eee53295f3b67175dd026dddf8d33d3ff95cfe5aa36a922473&X-Amz-SignedHeaders=host&x-id=GetObject"
                thirdDes=" Để cá tính như một con người hiện rõ, bức tượng được khoác thêm chiếc áo yếm, chân đi đôi giày nhằm lồng ghép thêm linh hồn, sức sống. Hình dáng của chú chuột cũng phải được tính toán kỹ vì phần hông là một đường cong, bên trong rỗng, không có điểm tựa chịu lực. Tạo hình không khéo, độ dày không đủ, nhiệt độ không chính xác thì khi nung con chuột sẽ bị bẹp ra, biến dạng."
                thirdImg="https://prod-files-secure.s3.us-west-2.amazonaws.com/af229afb-e14c-4972-994c-0fc599f26aa6/61a62354-c66f-49b0-a0a2-667e23545a67/d3.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241029%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241029T013022Z&X-Amz-Expires=3600&X-Amz-Signature=a5763ebcb5023a051b5574327d140960680360ae3762d503a137af6929744971&X-Amz-SignedHeaders=host&x-id=GetObject"
                fourthDes="Cứ như vậy, mỗi sản phẩm ra lò đều được đánh giá tổng quan về kỹ thuật, trang trí, sản xuất, chi phí, giá thành, truyền tải được thông điệp hay không… Chỗ nào khiếm khuyết ngay lập tức được bổ sung, chưa ổn thì cải tiến, qua ít nhất 6-7 mẫu thử, tượng chuột mới nhận được cái gật đầu của vị tổng công trình sư."
                fourthImg="https://prod-files-secure.s3.us-west-2.amazonaws.com/af229afb-e14c-4972-994c-0fc599f26aa6/0681ff03-7742-46f2-9c53-a5d42e6f28cd/d4.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241029%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241029T013022Z&X-Amz-Expires=3600&X-Amz-Signature=a097f3a9c43e3e21af3065ed725ba2c49b9c61348f4d4f21280095a677f488c2&X-Amz-SignedHeaders=host&x-id=GetObject"
            />

            <NewsInfor
                date="03:27:00 13/5/2022"
                title="Bản hoà ca Thiên nhiên và Con người"
                firstDes="Trải qua nhiều công đoạn của quá trình sản xuất, Đất, Nước, Gió, Lửa gắn kết, hoà quyện vào nhau một cách khăng khít và bền chặt để tạo thành lớp men bền chắc, sáng bóng. Sự hoà hợp âm dương ngũ hành hình thành nên phần thể xác cho Sứ, để mỗi sản phẩm đều chứa đựng linh hồn của tạo hoá. Sứ Minh Long là tinh hoa từ Đất."
                firstImg="https://prod-files-secure.s3.us-west-2.amazonaws.com/af229afb-e14c-4972-994c-0fc599f26aa6/d871ed2e-6bf6-4f24-b648-2ffa8dd0c4fc/s1.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241029%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241029T013021Z&X-Amz-Expires=3600&X-Amz-Signature=97ff25b5d7ffac9df5a5fa26de63cedefbaa6147bb550d17b1a00b166005850e&X-Amz-SignedHeaders=host&x-id=GetObject"
                secondDes="Con người, với trí tuệ và bàn tay khéo léo của “Người cha” uốn nắn hình dáng, dạy dỗ từng nét cọ, nét văn hoá, giúp “Đứa con Sứ” trưởng thành. Cha rèn giũa nhân cách cho Con bằng Bàn tay, Trái tim và Khối óc của mình. Khi Sứ thành hình, đôi bàn tay tài hoa của người thợ nhào nặn, gọt giũa, tạo hình, tạo khối từng đường cong, nét thẳng, khoác lên mình Sứ lớp áo men sáng trong, tô vẽ những họa tiết tinh xảo."
                secondImg="https://prod-files-secure.s3.us-west-2.amazonaws.com/af229afb-e14c-4972-994c-0fc599f26aa6/6a6f3a3b-c3b4-4c6f-a300-ec21f787cfd5/s2.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241029%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241029T013021Z&X-Amz-Expires=3600&X-Amz-Signature=8ca9ad06e8e35f922f27619dfc5c0cade6b9d419a0b54be685cc9a4662ec3771&X-Amz-SignedHeaders=host&x-id=GetObject"
                thirdDes="Sản phẩm Sứ Minh Long đạt đến độ chế tác tinh xảo nhất. Những công nghệ tiên tiến của Thế giới được áp dụng một cách sáng tạo nhất vào các công đoạn sản xuất. Ngoài áp dụng thành tựu khoa học công nghệ của thế giới vào sản xuất, Minh Long cũng đã nghiên cứu và sớm ứng dụng thành công nhiều kỹ thuật mới, đặc biệt là công nghệ nano."
                thirdImg="https://prod-files-secure.s3.us-west-2.amazonaws.com/af229afb-e14c-4972-994c-0fc599f26aa6/9fe3ec5f-80ce-4b08-bf4b-6a5a94b10bfc/s3.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241029%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241029T013022Z&X-Amz-Expires=3600&X-Amz-Signature=369479d85c81343410842815b7ce60c4816238f5405b78511baf7bddac4a6081&X-Amz-SignedHeaders=host&x-id=GetObject"
                fourthDes="Sản phẩm Sứ Minh Long chứa đựng những giá trị văn hóa tinh thần dân tộc qua hàng nghìn năm lịch sử với triết lý: 4 Không và 4 Có. Không thời gian, Không biên giới, Không giới tính, Không tuổi tác. Sứ Minh Long cao cấp nhưng không xa cách mà gần gũi, dành cho tất cả mọi người. Nét độc đáo của tinh hoa văn hóa Việt được thổi hồn vào Sứ và nâng tầm thành văn hoá hiện đại nhờ đường nét hoa văn truyền thống Việt giao hòa cùng bố cục đương đại. Đẹp tinh tế mà hài hòa. Trang nhã nhưng không kém phần sang trọng. Sứ Minh Long là những tác phẩm nghệ thuật hoàn mỹ, có văn hóa, có nghệ thuật, có phong cách, có hồn."
                fourthImg="https://prod-files-secure.s3.us-west-2.amazonaws.com/af229afb-e14c-4972-994c-0fc599f26aa6/3d25796c-d5c1-40e0-8924-6f7ea8544b4f/s4.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45GO43JXI4%2F20241029%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20241029T013022Z&X-Amz-Expires=3600&X-Amz-Signature=16a5abc5f533ceea45f25893ce9cd22a95945fc814596b9b3bfcd8b2821eaf83&X-Amz-SignedHeaders=host&x-id=GetObject"
            />

            <h3 className={cx('end')}>Không còn bài viết nào</h3>
        </div>
    );
}

export default News;
