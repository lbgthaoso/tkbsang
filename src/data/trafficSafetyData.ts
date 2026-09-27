import { Grade } from "../types";

export interface TrafficSafetyLesson {
  lessonNumber: number; // 1 to 10
  lessonTitle: string; // Tên bài ATGT
  weeks: [number, number]; // [Tuần Tiết 1, Tuần Tiết 2], ví dụ [1, 2], [3, 4]...
  targetGrades: Grade[];
  competencies: string; // Năng lực đặc thù ATGT
  contentPart1: string; // Nội dung tiết 1 (Lý thuyết / Tìm hiểu nguy cơ)
  contentPart2: string; // Nội dung tiết 2 (Thực hành xử lý tình huống / Trải nghiệm)
  teacherActivityPart1: string;
  studentActivityPart1: string;
  teacherActivityPart2: string;
  studentActivityPart2: string;
}

// 10 bài An toàn giao thông cho từng khối lớp (Khối 1 đến Khối 5)
// Tích hợp ghép vào tiết HĐTN (Sinh hoạt lớp - SHL) vào Thứ Sáu
// Mỗi bài dạy tích hợp 2 tiết trong 2 tuần liên tiếp
export const TRAFFIC_SAFETY_CURRICULUM: Record<Grade, TrafficSafetyLesson[]> = {
  // ==========================================
  // KHỐI 1 (10 BÀI)
  // ==========================================
  1: [
    {
      lessonNumber: 1,
      lessonTitle: "Đi bộ an toàn trên đường phố và đường làng",
      weeks: [1, 2],
      targetGrades: [1],
      competencies: "Nhận biết đi bộ an toàn trên vỉa hè hoặc sát lề đường bên phải; nắm tay người lớn khi qua đường.",
      contentPart1: "Tìm hiểu cách đi bộ an toàn trên đường làng, ngõ xóm và phố xá có vỉa hè.",
      contentPart2: "Thực hành đi bộ an toàn mô phỏng trong sân trường/lớp học, luôn nắm tay người lớn.",
      teacherActivityPart1: "Chiếu tranh bạn nhỏ đi bộ trên vỉa hè. Hướng dẫn quy tắc đi sát lề đường bên phải, không chạy nhảy đùa giỡn.",
      studentActivityPart1: "Quan sát tranh, chỉ ra bạn đi đúng, bạn đi sai. Nhắc lại quy tắc: 'Đi sát lề phải, nắm tay người lớn'.",
      teacherActivityPart2: "Tổ chức trò chơi mô phỏng: 'Bé đi bộ cùng mẹ'. Nhắc nhở kĩ năng quan sát xe cộ trước khi bước đi.",
      studentActivityPart2: "Từng nhóm 2 bạn sắm vai bé và mẹ cùng đi bộ an toàn qua mô hình ngã tư lớp học."
    },
    {
      lessonNumber: 2,
      lessonTitle: "Đội mũ bảo hiểm khi ngồi trên xe mô tô, xe gắn máy, xe đạp điện",
      weeks: [3, 4],
      targetGrades: [1],
      competencies: "Biết tác dụng của mũ bảo hiểm; nhận biết và thực hiện đúng 3 bước đội mũ bảo hiểm đạt chuẩn.",
      contentPart1: "Tìm hiểu cấu tạo và tầm quan trọng của mũ bảo hiểm đối với sự an toàn của trẻ em.",
      contentPart2: "Thực hành 3 bước đội mũ bảo hiểm: Mở quai - Đội ngay ngắn - Cài khóa và kiểm tra độ vừa vặn.",
      teacherActivityPart1: "Đưa ra 1 chiếc mũ bảo hiểm đạt chuẩn, giới thiệu vỏ mũ, xốp giảm chấn, quai cài và kính chắn gió.",
      studentActivityPart1: "Quan sát chiếc mũ thật, sờ thử lớp xốp bảo vệ, trả lời câu hỏi: 'Vì sao phải đội mũ bảo hiểm?'.",
      teacherActivityPart2: "Hướng dẫn thực hành quy tắc '2 ngón tay': kiểm tra quai mũ không quá chật cũng không quá lỏng.",
      studentActivityPart2: "Thực hành đội mũ bảo hiểm trước lớp. Cả lớp đếm nhịp và kiểm tra chéo quai cài."
    },
    {
      lessonNumber: 3,
      lessonTitle: "Ngồi an toàn trên xe mô tô, xe gắn máy và xe đạp",
      weeks: [5, 6],
      targetGrades: [1],
      competencies: "Biết tư thế ngồi an toàn trên xe máy, xe đạp: ngồi ngay ngắn phía sau, hai tay ôm eo người lớn, hai chân đặt lên bàn để chân.",
      contentPart1: "Quan sát tranh các tư thế ngồi an toàn và tư thế nguy hiểm khi ngồi sau xe máy, xe đạp.",
      contentPart2: "Thực hành tư thế ngồi chuẩn xác, không đứng lên xe, không thò đầu thò tay ra ngoài.",
      teacherActivityPart1: "Trình chiếu các bức tranh: bạn ngồi ôm eo mẹ, bạn đứng lên yên xe máy. Đố HS nhận diện tư thế an toàn.",
      studentActivityPart1: "Hào hứng chỉ ra hành động nguy hiểm: 'Đứng lên xe máy sẽ bị ngã!', 'Phải ngồi ôm eo người lái'.",
      teacherActivityPart2: "Mời 2 HS lên mô phỏng tư thế ngồi sau xe đạp của bố. Nhắc nhở hai chân đặt đúng lên chỗ để chân.",
      studentActivityPart2: "Thực hành ngồi ghế ngay ngắn, hai tay bám eo bạn phía trước, hai chân gác đúng vị trí an toàn."
    },
    {
      lessonNumber: 4,
      lessonTitle: "Nhận biết và tuân thủ hiệu lệnh đèn tín hiệu giao thông",
      weeks: [7, 8],
      targetGrades: [1],
      competencies: "Phân biệt được ý nghĩa của 3 màu đèn tín hiệu: Đỏ (dừng lại), Vàng (chậm lại chuẩn bị dừng), Xanh (được đi).",
      contentPart1: "Làm quen với cột đèn tín hiệu giao thông 3 màu và đèn dành cho người đi bộ.",
      contentPart2: "Trò chơi vận động 'Đèn xanh, đèn đỏ' rèn phản xạ tuân thủ tín hiệu giao thông.",
      teacherActivityPart1: "Dùng mô hình cột đèn giao thông mini, bật sáng từng màu đèn và hỏi ý nghĩa từng màu.",
      studentActivityPart1: "Đồng thanh hô vang: 'Đèn đỏ dừng lại - Đèn xanh được đi - Đèn vàng đi chậm'.",
      teacherActivityPart2: "Điều hành trò chơi: GV giơ thẻ màu nào, HS thực hiện động tác tương ứng (Đỏ: đứng yên; Xanh: dậm chân bước; Vàng: đi chậm).",
      studentActivityPart2: "Tập trung chú ý, phản xạ nhanh theo hiệu lệnh giơ biển báo của giáo viên."
    },
    {
      lessonNumber: 5,
      lessonTitle: "Đi qua đường an toàn tại nơi có vạch kẻ đường",
      weeks: [9, 10],
      targetGrades: [1],
      competencies: "Biết tìm và đi qua đường trên vạch kẻ đường dành cho người đi bộ (vạch ngựa vằn); luôn có người lớn dắt tay.",
      contentPart1: "Nhận diện vạch kẻ đường dành cho người đi bộ trên đường phố.",
      contentPart2: "Thực hành quy trình 4 bước qua đường an toàn: Dừng lại - Quan sát trái phải - Giơ tay cao xin đường - Bước đi cẩn trọng.",
      teacherActivityPart1: "Chiếu video ngắn về vạch qua đường màu trắng. Hỏi: 'Vạch kẻ sọc trắng này để làm gì?'.",
      studentActivityPart1: "Trả lời: 'Dành cho người đi bộ qua đường ạ!'. Ghi nhớ phải đi đúng làn vạch này.",
      teacherActivityPart2: "Trải thảm vạch qua đường giữa lớp học, hướng dẫn HS giơ cao tay xin đường khi qua đường cùng cô.",
      studentActivityPart2: "Xếp hàng đôi, dừng lại quan sát hai phía, giơ tay cao và cùng bước qua đường an toàn."
    },
    {
      lessonNumber: 6,
      lessonTitle: "Làm quen với một số biển báo hiệu giao thông đường bộ cơ bản",
      weeks: [11, 12],
      targetGrades: [1],
      competencies: "Nhận biết hình dạng, màu sắc và ý nghĩa của các biển báo đơn giản: Biển cấm đi bộ, Biển người đi bộ sang đường, Biển trường học.",
      contentPart1: "Tìm hiểu hình tròn viền đỏ (biển cấm) và hình vuông nền xanh (biển chỉ dẫn).",
      contentPart2: "Trò chơi ghép biển báo tương ứng với ý nghĩa hành vi tham gia giao thông.",
      teacherActivityPart1: "Giới thiệu 3 tấm biển báo thực tế: Biển cấm người đi bộ (tròn đỏ), Biển người đi bộ sang ngang (vuông xanh), Biển trẻ em (tam giác vàng).",
      studentActivityPart1: "Quan sát màu sắc và hình vẽ trên biển, đọc to tên từng biển báo hiệu.",
      teacherActivityPart2: "Giao nhiệm vụ cho 4 tổ thi đua dán đúng biển báo vào tình huống giao thông thích hợp trên bảng nhóm.",
      studentActivityPart2: "Làm việc theo tổ, bàn bạc nhanh và dán chính xác các biển báo vào bảng thi đua."
    },
    {
      lessonNumber: 7,
      lessonTitle: "Đi bộ an toàn khi trời mưa và đường trơn trượt",
      weeks: [13, 14],
      targetGrades: [1],
      competencies: "Biết cách mặc áo mưa gọn gàng, cầm ô đúng tầm mắt; đi chậm cẩn thận tránh vũng nước sâu và sấm sét.",
      contentPart1: "Phân tích các nguy cơ khi tham gia giao thông trời mưa: đường trơn, tầm nhìn hạn chế, ngập nước.",
      contentPart2: "Thực hành cách mặc áo mưa cánh dơi/áo mưa bộ an toàn, không để tà áo vướng vào bánh xe.",
      teacherActivityPart1: "Chiếu hình ảnh đường mưa trơn ướt. Nhắc nhở HS không đi gần các miệng cống ngập, không che ô che khuất tầm mắt.",
      studentActivityPart1: "Lắng nghe, chia sẻ trải nghiệm từng gặp khi đi học trời mưa (bị ướt, trượt ngã, xe tạt nước).",
      teacherActivityPart2: "Hướng dẫn cách gấp gọn hai tà áo mưa và ngồi ngay ngắn lên tà áo để không bị cuốn vào nan hoa xe máy.",
      studentActivityPart2: "Thực hành thao tác gấp tà áo mưa gọn gàng trên ghế ngồi lớp học."
    },
    {
      lessonNumber: 8,
      lessonTitle: "Không chơi đùa dưới lòng đường và vỉa hè nguy hiểm",
      weeks: [15, 16],
      targetGrades: [1],
      competencies: "Nhận thức rõ lòng đường là nơi dành riêng cho xe cộ; chọn sân trường, công viên, sân nhà an toàn để vui chơi.",
      contentPart1: "Nhận diện những hành vi nguy hiểm: đá bóng, trượt pa-tin, đuổi bắt dưới lòng đường.",
      contentPart2: "Vẽ tranh hoặc chọn tranh cổ động: 'Khu vực vui chơi an toàn cho chúng em'.",
      teacherActivityPart1: "Kể câu chuyện về bạn Miu mải đuổi theo quả bóng lăn ra đường suýt bị xe va quẹt. Hỏi bài học rút ra.",
      studentActivityPart1: "Lắng nghe câu chuyện, xúc động phát biểu: 'Tuyệt đối không được đá bóng, chạy đuổi nhau dưới lòng đường!'.",
      teacherActivityPart2: "Phát phiếu bài tập: Tô màu vào những khu vực vui chơi an toàn (sân chơi, công viên, nhà văn hóa).",
      studentActivityPart2: "Tô màu cẩn thận và chia sẻ với bạn cùng bàn về nơi mình thường vui chơi an toàn vào ngày nghỉ."
    },
    {
      lessonNumber: 9,
      lessonTitle: "Tập đi xe đạp an toàn trong sân nhà và ngõ xóm vắng xe",
      weeks: [17, 18],
      targetGrades: [1],
      competencies: "Biết chọn xe đạp có kích cỡ phù hợp, kiểm tra phanh, lốp xe; chỉ tập đi ở khu vực kín không có ô tô qua lại.",
      contentPart1: "Tìm hiểu các bộ phận quan trọng của chiếc xe đạp trẻ em: tay phanh, chuông, bàn đạp, bánh phụ.",
      contentPart2: "Quy tắc kiểm tra xe và các tình huống cần bấm chuông cảnh báo người xung quanh.",
      teacherActivityPart1: "Chiếu ảnh chiếc xe đạp trẻ em. Hướng dẫn cách thử chân chạm đất để chọn xe vừa tầm vóc.",
      studentActivityPart1: "Quan sát, kể tên chiếc xe đạp mini ở nhà của mình, nhận biết tay phanh trái và tay phanh phải.",
      teacherActivityPart2: "Hướng dẫn quy tắc: 'Không đi xe đạp ra đường quốc lộ hay đường đông đúc khi chưa đủ tuổi và chưa thành thạo'.",
      studentActivityPart2: "Ghi nhớ lời cô dặn, cam kết chỉ tập đi xe trong sân nhà có sự giám sát của bố mẹ."
    },
    {
      lessonNumber: 10,
      lessonTitle: "Nhận biết nguy cơ tai nạn giao thông và cách phòng tránh",
      weeks: [19, 20],
      targetGrades: [1],
      competencies: "Tổng kết 10 kỹ năng an toàn giao thông lớp 1; tự giác nhắc nhở bố mẹ chấp hành luật giao thông.",
      contentPart1: "Ôn tập hệ thống qua các tình huống trắc nghiệm hình ảnh vui nhộn về giao thông.",
      contentPart2: "Hát bài hát 'Chúng em với an toàn giao thông' và cam kết thực hiện cổng trường an toàn.",
      teacherActivityPart1: "Tổ chức trò chơi 'Rung chuông vàng nhí' với 5 câu hỏi tình huống giao thông thực tế.",
      studentActivityPart1: "Cả lớp hào hứng giơ thẻ mặt cười (đúng) hoặc mặt mếu (sai) cho từng tình huống.",
      teacherActivityPart2: "Tuyên dương các học sinh gương mẫu. Phát động phong trào 'Em là tuyên truyền viên nhí về ATGT trong gia đình'.",
      studentActivityPart2: "Đồng thanh hát bài ca giao thông, hứa luôn chấp hành đúng luật khi đến trường mỗi ngày."
    }
  ],

  // ==========================================
  // KHỐI 2 (10 BÀI)
  // ==========================================
  2: [
    {
      lessonNumber: 1,
      lessonTitle: "Đường em tới trường - Lựa chọn tuyến đường đi an toàn",
      weeks: [1, 2],
      targetGrades: [2],
      competencies: "Biết vẽ sơ đồ đơn giản tuyến đường từ nhà đến trường; nhận biết điểm nguy hiểm và chọn lộ trình an toàn nhất.",
      contentPart1: "Khảo sát các đặc điểm trên đường đi học: đoạn cua gấp, ngã tư không có đèn tín hiệu, khu vực thi công.",
      contentPart2: "Vẽ sơ đồ lộ trình đi học an toàn và chia sẻ với các bạn cùng tuyến đường.",
      teacherActivityPart1: "Gợi mở: 'Từ nhà đến trường em phải đi qua những đoạn đường nào? Có chỗ nào đông xe nguy hiểm không?'.",
      studentActivityPart1: "Kể tên các cung đường mình đi qua hằng ngày (qua cầu, qua ngã tư chợ, đường liên ấp...).",
      teacherActivityPart2: "Hướng dẫn vẽ phác thảo sơ đồ tuyến đường: đánh dấu đỏ vào điểm nguy hiểm và dấu xanh vào nơi an toàn.",
      studentActivityPart2: "Vẽ vào phiếu học tập lộ trình đi học của mình, tự hào chỉ cho bạn cùng bàn xem."
    },
    {
      lessonNumber: 2,
      lessonTitle: "Hiệu lệnh của người điều khiển giao thông",
      weeks: [3, 4],
      targetGrades: [2],
      competencies: "Nhận biết tư thế và hiệu lệnh tay của chú Cảnh sát giao thông: Giơ tay thẳng đứng, dang ngang hai tay, giơ tay phía trước.",
      contentPart1: "Tìm hiểu ý nghĩa các động tác chỉ huy giao thông của Cảnh sát giao thông trên đường.",
      contentPart2: "Thực hành phản xạ dừng lại, rẽ, đi tiếp theo hiệu lệnh gậy chỉ huy của người điều khiển giao thông.",
      teacherActivityPart1: "Mô phỏng 3 động tác chỉ huy chuẩn: 1. Tay giơ thẳng đứng (tất cả dừng lại); 2. Hai tay dang ngang (trước sau dừng, hai bên đi).",
      studentActivityPart1: "Quan sát và bắt chước động tác chỉ huy của cô giáo, đồng thanh nêu quy tắc chấp hành.",
      teacherActivityPart2: "Tổ chức trò chơi 'Em tập làm Cảnh sát giao thông nhí' điều tiết các bạn di chuyển trong lớp học.",
      studentActivityPart2: "Từng bạn lên điều khiển, các bạn phía dưới chấp hành nghiêm túc theo hiệu lệnh."
    },
    {
      lessonNumber: 3,
      lessonTitle: "Biển báo hiệu đường bộ thường gặp quanh em",
      weeks: [5, 6],
      targetGrades: [2],
      competencies: "Phân biệt 3 nhóm biển báo chính: Biển báo cấm (viền đỏ), Biển nguy hiểm (tam giác vàng), Biển hiệu lệnh/chỉ dẫn (xanh lam).",
      contentPart1: "Phân loại các biển báo theo hình dạng và màu sắc; ý nghĩa cảnh báo của từng loại.",
      contentPart2: "Giải đố tình huống thực tế khi gặp biển báo trên đường đi học hằng ngày.",
      teacherActivityPart1: "Chiếu bảng tổng hợp 3 nhóm biển báo. Hướng dẫn mẹo nhớ: 'Đỏ cấm, Vàng nguy, Xanh đi theo lệnh'.",
      studentActivityPart1: "Đọc thuộc lòng câu khẩu quyết ghi nhớ: 'Đỏ cấm, Vàng nguy, Xanh đi theo lệnh'.",
      teacherActivityPart2: "Đưa ra các tình huống đố vui: 'Gặp biển này bạn có được rẽ trái không?'.",
      studentActivityPart2: "Suy nghĩ độc lập, giơ thẻ trả lời dõng dạc và giải thích lý do."
    },
    {
      lessonNumber: 4,
      lessonTitle: "Đi qua đường an toàn ở nơi không có đèn tín hiệu và vạch kẻ đường",
      weeks: [7, 8],
      targetGrades: [2],
      competencies: "Nắm vững kỹ năng qua đường an toàn ở vùng nông thôn, đường làng không có vạch kẻ đường hay đèn tín hiệu.",
      contentPart1: "Phân tích mức độ nguy hiểm khi qua đường ở nơi khuất tầm nhìn, không có vạch chỉ dẫn.",
      contentPart2: "Quy tắc 5 bước qua đường tự chủ: Dừng lại lề đường - Lắng nghe tiếng còi xe - Quan sát trái phải - Chờ khoảng cách an toàn - Bước thẳng dứt khoát.",
      teacherActivityPart1: "Chiếu video thực tế đoạn đường nông thôn xe máy chạy nhanh. Nêu tình huống qua đường an toàn.",
      studentActivityPart1: "Theo dõi chăm chú, phát hiện những nguy cơ xe lao nhanh bất ngờ từ khúc quanh.",
      teacherActivityPart2: "Luyện tập thực hành từng bước: quay đầu sang trái, quay đầu sang phải, lắng nghe âm thanh động cơ trước khi bước.",
      studentActivityPart2: "Thực hành phối hợp mắt nhìn và tai nghe cẩn thận, bước đi tự tin không chạy vội vã."
    },
    {
      lessonNumber: 5,
      lessonTitle: "Ngồi an toàn trên các phương tiện giao thông công cộng (xe buýt, xe đưa đón học sinh)",
      weeks: [9, 10],
      targetGrades: [2],
      competencies: "Thực hiện văn hóa đi xe buýt: xếp hàng lên xuống, nhường ghế người già em nhỏ, bám chặt tay vịn, không thò đầu tay ra cửa sổ.",
      contentPart1: "Nội quy an toàn khi chờ xe, bước lên xe và trong suốt hành trình xe chạy.",
      contentPart2: "Sắm vai ứng xử văn minh và xử lý khi xe phanh gấp hoặc đông khách.",
      teacherActivityPart1: "Chiếu hình ảnh xe buýt đưa đón học sinh. Nêu 4 điều cấm kị trên xe buýt.",
      studentActivityPart1: "Nhắc lại: 'Không thò đầu tay ra cửa sổ', 'Không đùa nghịch trên lối đi', 'Luôn bám chắc tay vịn'.",
      teacherActivityPart2: "Bố trí hàng ghế lớp học thành khoang xe buýt, hướng dẫn thực hành xếp hàng tuần tự lên xe.",
      studentActivityPart2: "Thực hành xếp hàng trật tự, nhường bạn lên trước, ngồi ngay ngắn bám chắc tay vịn."
    },
    {
      lessonNumber: 6,
      lessonTitle: "Đội mũ bảo hiểm đúng quy chuẩn và bảo quản mũ bảo hiểm",
      weeks: [11, 12],
      targetGrades: [2],
      competencies: "Biết cách nhận biết tem chuẩn CR trên mũ bảo hiểm; biết vệ sinh và bảo quản mũ không để rơi nứt vỡ.",
      contentPart1: "Tìm hiểu tác hại của việc đội mũ bảo hiểm rởm (mũ thời trang không có xốp giảm chấn).",
      contentPart2: "Kiểm tra độ an toàn của chiếc mũ đang dùng ở nhà và cách bảo quản mũ bền đẹp.",
      teacherActivityPart1: "Thí nghiệm trực quan: Thả rơi 1 quả trứng được bọc xốp và 1 quả không bọc xốp. Liên hệ với hộp sọ con người.",
      studentActivityPart1: "Kinh ngạc chứng kiến quả trứng bọc xốp nguyên vẹn, hiểu ngay tầm quan trọng của lớp xốp chịu lực.",
      teacherActivityPart2: "Hướng dẫn tìm tem kiểm định chất lượng CR dán sau gáy mũ bảo hiểm chính hãng.",
      studentActivityPart2: "Quan sát tem mẫu, ghi nhớ để về kiểm tra chiếc mũ bảo hiểm bố mẹ mua cho mình."
    },
    {
      lessonNumber: 7,
      lessonTitle: "Phòng tránh tai nạn giao thông nơi ngã ba, ngã tư đường",
      weeks: [13, 14],
      targetGrades: [2],
      competencies: "Nhận biết nút giao thông ngã ba, ngã tư có mật độ phương tiện phức tạp; biết đi theo hướng đi an toàn, không cắt đầu xe.",
      contentPart1: "Phân tích các dòng phương tiện di chuyển giao cắt nhau tại ngã ba, ngã tư.",
      contentPart2: "Xử lý tình huống chuyển hướng và rẽ an toàn khi cùng người lớn đi qua ngã tư.",
      teacherActivityPart1: "Dùng sơ đồ sa bàn ngã tư đường phố, chỉ ra các hướng xe rẽ trái, rẽ phải dễ gây va chạm.",
      studentActivityPart1: "Quan sát luồng xe di chuyển, nhận ra chỗ nguy hiểm nhất là khi xe ô tô lớn ôm cua rẽ phải.",
      teacherActivityPart2: "Nhấn mạnh quy tắc: 'Không bao giờ đứng sát mũi xe hoặc cạnh sườn xe ô tô lớn đang rẽ'.",
      studentActivityPart2: "Nhắc lại lời cô dặn và ghi nhớ khoảng cách đứng lùi xa vỉa hè ít nhất 1 mét."
    },
    {
      lessonNumber: 8,
      lessonTitle: "Văn hóa ứng xử văn minh và lịch sự khi tham gia giao thông",
      weeks: [15, 16],
      targetGrades: [2],
      competencies: "Thể hiện nét đẹp văn hóa: nói lời cảm ơn khi được nhường đường, xin lỗi khi va chạm nhẹ, không bấm còi inh ỏi.",
      contentPart1: "Thảo luận các hành vi ứng xử đẹp và chưa đẹp khi đi đường.",
      contentPart2: "Tiểu phẩm sắm vai: Xử lý tình huống va quẹt nhẹ trên đường tới trường.",
      teacherActivityPart1: "Chiếu đoạn clip ngắn về hai người va chạm xe trên đường: một cặp cãi vã, một cặp bắt tay xin lỗi nhau. Hỏi HS chọn cách nào.",
      studentActivityPart1: "Đồng lòng chọn cách xin lỗi hòa nhã, giúp đỡ bạn dựng xe dậy và hỏi thăm ân cần.",
      teacherActivityPart2: "Mời 2 bạn lên đóng tình huống va quẹt nhẹ cặp sách khi đi vào cổng trường.",
      studentActivityPart2: "Sắm vai tự nhiên: 'Tớ xin lỗi bạn, bạn có sao không?', bắt tay mỉm cười thân thiện."
    },
    {
      lessonNumber: 9,
      lessonTitle: "Kỹ năng sang đường khi có vật cản che khuất tầm nhìn",
      weeks: [17, 18],
      targetGrades: [2],
      competencies: "Biết nguy cơ tiềm ẩn phía sau xe buýt đỗ, đống vật liệu xây dựng, hàng cây rậm rạp; không bước vội khi chưa nhìn thấy rõ mặt đường.",
      contentPart1: "Tìm hiểu khái niệm 'vật cản che khuất' và nguy cơ xe lao tới từ điểm mù.",
      contentPart2: "Thực hành quy tắc: Dừng lại bên mép vật cản, nhòm nhẹ quan sát trước khi bước hẳn ra ngoài.",
      teacherActivityPart1: "Minh họa bằng hộp carton to làm xe tải đỗ bên đường. Hỏi: 'Nếu em chạy vụt qua trước đầu xe tải thì điều gì có thể xảy ra?'.",
      studentActivityPart1: "Trả lời: 'Xe máy đi tới sẽ không nhìn thấy em và gây tai nạn ạ!'.",
      teacherActivityPart2: "Rèn luyện thao tác: Đi chậm tới mép xe tải, nghiêng đầu quan sát kỹ hai bên đường, khi thật vắng xe mới bước tiếp.",
      studentActivityPart2: "Từng bạn thực hành đi từ sau chướng ngại vật ra đường một cách thận trọng, chuẩn xác."
    },
    {
      lessonNumber: 10,
      lessonTitle: "Em là tuyên truyền viên An toàn giao thông nhí",
      weeks: [19, 20],
      targetGrades: [2],
      competencies: "Biết chia sẻ kiến thức giao thông an toàn cho bạn bè và người thân; cam kết thực hiện 'Cổng trường an toàn'.",
      contentPart1: "Tổng kết chặng đường 10 bài học ATGT lớp 2 qua sơ đồ tư duy hình cây xanh.",
      contentPart2: "Viết thiệp gửi bố mẹ lời nhắn nhủ: 'Vì con yêu, bố mẹ hãy lái xe an toàn và đội mũ bảo hiểm cho con'.",
      teacherActivityPart1: "Cùng cả lớp điểm lại 10 bài học ATGT đã trải qua trong năm học.",
      studentActivityPart1: "Phát biểu sôi nổi những bài học mình tâm đắc nhất và những việc mình đã làm tốt.",
      teacherActivityPart2: "Phát tấm thiệp hình trái tim nhỏ để HS viết lời chúc và thông điệp gửi bố mẹ khi đưa đón con.",
      studentActivityPart2: "Nắn nót viết: 'Bố mẹ ơi, hãy luôn đội mũ bảo hiểm cho cả nhà mình nhé!' và trang trí đẹp mắt."
    }
  ],

  // ==========================================
  // KHỐI 3 (10 BÀI)
  // ==========================================
  3: [
    {
      lessonNumber: 1,
      lessonTitle: "Cổng trường an toàn giao thông và văn hóa đưa đón học sinh",
      weeks: [1, 2],
      targetGrades: [3],
      competencies: "Hiểu mô hình Cổng trường ATGT; hướng dẫn phụ huynh dừng đỗ xe đúng vạch quy định, không gây ùn tắc.",
      contentPart1: "Thực trạng giao thông trước cổng trường giờ cao điểm và quy định khu vực đưa đón học sinh.",
      contentPart2: "Tham gia đội 'Măng non xung kích' tuyên truyền nề nếp tại cổng trường.",
      teacherActivityPart1: "Chiếu ảnh cổng trường lúc 16h30: cảnh xe máy chen chúc và cảnh phụ huynh xếp hàng ngay ngắn. So sánh hai bức ảnh.",
      studentActivityPart1: "Nhận xét bức ảnh xếp xe ngay ngắn theo hàng làm cổng trường thông thoáng, an toàn, văn minh.",
      teacherActivityPart2: "Phân công nhiệm vụ các tổ tuyên truyền nề nếp đưa đón cho phụ huynh tổ mình.",
      studentActivityPart2: "Cam kết nhắc bố mẹ đỗ xe sát mép đường bên ngoài cổng, không quay đầu xe giữa lòng đường."
    },
    {
      lessonNumber: 2,
      lessonTitle: "Kỹ năng điều khiển xe đạp an toàn cơ bản",
      weeks: [3, 4],
      targetGrades: [3],
      competencies: "Biết kiểm tra kỹ thuật xe đạp (chuông, phanh, lốp, xích); nắm vững kỹ thuật phanh xe và đi đúng phần đường quy định.",
      contentPart1: "Cấu tạo và nguyên lý hoạt động của hệ thống phanh xe đạp (phanh trước, phanh sau).",
      contentPart2: "Thực hành kỹ thuật dừng xe an toàn: hạ bàn đạp, phanh nhẹ từ từ, chân tiếp đất vững chãi.",
      teacherActivityPart1: "Giải thích vì sao khi phanh gấp phanh trước xe dễ bị lộn nhào về phía trước. Cần bóp phanh sau trước.",
      studentActivityPart1: "Ghi nhớ quy tắc bóp phanh: Nhấp phanh nhẹ nhàng, kết hợp cả hai phanh nhưng ưu tiên phanh sau.",
      teacherActivityPart2: "Yêu cầu HS nêu các hành vi bị cấm khi đi xe đạp (buông hai tay, lạng lách, chở quá người, che ô).",
      studentActivityPart2: "Nối tiếp nêu to các điều cấm để cả lớp cùng khắc sâu."
    },
    {
      lessonNumber: 3,
      lessonTitle: "Hệ thống biển báo hiệu giao thông: Biển báo cấm và biển báo nguy hiểm",
      weeks: [5, 6],
      targetGrades: [3],
      competencies: "Phân tích chi tiết các biển cấm xe đạp, cấm rẽ, biển đường trơn trượt, biển công trường đang thi công.",
      contentPart1: "Nghiên cứu hình vẽ biểu trưng bên trong viền tròn đỏ và tam giác vàng viền đỏ.",
      contentPart2: "Thiết kế thẻ bài học biển báo thông minh và thực hành xử lý tình huống giao thông.",
      teacherActivityPart1: "Giới thiệu 5 biển báo quan trọng: Cấm xe đạp, Cấm đi ngược chiều, Giao nhau với đường ưu tiên, Đoạn đường hay xảy ra tai nạn.",
      studentActivityPart1: "Quan sát, ghi chép tên và ý nghĩa pháp lý của từng biển báo vào vở tay.",
      teacherActivityPart2: "Tổ chức trò chơi 'Nhà giao thông thông thái': Đoán hành vi được phép và không được phép theo biển báo.",
      studentActivityPart2: "Tham gia thảo luận nhóm, giải thích chính xác ý nghĩa các biển báo phức tạp."
    },
    {
      lessonNumber: 4,
      lessonTitle: "Đi bộ và qua đường an toàn tại đoạn đường có đường sắt cắt ngang",
      weeks: [7, 8],
      targetGrades: [3],
      competencies: "Nắm vững quy tắc an toàn giao thông đường sắt: Dừng lại trước rào chắn ít nhất 5 mét, không leo trèo qua rào chắn, lắng nghe tiếng chuông báo.",
      contentPart1: "Tìm hiểu về đặc điểm đoàn tàu hỏa (tải trọng cực lớn, phanh hàng trăm mét mới dừng được) và các biển báo đường sắt.",
      contentPart2: "Quy tắc ứng xử khi đèn đỏ bật sáng và còi báo tàu hỏa vang lên.",
      teacherActivityPart1: "Chiếu video đoàn tàu hỏa chạy qua đường ngang. Nhấn mạnh: 'Tàu hỏa không thể phanh gấp ngay lập tức như xe máy'.",
      studentActivityPart1: "Cảm nhận được sức mạnh và quán tính khổng lồ của tàu hỏa, ý thức được sự nguy hiểm chết người nếu vượt rào chắn.",
      teacherActivityPart2: "Hướng dẫn các bước xử lý khi đi qua đoạn đường sắt không có rào chắn (Dừng lại cách ray 5m, nhìn hai phía, lắng nghe tiếng còi).",
      studentActivityPart2: "Luyện tập thói quen: 'Dừng lại - Quan sát - Lắng nghe' trước mọi đường ngang dân sinh."
    },
    {
      lessonNumber: 5,
      lessonTitle: "An toàn khi tham gia giao thông đường thủy (đi đò, phà, thuyền ghe)",
      weeks: [9, 10],
      targetGrades: [3],
      competencies: "Biết mặc áo phao cứu sinh đúng quy cách; giữ thăng bằng khi lên xuống bến đò; không đùa giỡn nghiêng thuyền.",
      contentPart1: "Đặc thù sông nước miền Tây Nam Bộ và quy tắc bắt buộc mặc áo phao khi qua đò ngang.",
      contentPart2: "Thực hành mặc áo phao và kỹ năng giữ thăng bằng khi ngồi trên ghe xuồng.",
      teacherActivityPart1: "Đưa ra 1 chiếc áo phao cứu sinh tiêu chuẩn. Hướng dẫn cài chốt khóa ngực, khóa bụng và dây luồn đùi.",
      studentActivityPart1: "Thực hành mặc thử áo phao, cài đúng 3 chốt khóa an toàn và điều chỉnh dây đai vừa khít cơ thể.",
      teacherActivityPart2: "Cảnh báo hậu quả việc không mặc áo phao hoặc tụ tập về một mạn ghe làm lật thuyền.",
      studentActivityPart2: "Ghi nhớ sâu sắc: 'Qua đò bắt buộc mặc áo phao hoặc cầm dụng cụ nổi cứu sinh'."
    },
    {
      lessonNumber: 6,
      lessonTitle: "Xử lý tình huống khi gặp chướng ngại vật bất ngờ trên đường",
      weeks: [11, 12],
      targetGrades: [3],
      competencies: "Phát hiện chướng ngại vật từ xa (hố ga mất nắp, cành cây gãy, đất cát trơn trượt); biết giảm tốc độ và tránh an toàn.",
      contentPart1: "Nhận biết các loại chướng ngại vật phổ biến và cách quan sát tầm nhìn xa 20-30 mét.",
      contentPart2: "Kỹ năng giảm tốc, bấm chuông báo hiệu và quan sát gương/ngoái đầu trước khi lách tránh chướng ngại vật.",
      teacherActivityPart1: "Chiếu tình huống xe máy đang đi thì gặp đống cát sỏi đổ giữa đường. Đặt câu hỏi xử lý.",
      studentActivityPart1: "Phân tích: 'Nếu phanh gấp trên cát sỏi sẽ bị trượt ngã, phải giảm tốc từ xa và đi vòng qua nhẹ nhàng'.",
      teacherActivityPart2: "Hướng dẫn thao tác quay đầu nhìn phía sau trước khi chuyển hướng tránh vật cản.",
      studentActivityPart2: "Thực hành kết hợp: Nhìn phía trước phát hiện vật cản -> Giảm tốc độ -> Liếc nhìn phía sau -> Chuyển hướng an toàn."
    },
    {
      lessonNumber: 7,
      lessonTitle: "Dự đoán và phòng tránh các điểm mù quanh xe ô tô",
      weeks: [13, 14],
      targetGrades: [3],
      competencies: "Hiểu khái niệm điểm mù của tài xế ô tô: ngay trước đầu xe, hai bên hông và phía sau đuôi xe; giữ khoảng cách an toàn.",
      contentPart1: "Trực quan hóa vùng điểm mù của xe ô tô con và xe tải nhỏ.",
      contentPart2: "Quy tắc vàng: 'Nếu em không nhìn thấy mặt bác tài xế qua gương, nghĩa là bác tài xế không nhìn thấy em'.",
      teacherActivityPart1: "Chiếu hình ảnh 4 vùng điểm mù màu đỏ quanh chiếc ô tô. Giải thích tại sao tài xế không thể thấy người đứng ở đó.",
      studentActivityPart1: "Ghi nhớ quy tắc vàng: 'Không nhìn thấy tài xế qua gương chiếu hậu nghĩa là mình đang ở điểm mù nguy hiểm'.",
      teacherActivityPart2: "Hướng dẫn vị trí đứng an toàn khi đợi xe buýt hoặc khi dừng đèn đỏ cùng xe ô tô.",
      studentActivityPart2: "Vẽ sơ đồ vùng điểm mù vào vở, đánh dấu tích xanh vào vị trí đứng an toàn cách xa thân xe ít nhất 2 mét."
    },
    {
      lessonNumber: 8,
      lessonTitle: "Giữ khoảng cách an toàn khi tham gia giao thông",
      weeks: [15, 16],
      targetGrades: [3],
      competencies: "Biết duy trì cự ly an toàn với xe đi phía trước; không bám đuôi xe tải, xe buýt để tránh va chạm khi xe trước phanh đột ngột.",
      contentPart1: "Quy tắc 2 giây giữ khoảng cách trên đường phố và đường liên thôn.",
      contentPart2: "Thực hành tính toán cự ly phanh an toàn đối với xe đạp và xe máy.",
      teacherActivityPart1: "Minh họa khoảng cách an toàn: Nếu xe trước dừng bất ngờ, xe sau cần ít nhất bao nhiêu mét để không tông vào đuôi?",
      studentActivityPart1: "Thảo luận nhóm, nhận ra việc bám sát đuôi xe khác là vô cùng liều lĩnh và nguy hiểm.",
      teacherActivityPart2: "Hướng dẫn quy tắc đếm '1-0-0-1, 1-0-0-2' để giữ khoảng cách 2 giây an toàn với xe đi trước.",
      studentActivityPart2: "Thực hành đếm nhịp cự ly an toàn trong các tình huống mô phỏng."
    },
    {
      lessonNumber: 9,
      lessonTitle: "Văn hóa nhường đường và tôn trọng người đi bộ",
      weeks: [17, 18],
      targetGrades: [3],
      competencies: "Hình thành ý thức nhường đường cho người già, trẻ nhỏ, người khuyết tật; nhường đường cho xe ưu tiên (cứu thương, cứu hỏa).",
      contentPart1: "Ý nghĩa của việc nhường đường trong một xã hội văn minh và các loại xe ưu tiên theo Luật Giao thông.",
      contentPart2: "Sắm vai xử lý khi nghe tiếng còi hú của xe cứu hỏa, cứu thương đang làm nhiệm vụ.",
      teacherActivityPart1: "Phát âm thanh còi xe cứu thương và xe cứu hỏa. Hỏi người tham gia giao thông phải làm gì ngay lúc đó.",
      studentActivityPart1: "Đáp to: 'Nhanh chóng tấp sát vào lề đường bên phải và dừng lại nhường đường cho xe ưu tiên vượt qua!'.",
      teacherActivityPart2: "Nhấn mạnh tinh thần nhường đường cho người đi bộ tại các vạch sang đường.",
      studentActivityPart2: "Ghi nhớ và thể hiện sự tôn trọng, văn minh lịch sự trên mọi tuyến đường."
    },
    {
      lessonNumber: 10,
      lessonTitle: "Xây dựng thói quen tham gia giao thông an toàn và văn minh",
      weeks: [19, 20],
      targetGrades: [3],
      competencies: "Hệ thống hóa toàn bộ các kỹ năng ATGT lớp 3; lan tỏa thói quen sống đẹp vì một môi trường giao thông không tai nạn.",
      contentPart1: "Tổng kết thi đua và đánh giá kết quả thực hiện văn hóa giao thông trong học kỳ.",
      contentPart2: "Tổ chức diễn đàn học đường: 'Tiếng nói thiếu nhi vì an toàn giao thông'.",
      teacherActivityPart1: "Khơi gợi các sáng kiến của học sinh nhằm giảm thiểu tai nạn giao thông quanh khu vực trường học.",
      studentActivityPart1: "Đại diện các tổ trình bày ý tưởng: biển báo vẽ tay, loa phát thanh măng non giờ tan trường.",
      teacherActivityPart2: "Tuyên dương và trao giấy chứng nhận 'Hiệp sĩ An toàn giao thông' cho các học sinh tiêu biểu.",
      studentActivityPart2: "Tự hào đón nhận danh hiệu và quyết tâm giữ vững nền nếp an toàn giao thông suốt năm học."
    }
  ],

  // ==========================================
  // KHỐI 4 (10 BÀI)
  // ==========================================
  4: [
    {
      lessonNumber: 1,
      lessonTitle: "Quy tắc an toàn khi đi xe đạp trên đường giao thông",
      weeks: [1, 2],
      targetGrades: [4],
      competencies: "Nắm vững Luật Giao thông đường bộ dành cho người đi xe đạp: đi đúng làn đường bên phải, không dàn hàng ngang từ 3 xe trở lên, không bám kéo đẩy xe khác.",
      contentPart1: "Phân tích các lỗi vi phạm phổ biến của học sinh khi đi xe đạp và mức độ rủi ro.",
      contentPart2: "Thực hành đi xe đạp thẳng hàng, giữ cự ly và chuyển số tốc độ an toàn.",
      teacherActivityPart1: "Chiếu ảnh nhóm học sinh dàn hàng 3, hàng 4 vừa đi vừa cười đùa. Yêu cầu chỉ ra các điểm vi phạm luật.",
      studentActivityPart1: "Chỉ rõ: 'Dàn hàng ngang gây cản trở xe ô tô phía sau, dễ va chạm vào nhau ngã ra lòng đường'.",
      teacherActivityPart2: "Khắc sâu quy định: Học sinh tiểu học chỉ đi một hàng một, luôn đi sát mép đường bên phải.",
      studentActivityPart2: "Đồng thanh cam kết: 'Đi một hàng một, tôn trọng làn đường'."
    },
    {
      lessonNumber: 2,
      lessonTitle: "Hệ thống biển chỉ dẫn và biển hiệu lệnh đường bộ",
      weeks: [3, 4],
      targetGrades: [4],
      competencies: "Phân biệt và giải thích đúng các biển hiệu lệnh (hình tròn xanh) và biển chỉ dẫn (hình vuông/chữ nhật xanh).",
      contentPart1: "Ý nghĩa của biển hiệu lệnh: bắt buộc phải thi hành (hướng đi phải theo, đường dành cho xe thô sơ).",
      contentPart2: "Ý nghĩa của biển chỉ dẫn: cung cấp thông tin hữu ích (bến xe buýt, trạm y tế, đường cụt).",
      teacherActivityPart1: "So sánh biển hiệu lệnh hình tròn xanh và biển chỉ dẫn hình chữ nhật xanh. Cách nhận diện nhanh chóng.",
      studentActivityPart1: "Phát biểu: 'Biển tròn xanh là lệnh bắt buộc phải làm theo; Biển vuông xanh là chỉ dẫn đường đi'.",
      teacherActivityPart2: "Đưa ra bài trắc nghiệm nhanh 10 câu hỏi tình huống biển báo giao thông.",
      studentActivityPart2: "Làm bài nghiêm túc, đạt điểm số cao và nắm chắc kiến thức thực tiễn."
    },
    {
      lessonNumber: 3,
      lessonTitle: "Kỹ năng chuyển hướng an toàn: rẽ trái, rẽ phải và quay đầu xe",
      weeks: [5, 6],
      targetGrades: [4],
      competencies: "Thực hiện thành thạo quy trình 4 bước chuyển hướng: Giảm tốc độ - Quan sát gương và ngoái đầu - Giơ tay xin đường - Chuyển hướng từ từ.",
      contentPart1: "Phân tích nguyên nhân các vụ tai nạn khi chuyển hướng đột ngột không xi-nhan hoặc không giơ tay xin đường.",
      contentPart2: "Thực hành tín hiệu xin đường bằng tay dành cho người đi xe đạp (giơ tay ngang xin rẽ).",
      teacherActivityPart1: "Hướng dẫn động tác giơ tay xin đường của người đi xe đạp: dang ngang tay trái khi muốn rẽ trái, dang ngang tay phải khi rẽ phải.",
      studentActivityPart1: "Luyện tập tư thế giơ tay xin đường dứt khoát trong khi vẫn giữ thăng bằng tay lái còn lại.",
      teacherActivityPart2: "Mô phỏng tình huống rẽ trái qua đường tại ngã ba: Cần dừng lại quan sát xe cộ cả hai chiều trước khi qua.",
      studentActivityPart2: "Thực hành đi bộ mô phỏng kỹ năng rẽ trái hai nhịp an toàn."
    },
    {
      lessonNumber: 4,
      lessonTitle: "Phòng tránh tai nạn nơi đường giao nhau và vòng xuyến",
      weeks: [7, 8],
      targetGrades: [4],
      competencies: "Nắm vững quy tắc nhường đường tại nơi giao nhau: Nhường xe bên phải (nếu không có vòng xuyến), nhường xe bên trái (nếu có vòng xuyến).",
      contentPart1: "Quy tắc nhường đường theo Luật Giao thông đường bộ tại các ngã giao nhau có và không có đảo tròn.",
      contentPart2: "Thực hành di chuyển trên mô hình sa bàn vòng xuyến giao thông phức tạp.",
      teacherActivityPart1: "Dùng sơ đồ mũi tên giải thích quy tắc ưu tiên tại vòng xuyến: 'Có vòng xuyến nhường bên trái; Không vòng xuyến nhường bên phải'.",
      studentActivityPart1: "Đọc to câu ghi nhớ và áp dụng ngay vào giải các thế sa bàn giao thông cô giáo đưa ra.",
      teacherActivityPart2: "Cảnh báo không được cắt chéo mặt xe tải đang chạy trong vòng xuyến.",
      studentActivityPart2: "Ghi nhớ giữ tốc độ chậm và luôn chú ý quan sát góc rẽ của các xe lớn."
    },
    {
      lessonNumber: 5,
      lessonTitle: "An toàn khi tham gia giao thông đường sắt và đường thủy nội địa",
      weeks: [9, 10],
      targetGrades: [4],
      competencies: "Ý thức bảo vệ hành lang an toàn giao thông đường sắt; không ném đất đá lên tàu; chấp hành nội quy khi qua phà, đò.",
      contentPart1: "Hậu quả khôn lường của việc ném đất đá lên tàu hỏa hoặc để chướng ngại vật lên đường ray.",
      contentPart2: "Quy tắc an toàn khi đi phà lớn: tắt máy xe, xuống xe máy và đứng ở khu vực dành cho hành khách.",
      teacherActivityPart1: "Chiếu tin tức về việc kính tàu hỏa bị vỡ do ném đá làm bị thương hành khách. Giáo dục ý thức pháp luật.",
      studentActivityPart1: "Phẫn nộ trước hành vi phá hoại nguy hiểm, tự hứa không bao giờ chơi đùa gần đường ray xe lửa.",
      teacherActivityPart2: "Hướng dẫn các bước an toàn khi qua phà: Xuống xe đi bộ vào cabin hành khách, mặc áo phao đầy đủ.",
      studentActivityPart2: "Ghi nhớ và nhắc nhở người thân tuân thủ quy tắc khi đi qua phà, bến đò."
    },
    {
      lessonNumber: 6,
      lessonTitle: "Hậu quả của tai nạn giao thông và ý thức chấp hành luật pháp",
      weeks: [11, 12],
      targetGrades: [4],
      competencies: "Nhận thức sâu sắc nỗi đau và thiệt hại của tai nạn giao thông đối với bản thân, gia đình và toàn xã hội; tôn trọng luật pháp.",
      contentPart1: "Tìm hiểu các con số thống kê và nguyên nhân chủ yếu dẫn đến tai nạn giao thông ở lứa tuổi học sinh.",
      contentPart2: "Viết cảm nghĩ về thông điệp: 'Phía sau tay lái là sự sống của gia đình'.",
      teacherActivityPart1: "Trình bày các con số thống kê thương tâm do không đội mũ bảo hiểm và phóng nhanh vượt ẩu.",
      studentActivityPart1: "Lắng nghe trong không khí trang nghiêm, thấu hiểu giá trị của sự an toàn tính mạng.",
      teacherActivityPart2: "Tổ chức cho học sinh viết thông điệp ngắn gửi người thân trong gia đình.",
      studentActivityPart2: "Viết bài chia sẻ cảm xúc chân thành, thể hiện mong muốn gia đình luôn bình an trên mọi nẻo đường."
    },
    {
      lessonNumber: 7,
      lessonTitle: "Kỹ năng ứng phó khi gặp tai nạn hoặc sự cố giao thông trên đường",
      weeks: [13, 14],
      targetGrades: [4],
      competencies: "Biết các số điện thoại khẩn cấp: 113 (Công an), 114 (Cứu hỏa), 115 (Cấp cứu); biết gọi người lớn hỗ trợ, bảo vệ hiện trường.",
      contentPart1: "Quy trình ứng phó 3 bước khi chứng kiến tai nạn: Giữ bình tĩnh - Hô hoán gọi người lớn cứu giúp - Gọi số khẩn cấp 115/113.",
      contentPart2: "Thực hành gọi điện báo tin cấp cứu: nêu rõ địa chỉ xảy ra tai nạn, tình trạng nạn nhân, số lượng người bị nạn.",
      teacherActivityPart1: "Đưa ra câu hỏi: 'Nếu thấy một vụ tai nạn trên đường vắng, em sẽ làm gì đầu tiên?'.",
      studentActivityPart1: "Trả lời: 'Chạy đến nơi có nhà dân gần nhất hô to nhờ người lớn giúp đỡ, gọi ngay số 115 cấp cứu'.",
      teacherActivityPart2: "Tổ chức cho học sinh thực hành đóng vai gọi điện thoại tới tổng đài 115 báo tin tai nạn.",
      studentActivityPart2: "Nói rõ ràng, bình tĩnh: địa chỉ chính xác, số nạn nhân, tình trạng chấn thương để xe cấp cứu tới kịp thời."
    },
    {
      lessonNumber: 8,
      lessonTitle: "Tác hại của việc lấn chiếm lòng lề đường và hành lang an toàn giao thông",
      weeks: [15, 16],
      targetGrades: [4],
      competencies: "Hiểu tác hại của việc họp chợ cóc, phơi lúa rơm rạ, dựng rạp đám tiệc lấn chiếm lòng lề đường; biết vận động gia đình không vi phạm.",
      contentPart1: "Thực trạng lấn chiếm vỉa hè lòng đường ở các vùng nông thôn và đô thị.",
      contentPart2: "Xây dựng tiểu phẩm tuyên truyền giải tỏa hành lang an toàn giao thông đường bộ.",
      teacherActivityPart1: "Chiếu ảnh phơi thóc lúa và rơm rạ trên mặt đường nhựa gây trượt ngã xe máy. Hỏi tác hại.",
      studentActivityPart1: "Nêu tác hại: 'Rơm quấn vào xích xe gây cháy nổ, trượt bánh xe ngã gãy xương'.",
      teacherActivityPart2: "Khuyến khích học sinh về nhà vận động người thân không phơi nông sản lấn chiếm mặt đường.",
      studentActivityPart2: "Cam kết là người đi đầu tuyên truyền cho bà con lối xóm giữ lòng đường phong quang sạch sẽ."
    },
    {
      lessonNumber: 9,
      lessonTitle: "Phòng ngừa nguy hiểm từ các phương tiện giao thông trọng tải lớn (xe tải, xe container)",
      weeks: [17, 18],
      targetGrades: [4],
      competencies: "Nhận biết lực hút gió nguy hiểm khi xe container chạy nhanh qua; nhận biết bán kính vòng quay đuôi xe tải khi rẽ.",
      contentPart1: "Hiện tượng chênh lệch áp suất không khí (lực hút gió) quanh các xe ô tô tải siêu trọng.",
      contentPart2: "Khoảng cách cách ly an toàn tối thiểu 5 mét đối với các dòng xe siêu trường siêu trọng.",
      teacherActivityPart1: "Thực hiện thí nghiệm đơn giản: Thổi mạnh vào giữa 2 tờ giấy, 2 tờ giấy hút chặt vào nhau. Giải thích hiện tượng xe tải hút người đi xe đạp.",
      studentActivityPart1: "Mắt thấy tai nghe thí nghiệm khoa học, hiểu vì sao không được đi sát cạnh các xe tải lớn khi gió thổi mạnh.",
      teacherActivityPart2: "Nhấn mạnh: Khi thấy xe container xi-nhan rẽ, phải dừng lại từ xa nhường đường, tuyệt đối không chen lên mép trong cua rẽ.",
      studentActivityPart2: "Ghi nhớ nguyên tắc: 'Tránh xa xe tải lớn, dừng lại nhường đường từ xa'."
    },
    {
      lessonNumber: 10,
      lessonTitle: "Tuyên truyền an toàn giao thông trong gia đình và khu dân cư",
      weeks: [19, 20],
      targetGrades: [4],
      competencies: "Tự tin thuyết trình một chủ đề giao thông an toàn; biết thiết kế poster/áp phích cổ động giao thông.",
      contentPart1: "Phương pháp tuyên truyền thuyết phục người lớn: nhắc bố mẹ không uống rượu bia khi lái xe, không dùng điện thoại khi lái xe.",
      contentPart2: "Triển lãm tranh cổ động và ký cam kết 'Gia đình an toàn giao thông'.",
      teacherActivityPart1: "Phát động cuộc thi thiết kế khẩu hiệu và vẽ tranh tuyên truyền an toàn giao thông.",
      studentActivityPart1: "Tích cực vẽ tranh, viết các khẩu hiệu ý nghĩa: 'Đã uống rượu bia - Không lái xe', 'Đi đúng làn - Về trọn vẹn'.",
      teacherActivityPart2: "Chấm giải và trưng bày các tác phẩm xuất sắc tại bảng tin trường học.",
      studentActivityPart2: "Tự hào thuyết minh về tác phẩm của nhóm mình trước thầy cô và bạn bè."
    }
  ],

  // ==========================================
  // KHỐI 5 (10 BÀI) - CHUẨN ĐÚNG THEO PDF TẢI LÊN CỦA USER
  // ==========================================
  5: [
    {
      lessonNumber: 1,
      lessonTitle: "Ý thức chấp hành Luật Giao thông đường bộ và văn hóa giao thông",
      weeks: [1, 2],
      targetGrades: [5],
      competencies: "Nắm vững trách nhiệm của học sinh khối 5 - lớp lớn nhất trường tiểu học; làm gương chấp hành luật lệ giao thông cho các em lớp dưới.",
      contentPart1: "Trách nhiệm và nghĩa vụ của người tham gia giao thông; các hành vi văn hóa khi đi đường.",
      contentPart2: "Xây dựng nề nếp xếp hàng đón con của phụ huynh và nề nếp học sinh tan trường.",
      teacherActivityPart1: "Phát động phong trào 'Học sinh lớp 5 gương mẫu chấp hành An toàn giao thông'. Nêu rõ trách nhiệm của anh chị lớn.",
      studentActivityPart1: "Thảo luận sôi nổi, tự hào nhận trách nhiệm làm gương mẫu cho các em học sinh lớp 1, 2, 3 noi theo.",
      teacherActivityPart2: "Thống nhất các tiêu chí thi đua chi đội về an toàn giao thông trong tuần.",
      studentActivityPart2: "Ký cam kết thi đua 100% đội viên lớp 5 chấp hành nghiêm túc Luật Giao thông đường bộ."
    },
    {
      lessonNumber: 2,
      lessonTitle: "Phòng tránh tai nạn nơi tầm nhìn bị che khuất",
      weeks: [3, 4], // Tuần 3 (Tiết 1) & Tuần 4 (Tiết 2) - KHỚP 100% VỚI BÀI MẪU PDF CỦA USER
      targetGrades: [5],
      competencies: "Nhận biết các vị trí/tình huống giao thông bị che khuất tầm nhìn có nguy cơ tai nạn cao và biết cách phòng tránh an toàn tuyệt đối.",
      contentPart1: "Khảo sát và phân tích các vị trí tầm nhìn bị che khuất (đoạn đường cua gấp, sau xe buýt đỗ, ngõ hẻm khuất tường, khúc cây rậm).",
      contentPart2: "Thực hành quy tắc an toàn khi qua khúc cua/ngõ hẻm: Đi chậm, giảm tốc độ, bấm chuông/còi cảnh báo, dừng lại quan sát cẩn thận.",
      teacherActivityPart1: "Cho HS quan sát tranh/ảnh các vị trí che khuất tầm nhìn: đoạn đường cua gấp, sau xe buýt đỗ, ngõ hẻm khuất tường. Hỏi: 'Tại sao các vị trí này lại cực kì nguy hiểm?'.",
      studentActivityPart1: "Quan sát tranh, thảo luận nhóm chỉ ra các điểm nguy hiểm bị che khuất tầm nhìn: Tài xế không nhìn thấy nhau, dễ xảy ra va chạm trực diện bất ngờ.",
      teacherActivityPart2: "Hướng dẫn quy tắc an toàn 4 bước: 1. Đi chậm; 2. Giảm tốc độ tối đa; 3. Bấm chuông/còi cảnh báo; 4. Dừng lại quan sát, lắng nghe tiếng máy xe.",
      studentActivityPart2: "Thực hành nêu cách xử lý an toàn: Luôn đi sát lề phải, bấm chuông khi đến góc ngoặt khuất, không phóng nhanh vượt ẩu ở khúc cua."
    },
    {
      lessonNumber: 3,
      lessonTitle: "Nhận biết vùng nguy hiểm và điểm mù của xe ô tô lớn",
      weeks: [5, 6],
      targetGrades: [5],
      competencies: "Xác định chính xác 4 vùng điểm mù nguy hiểm chết người quanh xe container, xe ben, xe tải lớn và nguyên tắc cách ly an toàn.",
      contentPart1: "Vị trí điểm mù phía trước mũi xe đầu kéo, sau đuôi xe và hai bên hông xe khi xe chuyển làn hoặc rẽ góc.",
      contentPart2: "Quy tắc di chuyển an toàn khi đi gần xe tải: Tuyệt đối không vượt xe bên phải, không dừng đỗ trong vùng điểm mù của tài xế.",
      teacherActivityPart1: "Chiếu video mô phỏng tầm nhìn từ cabin tài xế xe container. Cho HS thấy những vùng hoàn toàn 'tàng hình' với bác tài.",
      studentActivityPart1: "Giật mình nhận ra tài xế xe container ngồi trên cao không thể nhìn thấy xe máy/xe đạp đi sát đầu hoặc hông xe.",
      teacherActivityPart2: "Hướng dẫn cự ly cách ly an toàn tối thiểu: cách đầu xe 3m, cách đuôi xe 5m và không đi song song cạnh sườn xe ben.",
      studentActivityPart2: "Khắc ghi sâu sắc nguyên tắc: 'Nhường đường cho xe lớn, không chen lấn cạnh sườn xe tải'."
    },
    {
      lessonNumber: 4,
      lessonTitle: "Kỹ năng điều khiển xe đạp an toàn trên đường giao thông hỗn hợp",
      weeks: [7, 8],
      targetGrades: [5],
      competencies: "Thực hành điều khiển xe đạp vững vàng trong dòng xe cộ hỗn hợp; xử lý khéo léo khi gặp chướng ngại vật hoặc đường trơn trượt.",
      contentPart1: "Đặc điểm của làn đường giao thông hỗn hợp (ô tô, xe máy, xe thô sơ đi chung) và các tình huống nguy hiểm thường gặp.",
      contentPart2: "Thực hành phối hợp mắt - tay - chân khi phanh, chuyển hướng và nhường đường an toàn.",
      teacherActivityPart1: "Chiếu tình huống đường sá giờ cao điểm: xe máy lấn làn xe đạp. Hướng dẫn cách xử lý bình tĩnh, giữ vững tay lái.",
      studentActivityPart1: "Thảo luận: Cần giữ tốc độ vừa phải, đi sát lề phải, mắt luôn nhìn bao quát phía trước, không hoảng loạn phanh gấp.",
      teacherActivityPart2: "Tổ chức luyện tập kỹ năng phản xạ xử lý chướng ngại vật trên đường hẹp.",
      studentActivityPart2: "Thực hiện tự tin, chính xác các thao tác phanh giảm tốc và giữ thăng bằng an toàn."
    },
    {
      lessonNumber: 5,
      lessonTitle: "Tuân thủ quy định về tốc độ và giữ khoảng cách an toàn",
      weeks: [9, 10],
      targetGrades: [5],
      competencies: "Hiểu mối quan hệ giữa tốc độ chạy xe và quãng đường phanh dừng xe; tác hại nghiêm trọng của việc phóng nhanh vượt ẩu.",
      contentPart1: "Tìm hiểu bảng quy định tốc độ tối đa trong đô thị, khu đông dân cư và trước cổng trường học.",
      contentPart2: "Tính toán khoảng cách dừng xe tối thiểu ở các dải tốc độ khác nhau để thấy được sự nguy hiểm của tốc độ cao.",
      teacherActivityPart1: "Giải thích khái niệm 'Quãng đường phản xạ' và 'Quãng đường phanh'. Tốc độ càng cao thì phanh dừng xe càng xa.",
      studentActivityPart1: "Tính toán thử: Đi xe đạp 15km/h cần 3m phanh dừng; xe máy 40km/h cần tới hơn 15m mới dừng hẳn.",
      teacherActivityPart2: "Nhấn mạnh: 'Nhanh 1 giây có thể chậm cả đời'. Luôn kiểm soát tốc độ phương tiện trong tầm làm chủ.",
      studentActivityPart2: "Ghi nhớ thông điệp bài học và nhắc nhở anh chị, bố mẹ không phóng nhanh vượt ẩu."
    },
    {
      lessonNumber: 6,
      lessonTitle: "An toàn giao thông đường hàng không và đường sắt",
      weeks: [11, 12],
      targetGrades: [5],
      competencies: "Biết các quy định an toàn khi đi máy bay (thắt dây an toàn, tắt điện thoại/thiết bị điện tử); quy định bảo vệ tĩnh không sân bay.",
      contentPart1: "Nội quy an toàn bay, văn hóa đi máy bay và tác hại của việc chiếu đèn laser, thả diều gần sân bay.",
      contentPart2: "Quy tắc an toàn trên các chuyến tàu hỏa cao tốc và quy định vượt đường ngang có rào chắn tự động.",
      teacherActivityPart1: "Chiếu video hướng dẫn an toàn bay của tiếp viên hàng không. Giải thích vì sao phải thắt dây an toàn khi máy bay cất cánh/hạ cánh.",
      studentActivityPart1: "Thực hành thao tác cài chốt và tháo chốt dây an toàn mô phỏng trên ghế lớp học.",
      teacherActivityPart2: "Phổ biến hành lang an toàn đường hàng không: Tuyệt đối không thả diều, flycam hoặc chiếu đèn laser vào buồng lái máy bay.",
      studentActivityPart2: "Hiểu rõ đây là hành vi nguy hiểm vi phạm pháp luật nghiêm trọng và cam kết không vi phạm."
    },
    {
      lessonNumber: 7,
      lessonTitle: "Kỹ năng sơ cấp cứu ban đầu khi gặp người bị nạn giao thông",
      weeks: [13, 14],
      targetGrades: [5],
      competencies: "Nắm được nguyên tắc cơ bản sơ cứu: Không dịch chuyển người bị chấn thương cột sống; biết cầm máu tạm thời và gọi hỗ trợ y tế.",
      contentPart1: "Những việc NÊN LÀM và KHÔNG NÊN LÀM khi tiếp cận hiện trường tai nạn giao thông.",
      contentPart2: "Thực hành kỹ thuật băng bó vết thương chảy máu ở tay chân và tư thế nằm hồi sức an toàn.",
      teacherActivityPart1: "Mời nhân viên y tế học đường hoặc hướng dẫn các bước băng ép cầm máu vết thương bằng gạc sạch.",
      studentActivityPart1: "Quan sát cẩn thận từng bước băng vết thương, hiểu rằng cần giữ vết thương sạch sẽ tránh nhiễm trùng.",
      teacherActivityPart2: "Nhấn mạnh: Học sinh không tự ý di chuyển nạn nhân bất tỉnh hoặc nghi gãy xương cổ/lưng, phải giữ nguyên hiện trường chờ 115.",
      studentActivityPart2: "Ghi nhớ nguyên tắc sống còn để không làm nạn nhân bị tổn thương nặng hơn."
    },
    {
      lessonNumber: 8,
      lessonTitle: "Văn hóa ứng xử văn minh và phòng ngừa xung đột khi tham gia giao thông",
      weeks: [15, 16],
      targetGrades: [5],
      competencies: "Biết kiềm chế cơn nóng giận, giải quyết va chạm giao thông bằng thái độ hòa nhã, tôn trọng pháp luật và tương trợ lẫn nhau.",
      contentPart1: "Phân tích nguyên nhân các vụ ẩu đả, va chạm giao thông biến thành xung đột bạo lực trên đường.",
      contentPart2: "Rèn luyện kỹ năng làm chủ cảm xúc, bình tĩnh nói lời xin lỗi và phối hợp hòa giải.",
      teacherActivityPart1: "Đưa ra tình huống: Bị người khác va quẹt làm đổ xe nhưng họ lại to tiếng mắng mình. Em sẽ phản ứng thế nào?",
      studentActivityPart1: "Thảo luận nhóm tìm giải pháp: Bình tĩnh đứng dậy, không to tiếng cãi vã, nhẹ nhàng chỉ ra tình huống và nhờ công an/người dân làm chứng.",
      teacherActivityPart2: "Khắc sâu giá trị của sự điềm đạm và khoan dung: 'Một sự nhịn là chín sự lành' trên đường giao thông.",
      studentActivityPart2: "Chia sẻ bài học rút ra và cam kết xây dựng văn hóa giao thông hòa nhã, nhân ái."
    },
    {
      lessonNumber: 9,
      lessonTitle: "Tác hại của rượu, bia và chất kích thích đối với người điều khiển phương tiện",
      weeks: [17, 18],
      targetGrades: [5],
      competencies: "Hiểu cơ chế tác động của cồn lên hệ thần kinh: làm mờ mắt, phản xạ chậm, phán đoán sai lệch; kiên quyết khuyên người thân không lái xe sau khi uống rượu bia.",
      contentPart1: "Tác hại sinh học của chất cồn đối với khả năng tập trung và phản xạ của bộ não con người.",
      contentPart2: "Kỹ năng khuyên can bố mẹ/người thân: 'Bố đã uống rượu bia thì đi taxi/xe ôm về bố nhé!'.",
      teacherActivityPart1: "Cho HS đeo thử chiếc kính mô phỏng say rượu (tầm nhìn mờ, ảo ảnh) và thử đi thẳng trên 1 đường kẻ.",
      studentActivityPart1: "Thử bước đi và liên tục bị chệch hướng, tự cảm nhận được sự mất kiểm soát khủng khiếp khi có cồn trong cơ thể.",
      teacherActivityPart2: "Dạy học sinh câu nói yêu thương để khuyên nhủ bố mẹ: 'Con muốn bố về nhà bình an, bố đừng tự lái xe khi đã uống bia nhé!'.",
      studentActivityPart2: "Xúc động ghi nhớ lời dặn để trở thành người bảo vệ an toàn cho cả gia đình."
    },
    {
      lessonNumber: 10,
      lessonTitle: "Xây dựng dự án: 'Học sinh tiểu học với văn hóa giao thông an toàn'",
      weeks: [19, 20],
      targetGrades: [5],
      competencies: "Hoàn thiện dự án học tập tổng hợp; tự tin báo cáo sản phẩm truyền thông về an toàn giao thông trước toàn trường.",
      contentPart1: "Thiết kế kế hoạch dự án: làm video ngắn, vẽ truyện tranh, sáng tác thơ ca, kịch bản sân khấu hóa ATGT.",
      contentPart2: "Báo cáo nghiệm thu dự án tại buổi sinh hoạt dưới cờ và sinh hoạt lớp cuối học kỳ.",
      teacherActivityPart1: "Hướng dẫn các nhóm hoàn thiện sản phẩm dự án truyền thông an toàn giao thông.",
      studentActivityPart1: "Phân công các thành viên: thuyết trình viên, vẽ tranh minh họa, diễn xuất tiểu phẩm.",
      teacherActivityPart2: "Đánh giá, nhận xét, biểu dương tinh thần sáng tạo và trách nhiệm cộng đồng của học sinh lớp 5.",
      studentActivityPart2: "Hân hoan báo cáo kết quả, tự hào vì đã đóng góp xây dựng môi trường học đường an toàn, hạnh phúc."
    }
  ]
};

// Helper để lấy bài học ATGT cho từng Khối lớp và từng Tuần học
export function getTrafficSafetyForWeek(grade: Grade, week: number): {
  lesson: TrafficSafetyLesson;
  periodInLesson: 1 | 2; // Tiết 1 (tuần đầu) hoặc Tiết 2 (tuần sau)
  lessonIndex: number; // 0 đến 9
  displaySubTitle: string;
} {
  const gradeLessons = TRAFFIC_SAFETY_CURRICULUM[grade] || TRAFFIC_SAFETY_CURRICULUM[5];
  
  // Mỗi lớp có 10 bài, 1 bài dạy 2 tiết trong 2 tuần
  // Tuần 1-2: Bài 1; Tuần 3-4: Bài 2; ... Tuần 19-20: Bài 10
  // Nếu tuần > 20: ôn tập / thực hành theo chu kỳ
  const effectiveWeek = week <= 20 ? week : (((week - 1) % 20) + 1);
  const lessonIndex = Math.min(9, Math.floor((effectiveWeek - 1) / 2));
  const periodInLesson: 1 | 2 = ((effectiveWeek - 1) % 2 === 0) ? 1 : 2;
  const lesson = gradeLessons[lessonIndex];

  const displaySubTitle = `${lesson.lessonTitle} (Tiết ${periodInLesson})`;

  return {
    lesson,
    periodInLesson,
    lessonIndex,
    displaySubTitle
  };
}
