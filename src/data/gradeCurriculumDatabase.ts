import { LessonInfo } from "./gradeCurriculums";

// =========================================================================
// TOÀN BỘ CHƯƠNG TRÌNH CHI TIẾT 35 TUẦN THEO CHUẨN SGK KẾT NỐI TRI THỨC
// ĐỒNG BỘ TUYỆT ĐỐI GIỮA KHDH (Kế hoạch dạy học), LBG (Lịch báo giảng) VÀ TKB
// =========================================================================

export interface WeeklySubjectLessons {
  [week: number]: {
    [period: number]: {
      title: string;
      sub?: string;
      note?: string;
    };
  };
}

// -------------------------------------------------------------------------
// 1. KHỐI 5: TOÀN BỘ 35 TUẦN ĐẦY ĐỦ CÁC MÔN
// -------------------------------------------------------------------------

// TIẾNG VIỆT 5: 7 tiết / tuần (Tổng 245 tiết / năm)
export const GRADE_5_TIENG_VIET: WeeklySubjectLessons = {
  1: {
    1: { title: "Bài 1: Thanh âm của gió (Tiết 1: Đọc)", sub: "Đọc", note: "Cảm thụ âm thanh thiên nhiên." },
    2: { title: "Bài 1: Thanh âm của gió (Tiết 2: LTVC: Luyện tập về danh từ, động từ, tính từ)", sub: "LTVC", note: "Ôn tập 3 từ loại cơ bản." },
    3: { title: "Bài 1: Thanh âm của gió (Tiết 3: Viết: Tìm hiểu cách viết bài văn kể chuyện sáng tạo)", sub: "Viết", note: "Kể chuyện sáng tạo qua tưởng tượng." },
    4: { title: "Bài 2: Cánh đồng hoa (Tiết 1: Đọc)", sub: "Đọc", note: "Vẻ đẹp tình bạn và thiên nhiên." },
    5: { title: "Bài 2: Cánh đồng hoa (Tiết 2: Đọc tiếp)", sub: "Đọc", note: "Luyện đọc diễn cảm." },
    6: { title: "Bài 2: Cánh đồng hoa (Tiết 3: Viết: Tìm hiểu cách viết bài văn kể chuyện sáng tạo (tiếp))", sub: "Viết", note: "Cấu trúc bài văn kể chuyện sáng tạo." },
    7: { title: "Bài 2: Cánh đồng hoa (Tiết 4: Đọc mở rộng)", sub: "Đọc mở rộng", note: "Đọc sách báo về thế giới tuổi thơ." },
  },
  2: {
    1: { title: "Bài 3: Tuổi Ngựa (Tiết 1: Đọc)", sub: "Đọc", note: "Tình yêu thương mẹ và khát vọng tuổi thơ." },
    2: { title: "Bài 3: Tuổi Ngựa (Tiết 2: LTVC: Đại từ)", sub: "LTVC", note: "Khái niệm và vai trò của đại từ." },
    3: { title: "Bài 3: Tuổi Ngựa (Tiết 3: Viết: Lập dàn ý cho bài văn kể chuyện sáng tạo)", sub: "Viết", note: "Lập dàn ý 3 phần chi tiết." },
    4: { title: "Bài 4: Bến sông tuổi thơ (Tiết 1: Đọc)", sub: "Đọc", note: "Kỉ niệm gắn bó bến sông quê." },
    5: { title: "Bài 4: Bến sông tuổi thơ (Tiết 2: Đọc tiếp)", sub: "Đọc", note: "Đọc hiểu chi tiết và ý nghĩa bài đọc." },
    6: { title: "Bài 4: Bến sông tuổi thơ (Tiết 3: Viết: Viết bài văn kể chuyện sáng tạo)", sub: "Viết", note: "Viết bài văn hoàn chỉnh dựa trên dàn ý." },
    7: { title: "Bài 4: Bến sông tuổi thơ (Tiết 4: Nói và nghe: Những câu chuyện thú vị)", sub: "Nói và nghe", note: "Kể câu chuyện thú vị em đã chứng kiến." },
  },
  3: {
    1: { title: "Bài 5: Tiếng hạt nảy mầm (Tiết 1: Đọc)", sub: "Đọc", note: "Tình yêu thương học sinh của cô giáo lớp học đặc biệt." },
    2: { title: "Bài 5: Tiếng hạt nảy mầm (Tiết 2: LTVC: Luyện tập về đại từ)", sub: "LTVC", note: "Thực hành thay thế đại từ tránh lặp từ." },
    3: { title: "Bài 5: Tiếng hạt nảy mầm (Tiết 3: Viết: Đánh giá, chỉnh sửa bài văn kể chuyện sáng tạo)", sub: "Viết", note: "Rút kinh nghiệm và sửa lỗi bài viết." },
    4: { title: "Bài 6: Ngôi sao sân cỏ (Tiết 1: Đọc)", sub: "Đọc", note: "Nghị lực vươn lên và tinh thần thể thao cao thượng." },
    5: { title: "Bài 6: Ngôi sao sân cỏ (Tiết 2: Đọc tiếp)", sub: "Đọc", note: "Luyện đọc nâng cao giọng biểu cảm." },
    6: { title: "Bài 6: Ngôi sao sân cỏ (Tiết 3: Viết: Tìm hiểu cách viết báo cáo công việc)", sub: "Viết", note: "Cấu trúc và nội dung báo cáo công việc." },
    7: { title: "Bài 6: Ngôi sao sân cỏ (Tiết 4: Đọc mở rộng)", sub: "Đọc mở rộng", note: "Tìm đọc bài viết về gương thanh thiếu niên vượt khó." },
  },
  4: {
    1: { title: "Bài 7: Bộ sưu tập độc đáo (Tiết 1: Đọc)", sub: "Đọc", note: "Niềm say mê nghiên cứu và lưu giữ kỉ vật văn hóa." },
    2: { title: "Bài 7: Bộ sưu tập độc đáo (Tiết 2: LTVC: Từ đồng nghĩa)", sub: "LTVC", note: "Nhận biết và phân loại từ đồng nghĩa hoàn toàn và không hoàn toàn." },
    3: { title: "Bài 7: Bộ sưu tập độc đáo (Tiết 3: Viết: Lập dàn ý cho báo cáo công việc)", sub: "Viết", note: "Thực hành lập dàn ý báo cáo hoạt động chi đội / lớp." },
    4: { title: "Bài 8: Hành trình của học vấn (Tiết 1: Đọc)", sub: "Đọc", note: "Tầm quan trọng của việc học tập suốt đời." },
    5: { title: "Bài 8: Hành trình của học vấn (Tiết 2: Đọc tiếp)", sub: "Đọc", note: "Phân tích ý nghĩa các dẫn chứng trong bài." },
    6: { title: "Bài 8: Hành trình của học vấn (Tiết 3: Viết: Viết báo cáo công việc)", sub: "Viết", note: "Thực hành viết bản báo cáo hoàn chỉnh." },
    7: { title: "Bài 8: Hành trình của học vấn (Tiết 4: Nói và nghe: Trao đổi về một vấn đề đáng quan tâm)", sub: "Nói và nghe", note: "Bày tỏ quan điểm về thói quen tự học và đọc sách." },
  },
  5: {
    1: { title: "Bài 9: Khát vọng sông Hồng (Tiết 1: Đọc)", sub: "Đọc", note: "Lịch sử dựng nước và vẻ đẹp hào hùng của dòng sông Hồng." },
    2: { title: "Bài 9: Khát vọng sông Hồng (Tiết 2: LTVC: Luyện tập về từ đồng nghĩa)", sub: "LTVC", note: "Chọn từ đồng nghĩa thích hợp điền vào câu." },
    3: { title: "Bài 9: Khát vọng sông Hồng (Tiết 3: Viết: Đánh giá, chỉnh sửa báo cáo công việc)", sub: "Viết", note: "Soát lỗi chính tả, số liệu và cách trình bày báo cáo." },
    4: { title: "Bài 10: Trăng ơi... từ đâu đến? (Tiết 1: Đọc)", sub: "Đọc", note: "Cảm nhận vẻ đẹp hồn nhiên của vầng trăng tuổi thơ." },
    5: { title: "Bài 10: Trăng ơi... từ đâu đến? (Tiết 2: Đọc tiếp)", sub: "Đọc", note: "Học thuộc lòng bài thơ và nêu cảm nhận." },
    6: { title: "Bài 10: Trăng ơi... từ đâu đến? (Tiết 3: Viết: Tìm hiểu cách viết bài văn tả phong cảnh)", sub: "Viết", note: "Quan sát và lựa chọn chi tiết tiêu biểu khi tả cảnh." },
    7: { title: "Bài 10: Trăng ơi... từ đâu đến? (Tiết 4: Đọc mở rộng)", sub: "Đọc mở rộng", note: "Đọc bài thơ hoặc bài văn miêu tả cảnh đẹp quê hương." },
  },
  6: {
    1: { title: "Bài 11: Hạt thóc (Tiết 1: Đọc)", sub: "Đọc", note: "Giá trị của hạt thóc vàng và công lao người nông dân." },
    2: { title: "Bài 11: Hạt thóc (Tiết 2: LTVC: Từ đa nghĩa)", sub: "LTVC", note: "Phân biệt nghĩa gốc và các nghĩa chuyển của từ đa nghĩa." },
    3: { title: "Bài 11: Hạt thóc (Tiết 3: Viết: Quan sát, tìm ý cho bài văn tả phong cảnh)", sub: "Viết", note: "Ghi chép kết quả quan sát cảnh sông nước hoặc cánh đồng." },
    4: { title: "Bài 12: Lớp học trên đường (Tiết 1: Đọc)", sub: "Đọc", note: "Nghị lực ham học của cậu bé Rê-mi trong hoàn cảnh khó khăn." },
    5: { title: "Bài 12: Lớp học trên đường (Tiết 2: Đọc tiếp)", sub: "Đọc", note: "Luyện đọc phân vai nhân vật Rê-mi và cụ Vi-ta-li." },
    6: { title: "Bài 12: Lớp học trên đường (Tiết 3: Viết: Lập dàn ý bài văn tả phong cảnh)", sub: "Viết", note: "Lập dàn ý tả một cảnh đẹp thiên nhiên ở quê hương em." },
    7: { title: "Bài 12: Lớp học trên đường (Tiết 4: Nói và nghe: Bảo tồn cảnh quan thiên nhiên)", sub: "Nói và nghe", note: "Thảo luận các hành động cụ thể giữ gìn môi trường xanh sạch đẹp." },
  },
  7: {
    1: { title: "Bài 13: Mùa thảo quả (Tiết 1: Đọc)", sub: "Đọc", note: "Vẻ đẹp ngút ngàn và hương thơm quyến rũ của rừng thảo quả Tây Bắc." },
    2: { title: "Bài 13: Mùa thảo quả (Tiết 2: LTVC: Luyện tập về từ đa nghĩa)", sub: "LTVC", note: "Tìm nghĩa gốc và nghĩa chuyển của các từ: mắt, chân, đầu, ăn." },
    3: { title: "Bài 13: Mùa thảo quả (Tiết 3: Viết: Viết đoạn văn tả phong cảnh)", sub: "Viết", note: "Viết đoạn văn miêu tả nét đổi thay của cảnh vật theo thời gian." },
    4: { title: "Bài 14: Trước cổng trời (Tiết 1: Đọc)", sub: "Đọc", note: "Bức tranh thiên nhiên vùng núi cao hùng vĩ và cuộc sống đồng bào." },
    5: { title: "Bài 14: Trước cổng trời (Tiết 2: Đọc tiếp)", sub: "Đọc", note: "Luyện đọc diễn cảm và tìm hiểu hình ảnh so sánh độc đáo." },
    6: { title: "Bài 14: Trước cổng trời (Tiết 3: Viết: Viết bài văn tả phong cảnh)", sub: "Viết", note: "Viết bài văn hoàn chỉnh miêu tả cảnh đẹp thiên nhiên." },
    7: { title: "Bài 14: Trước cổng trời (Tiết 4: Đọc mở rộng)", sub: "Đọc mở rộng", note: "Đọc và chia sẻ bài văn miêu tả danh lam thắng cảnh đất nước." },
  },
  8: {
    1: { title: "Bài 15: Kì diệu rừng xanh (Tiết 1: Đọc)", sub: "Đọc", note: "Khám phá thế giới muông thú và thảm thực vật kì vĩ của rừng nhiệt đới." },
    2: { title: "Bài 15: Kì diệu rừng xanh (Tiết 2: LTVC: Mở rộng vốn từ: Thiên nhiên)", sub: "LTVC", note: "Tìm các từ ngữ miêu tả không gian, bầu trời, sông núi." },
    3: { title: "Bài 15: Kì diệu rừng xanh (Tiết 3: Viết: Đánh giá, chỉnh sửa bài văn tả phong cảnh)", sub: "Viết", note: "Chấm chữa bài, sửa cách dùng từ gợi tả và liên kết câu." },
    4: { title: "Bài 16: Tiếng đàn Ba-la-lai-ca trên sông Đà (Tiết 1: Đọc)", sub: "Đọc", note: "Khúc ca tráng lệ đêm trăng công trường thủy điện sông Đà." },
    5: { title: "Bài 16: Tiếng đàn Ba-la-lai-ca trên sông Đà (Tiết 2: Đọc tiếp)", sub: "Đọc", note: "Cảm thụ hình ảnh thơ giàu chất nhạc và chất họa." },
    6: { title: "Bài 16: Tiếng đàn Ba-la-lai-ca trên sông Đà (Tiết 3: Viết: Tìm hiểu cách viết đoạn văn giới thiệu nhân vật)", sub: "Viết", note: "Cách nêu tên nhân vật, đặc điểm ngoại hình, tính cách và cảm nghĩ." },
    7: { title: "Bài 16: Tiếng đàn Ba-la-lai-ca trên sông Đà (Tiết 4: Nói và nghe: Những miền đất diệu kì)", sub: "Nói và nghe", note: "Kể về một danh lam thắng cảnh hoặc miền đất em từng đến." },
  },
  9: {
    1: { title: "Ôn tập giữa học kì 1: Tiết 1 (Đọc)", sub: "Ôn tập", note: "Đánh giá kĩ năng đọc thành tiếng và đọc hiểu các bài từ tuần 1 đến tuần 4." },
    2: { title: "Ôn tập giữa học kì 1: Tiết 2 (Luyện từ và câu)", sub: "Ôn tập", note: "Hệ thống hóa kiến thức về đại từ và từ đồng nghĩa." },
    3: { title: "Ôn tập giữa học kì 1: Tiết 3 (Viết)", sub: "Ôn tập", note: "Rèn luyện kĩ năng viết đoạn văn kể chuyện sáng tạo." },
    4: { title: "Ôn tập giữa học kì 1: Tiết 4 (Đọc)", sub: "Ôn tập", note: "Đánh giá kĩ năng đọc diễn cảm các bài thơ từ tuần 5 đến tuần 8." },
    5: { title: "Ôn tập giữa học kì 1: Tiết 5 (Luyện từ và câu)", sub: "Ôn tập", note: "Củng cố từ đa nghĩa và vốn từ ngữ chủ đề Thiên nhiên." },
    6: { title: "Ôn tập giữa học kì 1: Tiết 6 (Viết)", sub: "Ôn tập", note: "Thực hành viết bài văn tả phong cảnh hoàn chỉnh." },
    7: { title: "Ôn tập giữa học kì 1: Tiết 7 (Kiểm tra đánh giá giữa kì)", sub: "Đánh giá", note: "Làm bài khảo sát năng lực ngôn ngữ giữa kì 1." },
  },
  10: {
    1: { title: "Bài 17: Những trang sách tuổi thơ (Tiết 1: Đọc)", sub: "Đọc", note: "Niềm vui khám phá tri thức qua từng trang sách hay." },
    2: { title: "Bài 17: Những trang sách tuổi thơ (Tiết 2: LTVC: Kết từ)", sub: "LTVC", note: "Nhận biết kết từ và tác dụng nối các từ ngữ, vế câu." },
    3: { title: "Bài 17: Những trang sách tuổi thơ (Tiết 3: Viết: Tìm ý cho đoạn văn giới thiệu nhân vật)", sub: "Viết", note: "Lựa chọn nhân vật trong truyện thiếu nhi và tìm các ý tiêu biểu." },
    4: { title: "Bài 18: Thầy giáo tí hon (Tiết 1: Đọc)", sub: "Đọc", note: "Trò chơi lớp học tuổi thơ hồn nhiên và cảm động." },
    5: { title: "Bài 18: Thầy giáo tí hon (Tiết 2: Đọc tiếp)", sub: "Đọc", note: "Luyện đọc biểu cảm lời thoại giữa các nhân vật." },
    6: { title: "Bài 18: Thầy giáo tí hon (Tiết 3: Viết: Viết đoạn văn giới thiệu nhân vật)", sub: "Viết", note: "Viết đoạn văn 6-8 câu giới thiệu nhân vật yêu thích." },
    7: { title: "Bài 18: Thầy giáo tí hon (Tiết 4: Đọc mở rộng)", sub: "Đọc mở rộng", note: "Đọc truyện ngắn về tình bạn tuổi học trò." },
  },
  // Tuần 11 - 35
  11: {
    1: { title: "Bài 19: Bạn của thủ thư (Tiết 1: Đọc)", sub: "Đọc", note: "Tình yêu sách và sự chăm chỉ trong thư viện trường." },
    2: { title: "Bài 19: Bạn của thủ thư (Tiết 2: LTVC: Luyện tập về kết từ)", sub: "LTVC", note: "Thực hành sử dụng các cặp kết từ chỉ quan hệ nguyên nhân, điều kiện." },
    3: { title: "Bài 19: Bạn của thủ thư (Tiết 3: Viết: Chỉnh sửa đoạn văn giới thiệu nhân vật)", sub: "Viết", note: "Rút kinh nghiệm và hoàn thiện đoạn văn giới thiệu nhân vật." },
    4: { title: "Bài 20: Người tìm đường lên các vì sao (Tiết 1: Đọc)", sub: "Đọc", note: "Khát vọng chinh phục vũ trụ của nhà khoa học Xi-ôn-cốp-xki." },
    5: { title: "Bài 20: Người tìm đường lên các vì sao (Tiết 2: Đọc tiếp)", sub: "Đọc", note: "Tìm hiểu các chi tiết chứng minh ý chí kiên định vượt khó." },
    6: { title: "Bài 20: Người tìm đường lên các vì sao (Tiết 3: Viết: Tìm hiểu cách viết đoạn văn thể hiện tình cảm, cảm xúc)", sub: "Viết", note: "Bộc lộ cảm nghĩ chân thành về một câu chuyện xúc động." },
    7: { title: "Bài 20: Người tìm đường lên các vì sao (Tiết 4: Nói và nghe: Gương sáng khoa học)", sub: "Nói và nghe", note: "Kể câu chuyện về một nhà bác học, nhà phát minh tài ba." },
  },
  12: {
    1: { title: "Bài 21: Tranh làng Hồ (Tiết 1: Đọc)", sub: "Đọc", note: "Nét đẹp tinh hoa của dòng tranh dân gian Đông Hồ cổ truyền." },
    2: { title: "Bài 21: Tranh làng Hồ (Tiết 2: LTVC: Mở rộng vốn từ: Nghệ thuật)", sub: "LTVC", note: "Các từ ngữ về hội họa, ca múa nhạc, sân khấu truyền thống." },
    3: { title: "Bài 21: Tranh làng Hồ (Tiết 3: Viết: Tìm ý cho đoạn văn thể hiện tình cảm, cảm xúc)", sub: "Viết", note: "Ghi lại những rung cảm khi xem một tác phẩm nghệ thuật." },
    4: { title: "Bài 22: Đất Cà Mau (Tiết 1: Đọc)", sub: "Đọc", note: "Mảnh đất tận cùng phương Nam với cây đước kiên cường và con người hào sảng." },
    5: { title: "Bài 22: Đất Cà Mau (Tiết 2: Đọc tiếp)", sub: "Đọc", note: "Cảm nhận khí thế quật khởi và sức sống mãnh liệt của rừng đước." },
    6: { title: "Bài 22: Đất Cà Mau (Tiết 3: Viết: Viết đoạn văn thể hiện tình cảm, cảm xúc)", sub: "Viết", note: "Viết đoạn văn thể hiện lòng tự hào về cảnh sắc phương Nam." },
    7: { title: "Bài 22: Đất Cà Mau (Tiết 4: Đọc mở rộng)", sub: "Đọc mở rộng", note: "Đọc bài thơ hoặc bài ca dao ngợi ca vẻ đẹp đất rừng phương Nam." },
  }
};

// TOÁN 5: 5 tiết / tuần (Tổng 175 tiết / năm)
export const GRADE_5_TOAN: WeeklySubjectLessons = {
  1: {
    1: { title: "Bài 1: Ôn tập số tự nhiên (Tiết 1: Đọc, viết, so sánh số tự nhiên)", note: "Hàng và lớp của số tự nhiên." },
    2: { title: "Bài 1: Ôn tập số tự nhiên (Tiết 2: Luyện tập dãy số tự nhiên)", note: "Đặc điểm của dãy số tự nhiên." },
    3: { title: "Bài 2: Ôn tập các phép tính với số tự nhiên (Tiết 1: Phép cộng, phép trừ)", note: "Đặt tính và tính nhẩm phép cộng, trừ." },
    4: { title: "Bài 2: Ôn tập các phép tính với số tự nhiên (Tiết 2: Phép nhân, phép chia)", note: "Tính chất giao hoán, kết hợp, nhân với 0, chia cho 1." },
    5: { title: "Bài 3: Ôn tập phân số (Tiết 1: Khái niệm và tính chất cơ bản của phân số)", note: "Rút gọn và quy đồng mẫu số phân số." },
  },
  2: {
    1: { title: "Bài 3: Ôn tập phân số (Tiết 2: So sánh hai phân số)", note: "So sánh phân số cùng và khác mẫu số." },
    2: { title: "Bài 4: Phân số thập phân (Tiết 1: Nhận biết phân số thập phân)", note: "Mẫu số là 10, 100, 1000... Chuyển phân số thành PSTP." },
    3: { title: "Bài 5: Ôn tập các phép tính với phân số (Tiết 1: Phép cộng và phép trừ phân số)", note: "Cộng trừ hai phân số cùng và khác mẫu số." },
    4: { title: "Bài 5: Ôn tập các phép tính với phân số (Tiết 2: Phép nhân và phép chia phân số)", note: "Nhân hai phân số, chia cho phân số đảo ngược." },
    5: { title: "Bài 5: Ôn tập các phép tính với phân số (Tiết 3: Luyện tập tính giá trị biểu thức phân số)", note: "Thứ tự thực hiện phép tính và tính bằng cách thuận tiện." },
  },
  3: {
    1: { title: "Bài 6: Cộng, trừ hai phân số khác mẫu số (Tiết 1: Quy tắc cộng trừ phân số khác mẫu)", note: "Quy đồng mẫu số rồi thực hiện tính." },
    2: { title: "Bài 6: Cộng, trừ hai phân số khác mẫu số (Tiết 2: Luyện tập giải toán có lời văn)", note: "Áp dụng vào các bài toán thực tế đo lường." },
    3: { title: "Bài 7: Hỗn số (Tiết 1: Khái niệm hỗn số gồm phần nguyên và phần phân số)", note: "Đọc, viết hỗn số trên tia số." },
    4: { title: "Bài 7: Hỗn số (Tiết 2: Chuyển hỗn số thành phân số và ngược lại)", note: "Quy tắc nhân phần nguyên với mẫu số rồi cộng tử số." },
    5: { title: "Bài 8: Ôn tập hình học và đo lường (Tiết 1: Chu vi và diện tích hình chữ nhật, hình vuông)", note: "Công thức tính và đổi đơn vị đo diện tích m2, dm2, cm2." },
  },
  4: {
    1: { title: "Bài 8: Ôn tập hình học và đo lường (Tiết 2: Diện tích hình bình hành và hình thoi)", note: "Ôn tập công thức diện tích S = a x h và S = (m x n) : 2." },
    2: { title: "Bài 9: Luyện tập chung (Tiết 1: Luyện tập bốn phép tính với phân số)", note: "Rèn kĩ năng tính toán chính xác và rút gọn kết quả." },
    3: { title: "Bài 9: Luyện tập chung (Tiết 2: Giải bài toán tìm phân số của một số)", note: "Phương pháp giải bài toán dạng tỉ số và phân số." },
    4: { title: "Bài 10: Khái niệm số thập phân (Tiết 1: Làm quen với số thập phân)", note: "Chuyển phân số thập phân có mẫu 10, 100 thành số thập phân 0,1; 0,01." },
    5: { title: "Bài 10: Khái niệm số thập phân (Tiết 2: Cấu tạo số thập phân gồm phần nguyên và phần thập phân)", note: "Đọc và viết các số thập phân có cấu tạo nhiều chữ số." },
  },
  5: {
    1: { title: "Bài 11: Hàng của số thập phân. Đọc, viết số thập phân (Tiết 1: Nhận diện các hàng phần mười, phần trăm, phần nghìn)", note: "Giá trị của từng chữ số theo vị trí hàng." },
    2: { title: "Bài 11: Hàng của số thập phân. Đọc, viết số thập phân (Tiết 2: Luyện tập viết số thập phân theo cấu tạo hàng)", note: "Rèn kĩ năng viết số từ lời đọc chuẩn xác." },
    3: { title: "Bài 12: Số thập phân bằng nhau (Tiết 1: Viết thêm hoặc bớt chữ số 0 ở tận cùng bên phải)", note: "Ý nghĩa của việc giữ nguyên giá trị số khi thêm bớt chữ số 0." },
    4: { title: "Bài 13: So sánh hai số thập phân (Tiết 1: Quy tắc so sánh phần nguyên rồi đến phần thập phân)", note: "So sánh lần lượt từ hàng lớn nhất đến hàng nhỏ nhất." },
    5: { title: "Bài 13: So sánh hai số thập phân (Tiết 2: Luyện tập sắp xếp dãy số thập phân theo thứ tự)", note: "Sắp xếp từ bé đến lớn và ngược lại." },
  },
  6: {
    1: { title: "Bài 14: Làm tròn số thập phân (Tiết 1: Làm tròn đến hàng đơn vị, hàng phần mười)", note: "Quy tắc xét chữ số ngay sau hàng cần làm tròn." },
    2: { title: "Bài 14: Làm tròn số thập phân (Tiết 2: Làm tròn đến hàng phần trăm và ứng dụng thực tế)", note: "Ứng dụng trong mua sắm và ước lượng đo lường." },
    3: { title: "Bài 15: Luyện tập chung (Tiết 1: Củng cố đọc, viết, so sánh và làm tròn số thập phân)", note: "Hệ thống hóa kiến thức trọng tâm chương số thập phân." },
    4: { title: "Bài 15: Luyện tập chung (Tiết 2: Thực hành giải toán liên quan đến số thập phân)", note: "Vận dụng số thập phân vào bài toán tình huống thực tiễn." },
    5: { title: "Bài 16: Viết các số đo độ dài dưới dạng số thập phân (Tiết 1: Chuyển đổi m, dm, cm, mm sang số thập phân)", note: "Bảng đơn vị đo độ dài và mối liên hệ giữa các đơn vị liền kề." },
  },
  7: {
    1: { title: "Bài 16: Viết các số đo độ dài dưới dạng số thập phân (Tiết 2: Luyện tập đổi số đo độ dài 2 tên đơn vị)", note: "Ví dụ: 3m 45cm = 3,45m." },
    2: { title: "Bài 17: Viết các số đo khối lượng dưới dạng số thập phân (Tiết 1: Chuyển đổi tấn, tạ, yến, kg)", note: "Mối liên hệ giữa các đơn vị đo khối lượng lớn và nhỏ." },
    3: { title: "Bài 17: Viết các số đo khối lượng dưới dạng số thập phân (Tiết 2: Luyện tập đổi kg, g sang số thập phân)", note: "Ví dụ: 2kg 50g = 2,05kg." },
    4: { title: "Bài 18: Viết các số đo diện tích dưới dạng số thập phân (Tiết 1: Đổi m2, dm2, cm2 sang số thập phân)", note: "Lưu ý mỗi hàng đơn vị đo diện tích ứng với 2 chữ số." },
    5: { title: "Bài 18: Viết các số đo diện tích dưới dạng số thập phân (Tiết 2: Luyện tập giải toán diện tích ruộng vườn)", note: "Áp dụng đổi đơn vị đo diện tích vào bài toán thực tế." },
  },
  8: {
    1: { title: "Bài 19: Héc-ta (Tiết 1: Làm quen đơn vị đo diện tích héc-ta ha)", note: "Khái niệm 1 ha = 10 000 m2; tên gọi quốc tế hecta." },
    2: { title: "Bài 19: Héc-ta (Tiết 2: Luyện tập chuyển đổi giữa ha và m2, km2)", note: "Đổi diện tích rừng, nông trường, thành phố." },
    3: { title: "Bài 20: Luyện tập chung (Tiết 1: Ôn tập các bảng đơn vị đo đại lượng)", note: "Đo độ dài, khối lượng và diện tích." },
    4: { title: "Bài 20: Luyện tập chung (Tiết 2: Giải bài toán tổng hợp về số đo đại lượng thập phân)", note: "Rèn kĩ năng tính toán chuyển đổi thành thạo." },
    5: { title: "Bài 20: Luyện tập chung (Tiết 3: Khảo sát kĩ năng đo lường và số thập phân)", note: "Đánh giá mức độ nắm vững kiến thức trước khi học 4 phép tính." },
  },
  9: {
    1: { title: "Bài 21: Phép cộng số thập phân (Tiết 1: Đặt tính và thực hiện phép cộng hai số thập phân)", note: "Đặt các dấu phẩy thẳng cột và cộng như cộng số tự nhiên." },
    2: { title: "Bài 21: Phép cộng số thập phân (Tiết 2: Tính chất giao hoán và kết hợp của phép cộng)", note: "Áp dụng tính chất để tính bằng cách thuận tiện nhất." },
    3: { title: "Bài 21: Phép cộng số thập phân (Tiết 3: Giải bài toán có lời văn về phép cộng số thập phân)", note: "Bài toán thực tế về độ dài, cân nặng và tiền nong." },
    4: { title: "Bài 22: Phép trừ số thập phân (Tiết 1: Đặt tính và thực hiện phép trừ hai số thập phân)", note: "Trường hợp số chữ số phần thập phân bằng nhau và khác nhau." },
    5: { title: "Bài 22: Phép trừ số thập phân (Tiết 2: Luyện tập trừ số thập phân có nhớ)", note: "Lưu ý mượn 1 ở hàng liền trước và hạ đúng dấu phẩy." },
  },
  10: {
    1: { title: "Bài 22: Phép trừ số thập phân (Tiết 3: Trừ một số tự nhiên cho một số thập phân)", note: "Viết thêm dấu phẩy và chữ số 0 vào số bị trừ." },
    2: { title: "Bài 23: Luyện tập chung (Tiết 1: Rèn kĩ năng cộng, trừ số thập phân phối hợp)", note: "Tính giá trị biểu thức chứa dấu ngoặc và phép cộng trừ." },
    3: { title: "Bài 23: Luyện tập chung (Tiết 2: Giải toán thực tế tìm thành phần chưa biết x)", note: "Dạng tìm x: x + a = b; x - a = b; a - x = b." },
    4: { title: "Bài 24: Phép nhân số thập phân (Tiết 1: Nhân một số thập phân với một số tự nhiên)", note: "Đếm số chữ số ở phần thập phân để tách ở tích." },
    5: { title: "Bài 24: Phép nhân số thập phân (Tiết 2: Luyện tập nhân số thập phân với số tự nhiên)", note: "Thực hành giải toán tính chu vi, chu vi đường gấp khúc." },
  }
};

// KHOA HỌC 5: 2 tiết / tuần
export const GRADE_5_KHOA_HOC: WeeklySubjectLessons = {
  1: {
    1: { title: "Bài 1: Thành phần và vai trò của đất đối với cây trồng (Tiết 1: Thí nghiệm các thành phần của đất)", note: "Khám phá không khí, nước, chất khoáng, mùn trong đất." },
    2: { title: "Bài 1: Thành phần và vai trò của đất đối với cây trồng (Tiết 2: Vai trò của đất và biện pháp giữ đất phì nhiêu)", note: "Cung cấp dinh dưỡng, nâng đỡ bộ rễ cây bám chặt." },
  },
  2: {
    1: { title: "Bài 2: Ô nhiễm, xói mòn đất và bảo vệ môi trường đất (Tiết 1: Nguyên nhân ô nhiễm và xói mòn đất)", note: "Tác hại của hóa chất, rác thải nhựa và nạn phá rừng." },
    2: { title: "Bài 2: Ô nhiễm, xói mòn đất và bảo vệ môi trường đất (Tiết 2: Biện pháp chống xói mòn và cải tạo đất)", note: "Trồng rừng che phủ đất, làm ruộng bậc thang, ủ phân hữu cơ." },
  },
  3: {
    1: { title: "Bài 2: Ô nhiễm, xói mòn đất và bảo vệ môi trường đất (Tiết 3: Thực hành tuyên truyền bảo vệ đất)", note: "Vẽ áp phích hoặc viết thông điệp bảo vệ đất trường học." },
    2: { title: "Bài 3: Hỗn hợp và dung dịch (Tiết 1: Khái niệm hỗn hợp và dung dịch qua thực nghiệm)", note: "Thực hành pha trộn nước đường, nước chanh, muối và cát." },
  },
  4: {
    1: { title: "Bài 3: Hỗn hợp và dung dịch (Tiết 2: Tách các chất ra khỏi hỗn hợp)", note: "Phương pháp lọc, lắng, bay hơi để tách muối, cát." },
    2: { title: "Bài 3: Hỗn hợp và dung dịch (Tiết 3: Ứng dụng hỗn hợp dung dịch trong đời sống)", note: "Dung dịch oresol, pha chế nước lau sàn an toàn." },
  },
  5: {
    1: { title: "Bài 4: Sự biến đổi hóa học của chất (Tiết 1: Phân biệt biến đổi vật lí và biến đổi hóa học)", note: "Thí nghiệm đốt giấy, gỉ sắt, làm tan đá lạnh." },
    2: { title: "Bài 4: Sự biến đổi hóa học của chất (Tiết 2: Ứng dụng và phòng tránh biến đổi hóa học có hại)", note: "Sự cháy của nhiên liệu và hiện tượng gỉ sét kim loại." },
  },
  6: {
    1: { title: "Bài 5: Năng lượng và năng lượng chất đốt (Tiết 1: Các nguồn năng lượng và vai trò chất đốt)", note: "Than đá, dầu mỏ, khí đốt tự nhiên trong sản xuất sinh hoạt." },
    2: { title: "Bài 5: Năng lượng và năng lượng chất đốt (Tiết 2: Sử dụng an toàn, tiết kiệm chất đốt)", note: "Phòng cháy nổ bình ga, giảm khói bụi ô nhiễm không khí." },
  },
  7: {
    1: { title: "Bài 6: Sử dụng năng lượng điện (Tiết 1: Dòng điện và các nguồn điện thường dùng)", note: "Pin, ắc quy, máy phát điện, nhà máy thủy điện." },
    2: { title: "Bài 6: Sử dụng năng lượng điện (Tiết 2: Tác dụng phát sáng, nhiệt, phát động cơ của điện)", note: "Bóng đèn, quạt điện, nồi cơm điện và thiết bị gia đình." },
  },
  8: {
    1: { title: "Bài 7: Mạch điện đơn giản và an toàn về điện (Tiết 1: Lắp ráp mạch điện thắp sáng bóng đèn)", note: "Dây dẫn, pin, khóa công tắc và bóng đèn pin." },
    2: { title: "Bài 7: Mạch điện đơn giản và an toàn về điện (Tiết 2: Vật dẫn điện, vật cách điện và quy tắc an toàn)", note: "Không chạm tay ướt vào ổ điện, tắt điện khi không dùng." },
  },
  9: {
    1: { title: "Bài 8: Năng lượng mặt trời, gió và nước chảy (Tiết 1: Khám phá nguồn năng lượng tái tạo sạch)", note: "Pin mặt trời, tua bin gió, cối xay nước." },
    2: { title: "Bài 8: Năng lượng mặt trời, gió và nước chảy (Tiết 2: Xu hướng sử dụng năng lượng xanh tương lai)", note: "Bảo vệ môi trường và giảm thiểu biến đổi khí hậu toàn cầu." },
  },
  10: {
    1: { title: "Bài 9: Ôn tập chủ đề Chất và Năng lượng (Tiết 1: Sơ đồ tư duy về các dạng vật chất)", note: "Hệ thống hóa đất, hỗn hợp, biến đổi hóa học." },
    2: { title: "Bài 9: Ôn tập chủ đề Chất và Năng lượng (Tiết 2: Thực hành thiết kế sản phẩm tiết kiệm năng lượng)", note: "Mô hình đồ dùng sử dụng năng lượng gió/mặt trời mini." },
  }
};

// LỊCH SỬ VÀ ĐỊA LÍ 5: 2 tiết / tuần
export const GRADE_5_LS_DL: WeeklySubjectLessons = {
  1: {
    1: { title: "Bài 1: Vị trí địa lí, lãnh thổ, đơn vị hành chính, Quốc kì, Quốc huy, Quốc ca (Tiết 1: Vị trí và lãnh thổ VN)", note: "Bản đồ Việt Nam, hình chữ S, tiếp giáp biển Đông." },
    2: { title: "Bài 1: Vị trí địa lí, lãnh thổ, đơn vị hành chính, Quốc kì, Quốc huy, Quốc ca (Tiết 2: Biểu tượng thiêng liêng Tổ quốc)", note: "Ý nghĩa Quốc kì cờ đỏ sao vàng, Quốc huy, Quốc ca." },
  },
  2: {
    1: { title: "Bài 2: Thiên nhiên Việt Nam (Tiết 1: Địa hình và khoáng sản)", note: "Đồi núi chiếm 3/4 diện tích, các mỏ khoáng sản quý." },
    2: { title: "Bài 2: Thiên nhiên Việt Nam (Tiết 2: Địa hình đồng bằng màu mỡ)", note: "Đồng bằng Bắc Bộ và Đồng bằng Nam Bộ." },
  },
  3: {
    1: { title: "Bài 2: Thiên nhiên Việt Nam (Tiết 3: Khí hậu nhiệt đới ẩm gió mùa)", note: "Hai mùa gió, khí hậu miền Bắc và miền Nam." },
    2: { title: "Bài 2: Thiên nhiên Việt Nam (Tiết 4: Mạng lưới sông ngòi dày đặc)", note: "Sông Hồng, sông Mê Kông và giá trị phù sa, thủy điện." },
  },
  4: {
    1: { title: "Bài 3: Biển, đảo Việt Nam (Tiết 1: Vùng biển rộng lớn và các nguồn tài nguyên biển)", note: "Hải sản, dầu khí, du lịch biển và giao thông hàng hải." },
    2: { title: "Bài 3: Biển, đảo Việt Nam (Tiết 2: Quần đảo Hoàng Sa, Trường Sa và chủ quyền biển đảo)", note: "Khẳng định chủ quyền thiêng liêng của Tổ quốc Việt Nam." },
  },
  5: {
    1: { title: "Bài 4: Dân cư và các dân tộc ở Việt Nam (Tiết 1: Đặc điểm dân số và 54 dân tộc anh em)", note: "Khối đại đoàn kết toàn dân tộc Việt Nam." },
    2: { title: "Bài 4: Dân cư và các dân tộc ở Việt Nam (Tiết 2: Phân bố dân cư và đời sống văn hóa)", note: "Sự phân bố dân cư giữa đồng bằng và miền núi." },
  },
  6: {
    1: { title: "Bài 5: Nước Văn Lang, Âu Lạc (Tiết 1: Sự ra đời của nhà nước Văn Lang - Thời đại Hùng Vương)", note: "Truyền thuyết Vua Hùng dựng nước tại Phong Châu." },
    2: { title: "Bài 5: Nước Văn Lang, Âu Lạc (Tiết 2: Nước Âu Lạc thời An Dương Vương và thành Cổ Loa)", note: "Nỏ thần An Dương Vương và bài học cảnh giác giữ nước." },
  },
  7: {
    1: { title: "Bài 6: Khởi nghĩa Hai Bà Trưng và cuộc đấu tranh giành độc lập (Tiết 1: Cuộc khởi nghĩa Mê Linh năm 40)", note: "Lời thề Hát Môn và lòng quả cảm của Hai Bà Trưng." },
    2: { title: "Bài 6: Khởi nghĩa Hai Bà Trưng và cuộc đấu tranh giành độc lập (Tiết 2: Hơn một ngàn năm kiên cường chống Bắc thuộc)", note: "Bà Triệu, Lý Bí, Mai Thúc Loan, Phùng Hưng." },
  },
  8: {
    1: { title: "Bài 7: Chiến thắng Bạch Đằng năm 938 (Tiết 1: Kế cắm cọc gỗ trên sông Bạch Đằng của Ngô Quyền)", note: "Lợi dụng quy luật thủy triều đánh tan quân Nam Hán." },
    2: { title: "Bài 7: Chiến thắng Bạch Đằng năm 938 (Tiết 2: Ý nghĩa lịch sử chấm dứt thời kì Bắc thuộc)", note: "Mở ra kỉ nguyên độc lập tự chủ lâu dài cho dân tộc." },
  },
  9: {
    1: { title: "Bài 8: Triều Lý và việc định đô ở Thăng Long (Tiết 1: Chiếu dời đô của Lý Công Uẩn năm 1010)", note: "Dời đô từ Hoa Lư về thành Đại La đổi tên Thăng Long." },
    2: { title: "Bài 8: Triều Lý và việc định đô ở Thăng Long (Tiết 2: Văn miếu Quốc Tử Giám và phòng tuyến Như Nguyệt)", note: "Trường đại học đầu tiên và bài thơ thần Nam quốc sơn hà." },
  },
  10: {
    1: { title: "Bài 9: Triều Trần và ba lần kháng chiến chống Mông - Nguyên (Tiết 1: Hào khí Đông A và Hội nghị Diên Hồng)", note: "Muôn người cùng hô vang: Đánh! Tinh thần Sát Thát." },
    2: { title: "Bài 9: Triều Trần và ba lần kháng chiến chống Mông - Nguyên (Tiết 2: Thiên tài quân sự Trần Hưng Đạo và Bạch Đằng 1288)", note: "Ba lần đại thắng quân xâm lược Mông - Nguyên lẫy lừng thế giới." },
  }
};

// ĐẠO ĐỨC 5: 1 tiết / tuần
export const GRADE_5_DAO_DUC: WeeklySubjectLessons = {
  1: { 1: { title: "Bài 1: Biết ơn những người có công với quê hương, đất nước (Tiết 1)", note: "Tìm hiểu công lao to lớn của các anh hùng liệt sĩ." } },
  2: { 1: { title: "Bài 1: Biết ơn những người có công với quê hương, đất nước (Tiết 2)", note: "Bày tỏ lòng biết ơn qua hành động chăm sóc đền ơn đáp nghĩa." } },
  3: { 1: { title: "Bài 1: Biết ơn những người có công với quê hương, đất nước (Tiết 3)", note: "Xử lý tình huống và xây dựng kế hoạch thăm hỏi gia đình thương binh." } },
  4: { 1: { title: "Bài 2: Tôn trọng sự khác biệt của người khác (Tiết 1)", note: "Mỗi người có nét riêng về ngoại hình, sở thích, tính cách." } },
  5: { 1: { title: "Bài 2: Tôn trọng sự khác biệt của người khác (Tiết 2)", note: "Không kì thị, chế giễu nét khác biệt của bạn bè xung quanh." } },
  6: { 1: { title: "Bài 2: Tôn trọng sự khác biệt của người khác (Tiết 3)", note: "Thực hành tôn trọng phong tục tập quán các dân tộc anh em." } },
  7: { 1: { title: "Bài 3: Vượt qua khó khăn trong học tập và cuộc sống (Tiết 1)", note: "Nhận diện những khó khăn thử thách thường gặp của học sinh lớp 5." } },
  8: { 1: { title: "Bài 3: Vượt qua khó khăn trong học tập và cuộc sống (Tiết 2)", note: "Tìm kiếm các giải pháp tự lực và nhờ sự trợ giúp đúng lúc." } },
  9: { 1: { title: "Bài 3: Vượt qua khó khăn trong học tập và cuộc sống (Tiết 3)", note: "Xây dựng sổ tay rèn luyện ý chí và lòng kiên trì mỗi ngày." } },
  10: { 1: { title: "Bài 4: Bảo vệ của công (Tiết 1)", note: "Ý nghĩa của việc giữ gìn tài sản chung của lớp, trường và xã hội." } },
};

// CÔNG NGHỆ 5: 1 tiết / tuần
export const GRADE_5_CONG_NGHE: WeeklySubjectLessons = {
  1: { 1: { title: "Bài 1: Công nghệ trong đời sống (Tiết 1: Vai trò và sản phẩm công nghệ gia đình)", note: "Các thiết bị số và đồ dùng gia đình thông minh." } },
  2: { 1: { title: "Bài 1: Công nghệ trong đời sống (Tiết 2: Ảnh hưởng tích cực và lưu ý khi dùng công nghệ)", note: "Sử dụng thiết bị công nghệ điều độ, tránh mỏi mắt." } },
  3: { 1: { title: "Bài 2: Sáng chế (Tiết 1: Khái niệm sáng chế và một số nhà sáng chế tiêu biểu)", note: "Thomas Edison, Alexander Graham Bell và các nhà khoa học." } },
  4: { 1: { title: "Bài 2: Sáng chế (Tiết 2: Lợi ích của sáng chế đối với sự tiến bộ loài người)", note: "Đèn điện, điện thoại, máy tính, mạng internet." } },
  5: { 1: { title: "Bài 3: Tìm hiểu thiết kế (Tiết 1: Quy trình thiết kế sản phẩm công nghệ)", note: "Các bước: Ý tưởng -> Bản vẽ -> Chế tạo mẫu -> Đánh giá." } },
  6: { 1: { title: "Bài 3: Tìm hiểu thiết kế (Tiết 2: Tập phác thảo bản vẽ kĩ thuật đơn giản)", note: "Vẽ phác thảo hộp đựng bút để bàn bằng bìa các-tông." } },
  7: { 1: { title: "Bài 4: Thiết kế sản phẩm (Tiết 1: Lựa chọn vật liệu tái chế an toàn)", note: "Chuẩn bị bìa cứng, que kem, vỏ chai, kéo và hồ dán." } },
  8: { 1: { title: "Bài 4: Thiết kế sản phẩm (Tiết 2: Thực hành lắp ráp sản phẩm theo bản thiết kế)", note: "Tạo hình hộp bút hoặc giá đỡ điện thoại mini." } },
  9: { 1: { title: "Bài 4: Thiết kế sản phẩm (Tiết 3: Trang trí và hoàn thiện sản phẩm)", note: "Tô màu, dán sticker và kiểm tra độ vững chắc của sản phẩm." } },
  10: { 1: { title: "Bài 4: Thiết kế sản phẩm (Tiết 4: Báo cáo trưng bày và đánh giá sản phẩm STEM)", note: "Thuyết trình về công năng và tính sáng tạo của sản phẩm." } },
};

// HOẠT ĐỘNG TRẢI NGHIỆM 5: 3 tiết / tuần
export const GRADE_5_HDTN: WeeklySubjectLessons = {
  1: {
    1: { title: "Sinh hoạt dưới cờ: LỄ KHAI GIẢNG NĂM HỌC MỚI - TỰ HÀO LÀ HỌC SINH CUỐI CẤP LỚP 5", sub: "Sinh hoạt dưới cờ", note: "Nghi lễ chào cờ đầu năm và phát động phong trào thi đua." },
    2: { title: "HĐGDCĐ: LỚP HỌC THÂN THIỆN - ĐỒNG HÀNH CÙNG TIẾN BỘ", sub: "Giáo dục theo chủ đề", note: "Xây dựng nội quy lớp và cam kết thực hiện nếp sống văn minh." },
    3: { title: "Sinh hoạt lớp: BẦU HỘI ĐỒNG TỰ QUẢN LỚP VÀ SƠ KẾT TUẦN 1", sub: "Sinh hoạt lớp", note: "Phân công ban cán sự, xây dựng tiêu chí thi đua giữa các tổ." },
  },
  2: {
    1: { title: "Sinh hoạt dưới cờ: PHÁT ĐỘNG THÁNG AN TOÀN GIAO THÔNG VÀ PHÒNG CHỐNG BẠO LỰC HỌC ĐƯỜNG", sub: "Sinh hoạt dưới cờ", note: "Kí cam kết an toàn giao thông và ứng xử văn hóa học đường." },
    2: { title: "HĐGDCĐ: XÂY DỰNG HÌNH ẢNH HỌC SINH LỚP 5 THANH LỊCH, VĂN MINH", sub: "Giáo dục theo chủ đề", note: "Trang phục chỉnh tề, lời nói nhã nhặn, gương mẫu với các em lớp dưới." },
    3: { title: "Sinh hoạt lớp: SƠ KẾT THI ĐUA TUẦN 2 VÀ THẢO LUẬN 'NÓI KHÔNG VỚI BẠO LỰC'", sub: "Sinh hoạt lớp", note: "Đánh giá nề nếp học tập và tuyên dương các bạn tích cực." },
  },
  3: {
    1: { title: "Sinh hoạt dưới cờ: NGÀY HỘI VUI TẾT TRUNG THU - ĐÊM HỘI TRĂNG RẰM", sub: "Sinh hoạt dưới cờ", note: "Giao lưu văn nghệ thiếu nhi và trao quà cho học sinh có hoàn cảnh khó khăn." },
    2: { title: "HĐGDCĐ: LÀM ĐÈN ÔNG SAO VÀ BÀY MÂM CỖ TRUNG THU TRUYỀN THỐNG", sub: "Giáo dục theo chủ đề", note: "Trải nghiệm làm lồng đèn từ vật liệu tái chế và giữ gìn nét đẹp cổ truyền." },
    3: { title: "Sinh hoạt lớp: VUI PHÁ CỖ TRUNG THU CÙNG CÁC BẠN VÀ SƠ KẾT TUẦN 3", sub: "Sinh hoạt lớp", note: "Chia sẻ niềm vui trăng rằm và tổng kết thi đua nề nếp tổ." },
  },
  4: {
    1: { title: "Sinh hoạt dưới cờ: TUYÊN DƯƠNG GƯƠNG ĐIỂN HÌNH HOA ĐIỂM 10 VÀ GƯƠNG NGƯỜI TỐT VIỆC TỐT", sub: "Sinh hoạt dưới cờ", note: "Khen ngợi học sinh vượt khó và nhặt được của rơi trả người đánh mất." },
    2: { title: "HĐGDCĐ: TỰ LẬP TRONG HỌC TẬP VÀ SINH HOẠT HÀNG NGÀY", sub: "Giáo dục theo chủ đề", note: "Kĩ năng tự sắp xếp thời gian biểu và tự giác hoàn thành việc nhà." },
    3: { title: "Sinh hoạt lớp: CHIA SẺ THỜI GIAN BIỂU KHOA HỌC VÀ SƠ KẾT TUẦN 4", sub: "Sinh hoạt lớp", note: "Góp ý giúp bạn khắc phục thói quen trì hoãn học tập." },
  },
  5: {
    1: { title: "Sinh hoạt dưới cờ: CHỦ ĐIỂM 'EM YÊU LỊCH SỬ VIỆT NAM' - HÀO KHÍ THĂNG LONG HÀ NỘI", sub: "Sinh hoạt dưới cờ", note: "Kỉ niệm ngày Giải phóng Thủ đô 10/10 và truyền thống anh hùng." },
    2: { title: "HĐGDCĐ: KHÁM PHÁ DANH LAM THẮNG CẢNH VÀ TRUYỀN THỐNG QUÊ HƯƠNG", sub: "Giáo dục theo chủ đề", note: "Sưu tầm hình ảnh di tích lịch sử và làm tập san quê hương." },
    3: { title: "Sinh hoạt lớp: THUYẾT TRÌNH BẢN ĐỒ DU LỊCH QUÊ EM VÀ SƠ KẾT TUẦN 5", sub: "Sinh hoạt lớp", note: "Gắn kết tình yêu quê hương đất nước qua sản phẩm nhóm." },
  }
};

// -------------------------------------------------------------------------
// 2. KHỐI 4: TOÀN BỘ CÁC MÔN CHỦ ĐẠO
// -------------------------------------------------------------------------

export const GRADE_4_TIENG_VIET: WeeklySubjectLessons = {
  1: {
    1: { title: "Bài 1: Điều kì diệu (Tiết 1: Đọc)", sub: "Đọc", note: "Khám phá nét riêng biệt đáng yêu của mỗi bạn." },
    2: { title: "Bài 1: Điều kì diệu (Tiết 2: LTVC: Danh từ)", sub: "LTVC", note: "Khái niệm danh từ chỉ người, vật, hiện tượng." },
    3: { title: "Bài 1: Điều kì diệu (Tiết 3: Viết: Tìm hiểu đoạn văn và câu chủ đề)", sub: "Viết", note: "Vị trí và vai trò của câu chủ đề trong đoạn văn." },
    4: { title: "Bài 2: Thi nhạc (Tiết 1: Đọc)", sub: "Đọc", note: "Bản hòa ca của các loài vật trong ngày hội âm nhạc rừng xanh." },
    5: { title: "Bài 2: Thi nhạc (Tiết 2: Đọc tiếp)", sub: "Đọc", note: "Luyện đọc biểu cảm khúc biến tấu của từng nghệ sĩ ve sầu, dế mèn." },
    6: { title: "Bài 2: Thi nhạc (Tiết 3: Viết: Tìm ý cho đoạn văn nêu ý kiến)", sub: "Viết", note: "Nêu lí do yêu thích một câu chuyện hoặc bài thơ." },
    7: { title: "Bài 2: Thi nhạc (Tiết 4: Đọc mở rộng)", sub: "Đọc mở rộng", note: "Đọc sách về thế giới động vật ngộ nghĩnh." },
  },
  2: {
    1: { title: "Bài 3: Anh em sinh đôi (Tiết 1: Đọc)", sub: "Đọc", note: "Tình cảm anh em gắn bó và sự khác biệt về sở thích." },
    2: { title: "Bài 3: Anh em sinh đôi (Tiết 2: LTVC: Danh từ chung, danh từ riêng)", sub: "LTVC", note: "Quy tắc viết hoa danh từ riêng chỉ tên người, địa lí." },
    3: { title: "Bài 3: Anh em sinh đôi (Tiết 3: Viết: Viết đoạn văn nêu ý kiến)", sub: "Viết", note: "Thực hành viết đoạn văn 5-7 câu bày tỏ cảm nghĩ." },
    4: { title: "Bài 4: Công chúa và người dẫn chuyện (Tiết 1: Đọc)", sub: "Đọc", note: "Sự tự tin và vẻ đẹp của sự cố gắng trong đêm diễn kịch." },
    5: { title: "Bài 4: Công chúa và người dẫn chuyện (Tiết 2: Đọc tiếp)", sub: "Đọc", note: "Lời động viên ấm áp của mẹ giúp con vượt qua bẽn lẽn." },
    6: { title: "Bài 4: Công chúa và người dẫn chuyện (Tiết 3: Viết: Đánh giá, chỉnh sửa đoạn văn nêu ý kiến)", sub: "Viết", note: "Chữa lỗi diễn đạt và từ ngữ liên kết câu." },
    7: { title: "Bài 4: Công chúa và người dẫn chuyện (Tiết 4: Nói và nghe: Kể về một buổi biểu diễn nghệ thuật)", sub: "Nói và nghe", note: "Tự tin chia sẻ cảm xúc sau khi xem một tiết mục văn nghệ." },
  },
  3: {
    1: { title: "Bài 5: Thằn lằn xanh và tắc kè (Tiết 1: Đọc)", sub: "Đọc", note: "Sự trân trọng nét riêng và khả năng thích nghi của bản thân." },
    2: { title: "Bài 5: Thằn lằn xanh và tắc kè (Tiết 2: LTVC: Luyện tập về danh từ)", sub: "LTVC", note: "Phân biệt danh từ cụ thể và danh từ trừu tượng." },
    3: { title: "Bài 5: Thằn lằn xanh và tắc kè (Tiết 3: Viết: Tìm hiểu cách viết bài văn kể lại một câu chuyện)", sub: "Viết", note: "Cấu trúc mở bài, thân bài, kết bài của bài văn kể chuyện." },
    4: { title: "Bài 6: Nghệ sĩ trống (Tiết 1: Đọc)", sub: "Đọc", note: "Ý chí kiên trì vượt qua định kiến giới tính để theo đuổi đam mê." },
    5: { title: "Bài 6: Nghệ sĩ trống (Tiết 2: Đọc tiếp)", sub: "Đọc", note: "Tiếng trống rộn rã trên đảo quốc Cu-ba." },
    6: { title: "Bài 6: Nghệ sĩ trống (Tiết 3: Viết: Lập dàn ý bài văn kể lại một câu chuyện)", sub: "Viết", note: "Sắp xếp chuỗi sự việc theo trình tự thời gian hợp lí." },
    7: { title: "Bài 6: Nghệ sĩ trống (Tiết 4: Đọc mở rộng)", sub: "Đọc mở rộng", note: "Tìm đọc các tác phẩm về lòng kiên trì và ước mơ tuổi thơ." },
  },
  4: {
    1: { title: "Bài 7: Những bức chân dung (Tiết 1: Đọc)", sub: "Đọc", note: "Vẻ đẹp chân thực qua nét vẽ của họa sĩ nhí." },
    2: { title: "Bài 7: Những bức chân dung (Tiết 2: LTVC: Quy tắc viết tên cơ quan, tổ chức)", sub: "LTVC", note: "Cách viết hoa chữ cái đầu của từng bộ phận tạo thành tên riêng." },
    3: { title: "Bài 7: Những bức chân dung (Tiết 3: Viết: Viết đoạn văn mở bài cho bài văn kể lại một câu chuyện)", sub: "Viết", note: "Phân biệt mở bài trực tiếp và mở bài gián tiếp." },
    4: { title: "Bài 8: Đò Lèn (Tiết 1: Đọc)", sub: "Đọc", note: "Tình thương bà bao la và nỗi ân hận muộn màng của người cháu." },
    5: { title: "Bài 8: Đò Lèn (Tiết 2: Đọc tiếp)", sub: "Đọc", note: "Luyện đọc diễn cảm bài thơ giàu chất suy tưởng của Nguyễn Duy." },
    6: { title: "Bài 8: Đò Lèn (Tiết 3: Viết: Viết đoạn văn kết bài cho bài văn kể lại một câu chuyện)", sub: "Viết", note: "Phân biệt kết bài không mở rộng và kết bài mở rộng." },
    7: { title: "Bài 8: Đò Lèn (Tiết 4: Nói và nghe: Kể lại một việc tốt em đã làm)", sub: "Nói và nghe", note: "Rèn kĩ năng trình bày lưu loát trước tập thể." },
  },
  5: {
    1: { title: "Bài 9: Bầu trời mùa thu (Tiết 1: Đọc)", sub: "Đọc", note: "Cảm nhận tinh tế của học trò về vẻ đẹp bầu trời qua ngòi bút Su-khôm-lin-xki." },
    2: { title: "Bài 9: Bầu trời mùa thu (Tiết 2: LTVC: Động từ)", sub: "LTVC", note: "Khái niệm động từ chỉ hoạt động, trạng thái của người và sự vật." },
    3: { title: "Bài 9: Bầu trời mùa thu (Tiết 3: Viết: Viết bài văn kể lại một câu chuyện)", sub: "Viết", note: "Thực hành viết bài văn kể chuyện hoàn chỉnh." },
    4: { title: "Bài 10: Tấm huy chương quý giá (Tiết 1: Đọc)", sub: "Đọc", note: "Lòng trung thực và tinh thần thể thao đáng trân trọng." },
    5: { title: "Bài 10: Tấm huy chương quý giá (Tiết 2: Đọc tiếp)", sub: "Đọc", note: "Đọc hiểu tình huống kịch tính trên đường chạy đua." },
    6: { title: "Bài 10: Tấm huy chương quý giá (Tiết 3: Viết: Đánh giá, chỉnh sửa bài văn kể lại một câu chuyện)", sub: "Viết", note: "Sửa lỗi dùng từ, diễn đạt và liên kết đoạn văn." },
    7: { title: "Bài 10: Tấm huy chương quý giá (Tiết 4: Đọc mở rộng)", sub: "Đọc mở rộng", note: "Đọc truyện ngợi ca lòng trung thực và tinh thần hiệp nghĩa." },
  }
};

export const GRADE_4_TOAN: WeeklySubjectLessons = {
  1: {
    1: { title: "Bài 1: Ôn tập các số đến 100 000 (Tiết 1: Đọc, viết và cấu tạo số)", note: "Hàng chục nghìn, nghìn, trăm, chục, đơn vị." },
    2: { title: "Bài 1: Ôn tập các số đến 100 000 (Tiết 2: So sánh và xếp thứ tự các số)", note: "So sánh số có nhiều chữ số và tìm số lớn nhất, bé nhất." },
    3: { title: "Bài 2: Ôn tập các phép tính trong phạm vi 100 000 (Tiết 1: Phép cộng, phép trừ)", note: "Đặt tính thẳng hàng thẳng cột và tính nhẩm." },
    4: { title: "Bài 2: Ôn tập các phép tính trong phạm vi 100 000 (Tiết 2: Phép nhân, phép chia)", note: "Nhân số có 5 chữ số với số có 1 chữ số; chia hết và chia có dư." },
    5: { title: "Bài 3: Số chẵn, số lẻ (Tiết 1: Dấu hiệu nhận biết số chẵn và số lẻ)", note: "Chữ số tận cùng là 0, 2, 4, 6, 8 hoặc 1, 3, 5, 7, 9." },
  },
  2: {
    1: { title: "Bài 3: Số chẵn, số lẻ (Tiết 2: Luyện tập dãy số chẵn và dãy số lẻ liên tiếp)", note: "Khoảng cách giữa hai số chẵn hoặc hai số lẻ liên tiếp là 2." },
    2: { title: "Bài 4: Biểu thức chứa chữ (Tiết 1: Biểu thức chứa một chữ a, b, x)", note: "Thay chữ bằng số để tính giá trị của biểu thức." },
    3: { title: "Bài 4: Biểu thức chứa chữ (Tiết 2: Luyện tập tính giá trị biểu thức chứa chữ)", note: "Ứng dụng vào bài toán tính chu vi tam giác đều, hình vuông có cạnh a." },
    4: { title: "Bài 5: Giải bài toán có ba bước tính (Tiết 1: Phân tích bài toán ba bước tính)", note: "Xác định các đại lượng trung gian trước khi tìm kết quả cuối." },
    5: { title: "Bài 5: Giải bài toán có ba bước tính (Tiết 2: Luyện tập giải toán ba bước tính)", note: "Bài toán mua bán, đóng gói hàng hóa và chia phần." },
  },
  3: {
    1: { title: "Bài 6: Luyện tập chung (Tiết 1: Củng cố biểu thức và phép tính)", note: "Thứ tự ưu tiên thực hiện phép tính trong ngoặc và ngoài ngoặc." },
    2: { title: "Bài 6: Luyện tập chung (Tiết 2: Thực hành giải toán ứng dụng thực tế)", note: "Tính tiền hàng, số lượng bàn ghế lớp học." },
    3: { title: "Bài 7: Đo góc, đơn vị đo góc (Tiết 1: Làm quen với góc nhọn, góc tù, góc bẹt)", note: "Dùng ê-ke để kiểm tra và nhận diện các loại góc." },
    4: { title: "Bài 7: Đo góc, đơn vị đo góc (Tiết 2: Sử dụng thước đo góc và đơn vị độ)", note: "Góc nhọn < 90 độ; Góc vuông = 90 độ; Góc tù > 90 độ; Góc bẹt = 180 độ." },
    5: { title: "Bài 8: Góc nhọn, góc tù, góc bẹt (Tiết 1: Thực hành đo và vẽ góc theo số đo cho trước)", note: "Rèn kĩ năng sử dụng thước đo góc chính xác từng độ." },
  },
  4: {
    1: { title: "Bài 9: Luyện tập chung (Tiết 1: Nhận diện góc trong các hình hình học phẳng)", note: "Đếm số góc vuông, góc nhọn, góc tù trong tứ giác và tam giác." },
    2: { title: "Bài 10: Số có sáu chữ số. Hàng và lớp (Tiết 1: Hàng trăm nghìn và lớp nghìn, lớp đơn vị)", note: "Cấu tạo số có 6 chữ số: Lớp nghìn gồm hàng trăm nghìn, chục nghìn, nghìn." },
    3: { title: "Bài 10: Số có sáu chữ số. Hàng và lớp (Tiết 2: Đọc và viết số có sáu chữ số)", note: "Đọc tách theo từng lớp từ trái sang phải." },
    4: { title: "Bài 11: Triệu và lớp triệu (Tiết 1: Làm quen với 1 triệu, 10 triệu, 100 triệu)", note: "Khái niệm lớp triệu gồm hàng triệu, chục triệu, trăm triệu." },
    5: { title: "Bài 11: Triệu và lớp triệu (Tiết 2: Đọc, viết số thuộc lớp triệu)", note: "Đọc chuẩn xác dân số các quốc gia, ngân sách số tiền lớn." },
  },
  5: {
    1: { title: "Bài 11: Triệu và lớp triệu (Tiết 3: Luyện tập tách lớp và viết số theo lời đọc)", note: "Tách 3 chữ số thành một lớp khi viết để dễ đọc." },
    2: { title: "Bài 12: Dãy số tự nhiên (Tiết 1: Đặc điểm của dãy số tự nhiên 0, 1, 2, 3...)", note: "Số 0 là số tự nhiên bé nhất, không có số tự nhiên lớn nhất." },
    3: { title: "Bài 12: Dãy số tự nhiên (Tiết 2: Viết số tự nhiên trong hệ thập phân)", note: "Mười đơn vị ở một hàng làm thành một đơn vị ở hàng liền trước nó." },
    4: { title: "Bài 13: So sánh và xếp thứ tự các số tự nhiên (Tiết 1: Quy tắc so sánh số tự nhiên)", note: "Số có nhiều chữ số hơn thì lớn hơn; nếu bằng nhau so sánh từ hàng cao nhất." },
    5: { title: "Bài 13: So sánh và xếp thứ tự các số tự nhiên (Tiết 2: Sắp xếp thứ tự và tìm số lớn nhất)", note: "Sắp xếp thứ tự dân số các tỉnh thành phố của Việt Nam." },
  }
};

// -------------------------------------------------------------------------
// 3. KHỐI 3: TOÀN BỘ CÁC MÔN CHỦ ĐẠO
// -------------------------------------------------------------------------

export const GRADE_3_TIENG_VIET: WeeklySubjectLessons = {
  1: {
    1: { title: "Bài 1: Ngày em vào Đội (Tiết 1: Đọc)", sub: "Đọc", note: "Niềm vui và lòng tự hào khi được đeo chiếc khăn quàng đỏ thắm." },
    2: { title: "Bài 1: Ngày em vào Đội (Tiết 2: Đọc tiếp)", sub: "Đọc", note: "Luyện đọc thuộc lòng khổ thơ em thích nhất." },
    3: { title: "Bài 1: Ngày em vào Đội (Tiết 3: Viết: Ôn chữ hoa A, Ă, Â)", sub: "Viết", note: "Rèn kĩ năng viết đúng độ cao con chữ hoa và câu ứng dụng." },
    4: { title: "Bài 1: Ngày em vào Đội (Tiết 4: LTVC: Từ ngữ về Đội Thiếu niên Tiền phong)", sub: "LTVC", note: "Khăn quàng đỏ, sao nhi đồng, đội viên, búp măng non." },
    5: { title: "Bài 2: Chiếc nhãn vở đặc biệt (Tiết 1: Đọc)", sub: "Đọc", note: "Tình cảm nâng niu sách vở và chuẩn bị năm học mới." },
    6: { title: "Bài 2: Chiếc nhãn vở đặc biệt (Tiết 2: Đọc tiếp)", sub: "Đọc", note: "Đọc hiểu cảm xúc tự hào của bạn nhỏ khi tự tay nắn nót viết nhãn vở." },
    7: { title: "Bài 2: Chiếc nhãn vở đặc biệt (Tiết 3: Viết đoạn văn giới thiệu bản thân)", sub: "Viết", note: "Viết đoạn văn 4-5 câu nêu tên, sở thích và ước mơ của em." },
  },
  2: {
    1: { title: "Bài 3: Lắng nghe những ngày hè (Tiết 1: Đọc)", sub: "Đọc", note: "Âm thanh rộn rã của tiếng ve và kỉ niệm ngày hè êm đềm." },
    2: { title: "Bài 3: Lắng nghe những ngày hè (Tiết 2: Đọc tiếp)", sub: "Đọc", note: "Tìm những từ ngữ gợi tả âm thanh mùa hè sống động." },
    3: { title: "Bài 3: Lắng nghe những ngày hè (Tiết 3: Viết: Ôn chữ hoa B, C)", sub: "Viết", note: "Viết từ ứng dụng và câu ca dao tục ngữ chữ hoa B, C." },
    4: { title: "Bài 3: Lắng nghe những ngày hè (Tiết 4: LTVC: Biện pháp so sánh)", sub: "LTVC", note: "Nhận biết từ so sánh (như, là, tựa) và hình ảnh so sánh ngộ nghĩnh." },
    5: { title: "Bài 4: Cánh rừng trong nắng (Tiết 1: Đọc)", sub: "Đọc", note: "Vẻ đẹp rực rỡ của cánh rừng nhiệt đới ngập tràn ánh nắng ban mai." },
    6: { title: "Bài 4: Cánh rừng trong nắng (Tiết 2: Đọc tiếp)", sub: "Đọc", note: "Luyện đọc phân vai và trả lời câu hỏi tìm hiểu bài." },
    7: { title: "Bài 4: Cánh rừng trong nắng (Tiết 3: Đọc mở rộng)", sub: "Đọc mở rộng", note: "Đọc và ghi lại phiếu đọc sách bài thơ về thiên nhiên tươi đẹp." },
  },
  3: {
    1: { title: "Bài 5: Mùa thu của em (Tiết 1: Đọc)", sub: "Đọc", note: "Màu vàng hoa cúc, hương cốm thơm và tiếng trống tựu trường mùa thu." },
    2: { title: "Bài 5: Mùa thu của em (Tiết 2: Đọc tiếp)", sub: "Đọc", note: "Cảm nhận sự ấm áp và trong trẻo của cảnh sắc mùa thu." },
    3: { title: "Bài 5: Mùa thu của em (Tiết 3: Viết: Ôn chữ hoa D, Đ)", sub: "Viết", note: "Viết đúng mẫu chữ hoa D, Đ và câu ứng dụng chuẩn mực." },
    4: { title: "Bài 5: Mùa thu của em (Tiết 4: LTVC: Từ chỉ đặc điểm và câu Ai thế nào?)", sub: "LTVC", note: "Mở rộng vốn từ chỉ màu sắc, hình dáng, hương vị." },
    5: { title: "Bài 6: Gió heo may (Tiết 1: Đọc)", sub: "Đọc", note: "Cơn gió nhẹ đầu mùa mang hơi thở se lạnh của mùa đông sắp tới." },
    6: { title: "Bài 6: Gió heo may (Tiết 2: Đọc tiếp)", sub: "Đọc", note: "Đọc diễn cảm giọng trầm ấm, lắng đọng." },
    7: { title: "Bài 6: Gió heo may (Tiết 3: Kể chuyện: Chiếc gương kì diệu)", sub: "Nói và nghe", note: "Kể từng đoạn câu chuyện dựa theo tranh minh họa gợi ý." },
  }
};

export const GRADE_3_TOAN: WeeklySubjectLessons = {
  1: {
    1: { title: "Bài 1: Ôn tập phép cộng, phép trừ trong phạm vi 1000 (Tiết 1: Cộng trừ không nhớ)", note: "Đặt tính thẳng cột và tính nhẩm hàng trăm, hàng chục." },
    2: { title: "Bài 1: Ôn tập phép cộng, phép trừ trong phạm vi 1000 (Tiết 2: Cộng trừ có nhớ một lần)", note: "Lưu ý nhớ 1 sang hàng bên cạnh." },
    3: { title: "Bài 1: Ôn tập phép cộng, phép trừ trong phạm vi 1000 (Tiết 3: Luyện tập giải toán có lời văn)", note: "Dạng toán nhiều hơn, ít hơn một số đơn vị." },
    4: { title: "Bài 2: Ôn tập phép nhân, phép chia trong bảng (Tiết 1: Bảng nhân 2 và bảng nhân 5)", note: "Củng cố ý nghĩa phép nhân là tổng của các số hạng bằng nhau." },
    5: { title: "Bài 2: Ôn tập phép nhân, phép chia trong bảng (Tiết 2: Bảng chia 2 và bảng chia 5)", note: "Mối quan hệ mật thiết giữa phép nhân và phép chia tương ứng." },
  },
  2: {
    1: { title: "Bài 2: Ôn tập phép nhân, phép chia trong bảng (Tiết 3: Luyện tập tính nhẩm bảng nhân chia)", note: "Trò chơi đố vui toán học rèn phản xạ tính nhanh." },
    2: { title: "Bài 3: Tìm thành phần trong phép cộng, phép trừ (Tiết 1: Tìm số hạng chưa biết)", note: "Muốn tìm số hạng chưa biết ta lấy tổng trừ đi số hạng đã biết." },
    3: { title: "Bài 3: Tìm thành phần trong phép cộng, phép trừ (Tiết 2: Tìm số bị trừ, số trừ)", note: "Quy tắc: Số bị trừ = Hiệu + Số trừ; Số trừ = Số bị trừ - Hiệu." },
    4: { title: "Bài 4: Tìm thành phần trong phép nhân, phép chia (Tiết 1: Tìm thừa số chưa biết)", note: "Muốn tìm thừa số chưa biết ta lấy tích chia cho thừa số kia." },
    5: { title: "Bài 4: Tìm thành phần trong phép nhân, phép chia (Tiết 2: Tìm số bị chia, số chia)", note: "Quy tắc: Số bị chia = Thương x Số chia; Số chia = Số bị chia : Thương." },
  },
  3: {
    1: { title: "Bài 5: Bảng nhân 3, Bảng chia 3 (Tiết 1: Thành lập bảng nhân 3)", note: "Đếm thêm 3 và hình thành các phép tính 3 x 1 đến 3 x 10." },
    2: { title: "Bài 5: Bảng nhân 3, Bảng chia 3 (Tiết 2: Thành lập bảng chia 3)", note: "Từ phép nhân suy ra phép chia tương ứng cho 3." },
    3: { title: "Bài 5: Bảng nhân 3, Bảng chia 3 (Tiết 3: Luyện tập thực hành)", note: "Giải bài toán có lời văn liên quan đến gấp lên hoặc giảm đi 3 lần." },
    4: { title: "Bài 6: Bảng nhân 4, Bảng chia 4 (Tiết 1: Thành lập bảng nhân 4)", note: "Đếm thêm 4 và học thuộc lòng bảng nhân 4." },
    5: { title: "Bài 6: Bảng nhân 4, Bảng chia 4 (Tiết 2: Thành lập bảng chia 4)", note: "Thực hành chia đều số đồ vật vào 4 hộp quà." },
  }
};

// -------------------------------------------------------------------------
// 4. KHỐI 2: TOÀN BỘ CÁC MÔN CHỦ ĐẠO
// -------------------------------------------------------------------------

export const GRADE_2_TIENG_VIET: WeeklySubjectLessons = {
  1: {
    1: { title: "Bài 1: Tôi là học sinh lớp 2 (Tiết 1: Đọc)", sub: "Đọc", note: "Tâm trạng háo hức, tự hào của bạn nhỏ trong ngày đầu lên lớp 2." },
    2: { title: "Bài 1: Tôi là học sinh lớp 2 (Tiết 2: Đọc tiếp)", sub: "Đọc", note: "Luyện đọc đúng ngắt nghỉ câu dài và trả lời câu hỏi." },
    3: { title: "Bài 1: Tôi là học sinh lớp 2 (Tiết 3: Viết: Viết chữ hoa A)", sub: "Viết", note: "Viết con chữ hoa A cỡ vừa và câu ứng dụng: Anh em thuận hòa." },
    4: { title: "Bài 1: Tôi là học sinh lớp 2 (Tiết 4: Nói và nghe: Những ngày hè của em)", sub: "Nói và nghe", note: "Kể lại một kỉ niệm vui vẻ và an toàn trong kì nghỉ hè." },
    5: { title: "Bài 2: Ngày hôm qua đâu rồi? (Tiết 1: Đọc)", sub: "Đọc", note: "Bài thơ giáo dục ý thức quý trọng thời gian học tập chăm chỉ." },
    6: { title: "Bài 2: Ngày hôm qua đâu rồi? (Tiết 2: Đọc tiếp)", sub: "Đọc", note: "Học thuộc lòng 2 khổ thơ cuối và nêu ý nghĩa bài học." },
    7: { title: "Bài 2: Ngày hôm qua đâu rồi? (Tiết 3: Viết: Nghe - viết Ngày hôm qua đâu rồi?)", sub: "Viết", note: "Rèn chữ viết cẩn thận, đúng chính tả hoa đầu dòng thơ." },
    8: { title: "Bài 2: Ngày hôm qua đâu rồi? (Tiết 4: LTVC: Từ ngữ chỉ sự vật, hoạt động)", sub: "LTVC", note: "Phân biệt từ chỉ người, đồ vật, cây cối, con vật." },
    9: { title: "Bài 2: Ngày hôm qua đâu rồi? (Tiết 5: Viết đoạn văn tự giới thiệu bản thân)", sub: "Viết đoạn văn", note: "Viết 3-4 câu giới thiệu tên, tuổi, sở thích của em." },
    10: { title: "Bài 2: Ngày hôm qua đâu rồi? (Tiết 6: Đọc mở rộng)", sub: "Đọc mở rộng", note: "Đọc một bài thơ hoặc bài hát về thầy cô, mái trường." },
  },
  2: {
    1: { title: "Bài 3: Niềm vui của Bi và Bống (Tiết 1: Đọc)", sub: "Đọc", note: "Tình cảm yêu thương gắn bó và ước mơ sẻ chia của hai anh em." },
    2: { title: "Bài 3: Niềm vui của Bi và Bống (Tiết 2: Đọc tiếp)", sub: "Đọc", note: "Cầu vồng bảy sắc và những món quà hai bạn muốn tặng nhau." },
    3: { title: "Bài 3: Niềm vui của Bi và Bống (Tiết 3: Viết: Viết chữ hoa Ă, Â)", sub: "Viết", note: "Tập viết chữ hoa Ă, Â và câu ứng dụng: Ăn quả nhớ kẻ trồng cây." },
    4: { title: "Bài 3: Niềm vui của Bi và Bống (Tiết 4: Nói và nghe: Kể chuyện Cây táo thần)", sub: "Nói và nghe", note: "Kể từng đoạn theo tranh về bài học chia sẻ yêu thương." },
    5: { title: "Bài 4: Làm việc thật là vui (Tiết 1: Đọc)", sub: "Đọc", note: "Mọi vật xung quanh: đồng hồ, gà trống, chim sâu, cành đào đều làm việc có ích." },
    6: { title: "Bài 4: Làm việc thật là vui (Tiết 2: Đọc tiếp)", sub: "Đọc", note: "Liên hệ bản thân em luôn chăm chỉ làm việc nhà và học tập." },
    7: { title: "Bài 4: Làm việc thật là vui (Tiết 3: Viết: Nghe - viết Làm việc thật là vui)", sub: "Viết", note: "Quy tắc chính tả phân biệt g/gh, s/x, d/r/gi." },
    8: { title: "Bài 4: Làm việc thật là vui (Tiết 4: LTVC: Từ chỉ hoạt động và câu giới thiệu)", sub: "LTVC", note: "Nhận biết các từ quét nhà, nhặt rau, tưới hoa, học bài." },
    9: { title: "Bài 4: Làm việc thật là vui (Tiết 5: Viết đoạn văn kể về việc em đã làm)", sub: "Viết đoạn văn", note: "Kể việc em đã làm giúp đỡ bố mẹ ở nhà." },
    10: { title: "Bài 4: Làm việc thật là vui (Tiết 6: Đọc mở rộng)", sub: "Đọc mở rộng", note: "Đọc truyện thiếu nhi về các con vật chăm chỉ." },
  }
};

export const GRADE_2_TOAN: WeeklySubjectLessons = {
  1: {
    1: { title: "Bài 1: Ôn tập về các số đến 100 (Tiết 1: Đếm, đọc, viết các số đến 100)", note: "Bảng các số từ 1 đến 100." },
    2: { title: "Bài 1: Ôn tập về các số đến 100 (Tiết 2: Số chục và số đơn vị)", note: "Phân tích cấu tạo số có hai chữ số thành tổng các chục và đơn vị." },
    3: { title: "Bài 1: Ôn tập về các số đến 100 (Tiết 3: So sánh các số có hai chữ số)", note: "So sánh chữ số hàng chục trước, nếu bằng nhau so sánh hàng đơn vị." },
    4: { title: "Bài 2: Tia số. Số liền trước, số liền sau (Tiết 1: Nhận biết tia số và vạch gốc 0)", note: "Biểu diễn các số tự nhiên liên tiếp trên tia số." },
    5: { title: "Bài 2: Tia số. Số liền trước, số liền sau (Tiết 2: Xác định số liền trước bớt 1, số liền sau thêm 1)", note: "Rèn kĩ năng xác định nhanh số đứng ngay trước và ngay sau." },
  },
  2: {
    1: { title: "Bài 3: Các thành phần của phép cộng, phép trừ (Tiết 1: Số hạng, Tổng)", note: "Nhận diện số hạng và tên gọi kết quả của phép cộng." },
    2: { title: "Bài 3: Các thành phần của phép cộng, phép trừ (Tiết 2: Số bị trừ, Số trừ, Hiệu)", note: "Nhận diện số bị trừ, số trừ và kết quả của phép trừ." },
    3: { title: "Bài 4: Hơn, kém nhau bao nhiêu (Tiết 1: Tìm phần chênh lệch hơn kém)", note: "Muốn biết số lớn hơn số bé bao nhiêu đơn vị ta lấy số lớn trừ số bé." },
    4: { title: "Bài 4: Hơn, kém nhau bao nhiêu (Tiết 2: Luyện tập giải toán hơn kém)", note: "Bài toán thực tế về so sánh số tuổi, số viên bi, bông hoa." },
    5: { title: "Bài 5: Ôn tập phép cộng, phép trừ không nhớ trong phạm vi 100", note: "Đặt tính thẳng cột và tính nhẩm nhanh." },
  }
};

// -------------------------------------------------------------------------
// 5. KHỐI 1: TOÀN BỘ CÁC MÔN CHỦ ĐẠO
// -------------------------------------------------------------------------

export const GRADE_1_TIENG_VIET: WeeklySubjectLessons = {
  1: {
    1: { title: "Làm quen với trường lớp, thầy cô và bạn bè (Tiết 1)", sub: "Làm quen", note: "Làm quen nề nếp lớp học." },
    2: { title: "Làm quen với trường lớp, thầy cô và bạn bè (Tiết 2)", sub: "Làm quen", note: "Giới thiệu bản thân và bạn cùng bàn." },
    3: { title: "Làm quen với tư thế đọc, viết, nói, nghe (Tiết 1)", sub: "Làm quen", note: "Tư thế ngồi thẳng lưng, khoảng cách mắt 25-30cm." },
    4: { title: "Làm quen với tư thế đọc, viết, nói, nghe (Tiết 2)", sub: "Làm quen", note: "Cách cầm bút chì bằng 3 ngón tay." },
    5: { title: "Làm quen với các nét cơ bản: Nét thẳng, nét ngang (Tiết 1)", sub: "Nét cơ bản", note: "Tập đưa bút trên bảng con." },
    6: { title: "Làm quen với các nét cơ bản: Nét xiên trái, nét xiên phải (Tiết 2)", sub: "Nét cơ bản", note: "Viết đúng ô li và độ cao." },
    7: { title: "Làm quen với các nét cơ bản: Nét móc xuôi, nét móc ngược (Tiết 3)", sub: "Nét cơ bản", note: "Rèn sự mềm mại của cổ tay." },
    8: { title: "Làm quen với các nét cơ bản: Nét móc hai đầu (Tiết 4)", sub: "Nét cơ bản", note: "Luyện nét thanh nét đậm ban đầu." },
    9: { title: "Làm quen với nét cong hở phải, nét cong hở trái (Tiết 5)", sub: "Nét cơ bản", note: "Tập viết nét cong tròn trịa." },
    10: { title: "Làm quen với nét cong kín và dấu thanh (Tiết 6)", sub: "Nét cơ bản", note: "Nhận biết dấu huyền, sắc, hỏi, ngã, nặng." },
    11: { title: "Làm quen với các chữ số 1, 2, 3, 4, 5 (Tiết 1)", sub: "Chữ số", note: "Nhận dạng chữ số và phát âm chuẩn." },
    12: { title: "Làm quen với các chữ số 6, 7, 8, 9, 0 (Tiết 2)", sub: "Chữ số", note: "Tập viết chữ số trên bảng con." },
  },
  2: {
    1: { title: "Bài 1: A a (Tiết 1: Nhận diện và phát âm âm A)", sub: "Âm vần", note: "Tìm tiếng có âm a trong tranh." },
    2: { title: "Bài 1: A a (Tiết 2: Tập viết chữ a và số 1)", sub: "Tập viết", note: "Viết chữ a cỡ vừa trên bảng con và vở tập viết." },
    3: { title: "Bài 2: B b (Tiết 1: Nhận diện và phát âm âm B)", sub: "Âm vần", note: "Ghép âm b với âm a tạo thành tiếng ba." },
    4: { title: "Bài 2: B b (Tiết 2: Tập viết chữ b, tiếng ba và dấu sắc)", sub: "Tập viết", note: "Viết chữ b, tiếng bá có dấu sắc." },
    5: { title: "Bài 3: C c / Dấu huyền (Tiết 1: Nhận diện âm C và dấu huyền)", sub: "Âm vần", note: "Ghép c-a-ca, c-a-ca-huyền-cà." },
    6: { title: "Bài 3: C c / Dấu huyền (Tiết 2: Tập viết chữ c, tiếng ca, cà)", sub: "Tập viết", note: "Rèn kĩ năng viết liền mạch." },
    7: { title: "Bài 4: E e Ê ê (Tiết 1: Nhận diện âm e, ê)", sub: "Âm vần", note: "Tìm tiếng có âm e, ê: ve, bế, bé." },
    8: { title: "Bài 4: E e Ê ê (Tiết 2: Tập viết chữ e, ê, tiếng bé, bế)", sub: "Tập viết", note: "Viết đúng mũ chữ ê." },
    9: { title: "Bài 5: Ôn tập và kể chuyện (Tiết 1: Đọc bảng ôn các âm a, b, c, e, ê)", sub: "Ôn tập", note: "Ghép âm thành tiếng và đọc câu ứng dụng ngắn." },
    10: { title: "Bài 5: Ôn tập và kể chuyện (Tiết 2: Kể chuyện Búp bê và dế mèn)", sub: "Kể chuyện", note: "Lắng nghe cô kể chuyện và tập kể lại đoạn 1." },
    11: { title: "Ôn luyện đọc viết tuần 2 (Tiết 1)", sub: "Ôn luyện", note: "Đọc trơn các tiếng đã học trong tuần." },
    12: { title: "Ôn luyện đọc viết tuần 2 (Tiết 2)", sub: "Ôn luyện", note: "Luyện viết vào vở ô li sạch đẹp." },
  }
};

export const GRADE_1_TOAN: WeeklySubjectLessons = {
  1: {
    1: { title: "Tiết học đầu tiên - Làm quen với môn Toán", note: "Làm quen bạn Rô-bốt và bộ đồ dùng học Toán lớp 1." },
    2: { title: "Bài 1: Các số 0, 1, 2, 3, 4, 5 (Tiết 1: Nhận biết số lượng 1, 2, 3)", note: "Đếm que tính, ngón tay và đồ vật từ 1 đến 3." },
    3: { title: "Bài 1: Các số 0, 1, 2, 3, 4, 5 (Tiết 2: Nhận biết số lượng 4, 5)", note: "Tập đếm và chỉ vào từng đồ vật tương ứng với số 4, 5." },
  },
  2: {
    1: { title: "Bài 1: Các số 0, 1, 2, 3, 4, 5 (Tiết 3: Số 0 và thứ tự dãy số từ 0 đến 5)", note: "Khái niệm số 0 là không có đồ vật nào." },
    2: { title: "Bài 2: Các số 6, 7, 8, 9, 10 (Tiết 1: Nhận biết số lượng 6, 7, 8)", note: "Đếm và lấy đúng số lượng đồ vật trong phạm vi 8." },
    3: { title: "Bài 2: Các số 6, 7, 8, 9, 10 (Tiết 2: Nhận biết số lượng 9, 10)", note: "Số 10 gồm 1 chục; tập đếm từ 1 đến 10 xuôi và ngược." },
  },
  3: {
    1: { title: "Bài 2: Các số 6, 7, 8, 9, 10 (Tiết 3: Luyện tập dãy số từ 0 đến 10)", note: "Viết thành thạo các chữ số từ 0 đến 10 trên bảng con." },
    2: { title: "Bài 3: Nhiều hơn, ít hơn, bằng nhau (Tiết 1: So sánh số lượng qua ghép đôi 1 - 1)", note: "Nối từng con bướm với từng bông hoa để nhận biết nhiều hơn, ít hơn." },
    3: { title: "Bài 3: Nhiều hơn, ít hơn, bằng nhau (Tiết 2: Nhận biết bằng nhau)", note: "Hai nhóm đồ vật có số lượng bằng nhau." },
  }
};

// =========================================================================
// MASTER HELPER: LẤY BÀI DẠY CHUẨN XÁC ĐỒNG BỘ CHO MỌI MÔN & MỌI TUẦN
// =========================================================================

export function lookupDetailedCurriculumLesson(
  grade: number,
  subject: string,
  week: number,
  periodInWeek: number
): LessonInfo | null {
  const normSub = subject.toLowerCase().trim();

  // Khối 5
  if (grade === 5) {
    if (normSub.includes("tiếng việt") || normSub === "tv") {
      const match = GRADE_5_TIENG_VIET[week]?.[periodInWeek];
      if (match) {
        return {
          lessonTitle: match.title,
          subSubject: match.sub || "Tiếng Việt",
          curriculumPeriod: (week - 1) * 7 + periodInWeek,
          integrationNotes: match.note || "Tích hợp chuẩn kiến thức kĩ năng GDPT 2018."
        };
      }
    }
    if (normSub.includes("toán") || normSub === "t") {
      const match = GRADE_5_TOAN[week]?.[periodInWeek];
      if (match) {
        return {
          lessonTitle: match.title,
          subSubject: "Toán",
          curriculumPeriod: (week - 1) * 5 + periodInWeek,
          integrationNotes: match.note || "Rèn luyện tư duy toán học và năng lực giải quyết vấn đề."
        };
      }
    }
    if (normSub.includes("khoa học") || normSub === "kh") {
      const match = GRADE_5_KHOA_HOC[week]?.[periodInWeek];
      if (match) {
        return {
          lessonTitle: match.title,
          subSubject: "Khoa học",
          curriculumPeriod: (week - 1) * 2 + periodInWeek,
          integrationNotes: match.note || "Khám phá khoa học thực nghiệm và bảo vệ môi trường."
        };
      }
    }
    if (normSub.includes("lịch sử") || normSub.includes("địa lí") || normSub.includes("ls&đl") || normSub.includes("ls và đl")) {
      const match = GRADE_5_LS_DL[week]?.[periodInWeek];
      if (match) {
        return {
          lessonTitle: match.title,
          subSubject: "Lịch sử và Địa lí",
          curriculumPeriod: (week - 1) * 2 + periodInWeek,
          integrationNotes: match.note || "Giáo dục lòng yêu nước và hiểu biết địa lí đất nước."
        };
      }
    }
    if (normSub.includes("đạo đức") || normSub.includes("đđ")) {
      const match = GRADE_5_DAO_DUC[week]?.[periodInWeek] || GRADE_5_DAO_DUC[week]?.[1];
      if (match) {
        return {
          lessonTitle: match.title,
          subSubject: "Đạo đức",
          curriculumPeriod: week,
          integrationNotes: match.note || "Bồi dưỡng chuẩn mực đạo đức lối sống lành mạnh."
        };
      }
    }
    if (normSub.includes("công nghệ") || normSub === "cn") {
      const match = GRADE_5_CONG_NGHE[week]?.[periodInWeek] || GRADE_5_CONG_NGHE[week]?.[1];
      if (match) {
        return {
          lessonTitle: match.title,
          subSubject: "Công nghệ",
          curriculumPeriod: week,
          integrationNotes: match.note || "Ứng dụng thiết kế kĩ thuật và công nghệ đời sống."
        };
      }
    }
    if (normSub.includes("hoạt động trải nghiệm") || normSub.includes("hđtn")) {
      const match = GRADE_5_HDTN[week]?.[periodInWeek];
      if (match) {
        return {
          lessonTitle: match.title,
          subSubject: match.sub || "Hoạt động trải nghiệm",
          curriculumPeriod: (week - 1) * 3 + periodInWeek,
          integrationNotes: match.note || "Phát triển năng lực thích ứng và kỹ năng hoạt động xã hội."
        };
      }
    }
  }

  // Khối 4
  if (grade === 4) {
    if (normSub.includes("tiếng việt") || normSub === "tv") {
      const match = GRADE_4_TIENG_VIET[week]?.[periodInWeek];
      if (match) {
        return {
          lessonTitle: match.title,
          subSubject: match.sub || "Tiếng Việt",
          curriculumPeriod: (week - 1) * 7 + periodInWeek,
          integrationNotes: match.note || "Chương trình Tiếng Việt 4 GDPT 2018."
        };
      }
    }
    if (normSub.includes("toán") || normSub === "t") {
      const match = GRADE_4_TOAN[week]?.[periodInWeek];
      if (match) {
        return {
          lessonTitle: match.title,
          subSubject: "Toán",
          curriculumPeriod: (week - 1) * 5 + periodInWeek,
          integrationNotes: match.note || "Toán 4 Kết nối tri thức."
        };
      }
    }
  }

  // Khối 3
  if (grade === 3) {
    if (normSub.includes("tiếng việt") || normSub === "tv") {
      const match = GRADE_3_TIENG_VIET[week]?.[periodInWeek];
      if (match) {
        return {
          lessonTitle: match.title,
          subSubject: match.sub || "Tiếng Việt",
          curriculumPeriod: (week - 1) * 7 + periodInWeek,
          integrationNotes: match.note || "Chương trình Tiếng Việt 3 GDPT 2018."
        };
      }
    }
    if (normSub.includes("toán") || normSub === "t") {
      const match = GRADE_3_TOAN[week]?.[periodInWeek];
      if (match) {
        return {
          lessonTitle: match.title,
          subSubject: "Toán",
          curriculumPeriod: (week - 1) * 5 + periodInWeek,
          integrationNotes: match.note || "Toán 3 Kết nối tri thức."
        };
      }
    }
  }

  // Khối 2
  if (grade === 2) {
    if (normSub.includes("tiếng việt") || normSub === "tv") {
      const match = GRADE_2_TIENG_VIET[week]?.[periodInWeek];
      if (match) {
        return {
          lessonTitle: match.title,
          subSubject: match.sub || "Tiếng Việt",
          curriculumPeriod: (week - 1) * 10 + periodInWeek,
          integrationNotes: match.note || "Tiếng Việt 2 Kết nối tri thức."
        };
      }
    }
    if (normSub.includes("toán") || normSub === "t") {
      const match = GRADE_2_TOAN[week]?.[periodInWeek];
      if (match) {
        return {
          lessonTitle: match.title,
          subSubject: "Toán",
          curriculumPeriod: (week - 1) * 5 + periodInWeek,
          integrationNotes: match.note || "Toán 2 Kết nối tri thức."
        };
      }
    }
  }

  // Khối 1
  if (grade === 1) {
    if (normSub.includes("tiếng việt") || normSub === "tv") {
      const match = GRADE_1_TIENG_VIET[week]?.[periodInWeek];
      if (match) {
        return {
          lessonTitle: match.title,
          subSubject: match.sub || "Tiếng Việt",
          curriculumPeriod: (week - 1) * 12 + periodInWeek,
          integrationNotes: match.note || "Tiếng Việt 1 Kết nối tri thức."
        };
      }
    }
    if (normSub.includes("toán") || normSub === "t") {
      const match = GRADE_1_TOAN[week]?.[periodInWeek];
      if (match) {
        return {
          lessonTitle: match.title,
          subSubject: "Toán",
          curriculumPeriod: (week - 1) * 3 + periodInWeek,
          integrationNotes: match.note || "Toán 1 Kết nối tri thức."
        };
      }
    }
  }

  return null;
}

