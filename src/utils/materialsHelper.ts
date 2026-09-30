/**
 * Helper chuẩn hóa và làm sạch Thiết bị dạy học và Học liệu (Chuẩn CV 2345/BGDĐT)
 * Quy định nghiêm ngặt theo yêu cầu chuyên môn:
 * - TUYỆT ĐỐI KHÔNG ghi các học liệu mặc định hiển nhiên của học sinh:
 *   Sách giáo khoa (SGK), vở bài tập (VBT), bộ đồ dùng học Toán học sinh, bảng con, phấn/bút dạ, nháp, bút viết, vở ghi...
 *   CHỈ GHI các vật liệu, tài liệu, thiết bị thực sự cần thiết theo từng bài học cụ thể.
 * - ĐỐI VỚI GIÁO VIÊN:
 *   TUYỆT ĐỐI KHÔNG ghi tài liệu chung chung như SGK, SGV, giáo án/KHBD, phấn bảng...
 *   CHỈ GHI những vật liệu, thiết bị dạy học và nội dung từng môn cần thiết cho từng bài cụ thể.
 */

// Danh sách các từ khóa / biểu thức cấm xuất hiện trong danh mục học sinh
const FORBIDDEN_STUDENT_PATTERNS: RegExp[] = [
  /sách\s*giáo\s*khoa(\s*[a-zA-ZÀ-ỹ0-9]+)*/gi,
  /\bsgk(\s*[a-zA-ZÀ-ỹ0-9]+)*/gi,
  /vở\s*bài\s*tập(\s*[a-zA-ZÀ-ỹ0-9]+)*/gi,
  /\bvbt(\s*[a-zA-ZÀ-ỹ0-9]+)*/gi,
  /vở\s*bt(\s*[a-zA-ZÀ-ỹ0-9]+)*/gi,
  /vở\s*ghi(\s*bài)?(\s*[a-zA-ZÀ-ỹ0-9]+)*/gi,
  /vở\s*thực\s*hành(\s*[a-zA-ZÀ-ỹ0-9]+)*/gi,
  /vở\s*tập\s*làm\s*văn(\s*[a-zA-ZÀ-ỹ0-9]+)*/gi,
  /vở\s*luyện\s*viết(\s*[a-zA-ZÀ-ỹ0-9]+)*/gi,
  /vở\s*rèn\s*chữ(\s*[a-zA-ZÀ-ỹ0-9]+)*/gi,
  /\bvở(\s*[a-zA-ZÀ-ỹ0-9]+)*/gi,
  /bảng\s*con/gi,
  /bảng\s*nhóm\s*cá\s*nhân/gi,
  /phấn(\s*trắng|\s*màu|\s*\/\s*bút\s*dạ|\s*viết)?/gi,
  /bút\s*dạ(\s*viết\s*bảng|\s*quang)?/gi,
  /giấy\s*nháp/gi,
  /\bnháp\b/gi,
  /bút\s*(viết|mực|bi|chì|dạ)(\s*viết)?(?!\s*màu)/gi,
  /\bbút\b(?!\s*màu)/gi,
  /bộ\s*đồ\s*dùng\s*học\s*(toán|tập)?(\s*học\s*sinh)?(\s*\d+)?/gi,
  /bộ\s*thực\s*hành\s*toán(\s*\d+)?/gi,
  /bộ\s*đồ\s*dùng\s*toán(\s*\d+)?/gi,
  /đồ\s*dùng\s*học\s*tập(\s*cá\s*nhân)?/gi,
];

// Danh sách các từ khóa / biểu thức cấm xuất hiện trong danh mục giáo viên
const FORBIDDEN_TEACHER_PATTERNS: RegExp[] = [
  /kế\s*hoạch\s*bài\s*dạy(\s*[a-zA-ZÀ-ỹ0-9]+)*/gi,
  /\bkhbd\b/gi,
  /giáo\s*án(\s*[a-zA-ZÀ-ỹ0-9]+)*/gi,
  /sách\s*giáo\s*khoa(\s*[a-zA-ZÀ-ỹ0-9]+)*/gi,
  /sách\s*giáo\s*viên(\s*[a-zA-ZÀ-ỹ0-9]+)*/gi,
  /\bsgk\b/gi,
  /\bsgv\b/gi,
  /phấn(\s*trắng|\s*màu|\s*viết\s*bảng)?/gi,
  /bảng\s*lớp/gi,
  /bảng\s*đen/gi,
  /bộ\s*đồ\s*dùng\s*dạy\s*học\s*toán(\s*\d+)?/gi,
];

function isPurelyForbiddenStudentItem(item: string): boolean {
  const trimmed = item.trim();
  if (!trimmed) return true;
  let testStr = trimmed;
  for (const p of FORBIDDEN_STUDENT_PATTERNS) {
    testStr = testStr.replace(p, "").trim();
  }
  testStr = testStr.replace(/[;,.\s\-\/]+/g, "").trim();
  return testStr.length <= 2;
}

function isPurelyForbiddenTeacherItem(item: string): boolean {
  const trimmed = item.trim();
  if (!trimmed) return true;
  let testStr = trimmed;
  for (const p of FORBIDDEN_TEACHER_PATTERNS) {
    testStr = testStr.replace(p, "").trim();
  }
  testStr = testStr.replace(/[;,.\s\-\/]+/g, "").trim();
  return testStr.length <= 2;
}

export function cleanStudentMaterialsText(text: string): string {
  if (!text) return "";
  const parts = text.split(/[;,]/);
  const validParts: string[] = [];

  for (const rawPart of parts) {
    if (isPurelyForbiddenStudentItem(rawPart)) {
      continue;
    }
    let cleanedPart = rawPart;
    for (const pattern of FORBIDDEN_STUDENT_PATTERNS) {
      cleanedPart = cleanedPart.replace(pattern, "");
    }
    cleanedPart = cleanedPart
      .replace(/^[;,.\s\-\/]+/, "")
      .replace(/[;,.\s\-\/]+$/, "")
      .replace(/\s{2,}/g, " ")
      .trim();

    if (cleanedPart.length > 2) {
      validParts.push(cleanedPart);
    }
  }

  return validParts.join("; ");
}

export function cleanTeacherMaterialsText(text: string): string {
  if (!text) return "";
  const parts = text.split(/[;,]/);
  const validParts: string[] = [];

  for (const rawPart of parts) {
    if (isPurelyForbiddenTeacherItem(rawPart)) {
      continue;
    }
    let cleanedPart = rawPart;
    for (const pattern of FORBIDDEN_TEACHER_PATTERNS) {
      cleanedPart = cleanedPart.replace(pattern, "");
    }
    cleanedPart = cleanedPart
      .replace(/^[;,.\s\-\/]+/, "")
      .replace(/[;,.\s\-\/]+$/, "")
      .replace(/\s{2,}/g, " ")
      .trim();

    if (cleanedPart.length > 2) {
      validParts.push(cleanedPart);
    }
  }

  return validParts.join("; ");
}

/**
 * Sinh danh mục thiết bị, vật liệu CẦN THIẾT dành cho Học sinh theo từng môn và bài học cụ thể
 * Tuyệt đối không có SGK, VBT, bảng con, phấn, bút dạ, nháp...
 */
export function getRequiredStudentMaterialsForLesson(
  subject: string,
  lessonTitle: string,
  grade: number = 5,
  subSubject?: string
): string[] {
  const normSub = (subject || "").toLowerCase();
  const normTitle = (lessonTitle || "").toLowerCase();
  const normSubSub = (subSubject || "").toLowerCase();

  // 1. TOÁN
  if (normSub.includes("toán") || normSub === "t") {
    // Hình học / đo lường / diện tích / chu vi / góc / compa
    if (
      normTitle.includes("hình") ||
      normTitle.includes("góc") ||
      normTitle.includes("đo") ||
      normTitle.includes("diện tích") ||
      normTitle.includes("chu vi") ||
      normTitle.includes("thể tích") ||
      normTitle.includes("tam giác") ||
      normTitle.includes("thang") ||
      normTitle.includes("tròn") ||
      normTitle.includes("trục số") ||
      normTitle.includes("mét khối") ||
      normTitle.includes("đơn vị đo")
    ) {
      return [
        "Thước thẳng chia vạch cm/mm, ê-ke, compa (đồ dùng đo vẽ hình)",
        "Phiếu bài tập thực hành vẽ và đo đạc hình học"
      ];
    }
    // Phân số / Hỗn số / Số thập phân / Tỉ số phần trăm
    if (
      normTitle.includes("phân số") ||
      normTitle.includes("hỗn số") ||
      normTitle.includes("thập phân") ||
      normTitle.includes("tỉ số") ||
      normTitle.includes("phần trăm") ||
      normTitle.includes("hàng và lớp") ||
      normTitle.includes("số tự nhiên")
    ) {
      return [
        "Thẻ số, thẻ phân số hoặc bảng gài số các hàng và lớp phục vụ trò chơi học tập",
        "Mô hình các mảnh ghép hình tròn chia phần bằng nhau biểu diễn phân số, hỗn số",
        "Phiếu bài tập thực hành phân hóa"
      ];
    }
    // Phép tính nhẩm, giải toán có lời văn
    return [
      "Thẻ số và thẻ phép tính phục vụ trò chơi học tập nhóm",
      "Thước kẻ chia vạch, phiếu bài tập thực hành giải toán thực tế"
    ];
  }

  // 2. TIẾNG VIỆT
  if (normSub.includes("tiếng việt") || normSub === "tv") {
    // Đọc mở rộng
    if (normTitle.includes("đọc mở rộng") || normSubSub.includes("mở rộng")) {
      return [
        "Sách truyện, bài thơ hoặc tài liệu đã chuẩn bị trước theo chủ điểm bài đọc",
        "Phiếu đọc sách ghi chép cảm nhận và chi tiết yêu thích"
      ];
    }
    // Viết / Tập làm văn
    if (
      normSubSub.includes("viết") ||
      normTitle.includes("viết") ||
      normTitle.includes("kể chuyện") ||
      normTitle.includes("tả") ||
      normTitle.includes("đoạn văn") ||
      normTitle.includes("bài văn") ||
      normTitle.includes("báo cáo")
    ) {
      return [
        "Dàn ý phác thảo bài viết, sơ đồ tư duy ý tưởng",
        "Sổ tay tích lũy từ ngữ hay và câu văn gợi cảm",
        "Phiếu tiêu chí đánh giá và chỉnh sửa đoạn văn"
      ];
    }
    // Luyện từ và câu
    if (
      normSubSub.includes("ltvc") ||
      normSubSub.includes("luyện từ") ||
      normTitle.includes("ltvc") ||
      normTitle.includes("từ đồng nghĩa") ||
      normTitle.includes("đại từ") ||
      normTitle.includes("kết từ") ||
      normTitle.includes("từ đa nghĩa") ||
      normTitle.includes("từ loại") ||
      normTitle.includes("danh từ") ||
      normTitle.includes("động từ") ||
      normTitle.includes("tính từ")
    ) {
      return [
        "Thẻ từ ngữ học tập (thẻ nhận diện từ loại/hiện tượng ngữ pháp)",
        "Phiếu bài tập thực hành luyện từ và câu"
      ];
    }
    // Đọc hiểu
    return [
      "Tranh ảnh hoặc tư liệu sưu tầm liên quan đến chủ điểm bài đọc",
      "Phiếu học tập đọc hiểu nội dung bài"
    ];
  }

  // 3. TỰ NHIÊN VÀ XÃ HỘI / KHOA HỌC
  if (normSub.includes("khoa học") || normSub.includes("tự nhiên") || normSub.includes("tnxh") || normSub === "kh") {
    if (normTitle.includes("đất") || normTitle.includes("nước") || normTitle.includes("không khí") || normTitle.includes("chất") || normTitle.includes("dung dịch") || normTitle.includes("hỗn hợp")) {
      return [
        "Mẫu vật thực tế (mẫu đất khô/đất vườn, mẫu nước hoặc mẫu chất an toàn theo dặn dò)",
        "Khay thí nghiệm thực hành an toàn: cốc nhỏ, thìa khuấy, khăn lau tay",
        "Phiếu ghi chép kết quả quan sát thí nghiệm"
      ];
    }
    if (normTitle.includes("cây") || normTitle.includes("hoa") || normTitle.includes("động vật") || normTitle.includes("thực vật") || normTitle.includes("sinh vật") || normTitle.includes("rừng")) {
      return [
        "Mẫu vật thật đem từ nhà (lá cây, hoa, hạt, củ tươi quan sát)",
        "Kính lúp cầm tay, phiếu phân loại và mô tả sinh vật"
      ];
    }
    return [
      "Mẫu vật thật hoặc tranh ảnh tư liệu thực tế theo nội dung bài học",
      "Dụng cụ thực hành an toàn, phiếu học tập quan sát nhóm"
    ];
  }

  // 4. LỊCH SỬ VÀ ĐỊA LÍ
  if (normSub.includes("lịch sử") || normSub.includes("địa lí") || normSub.includes("ls") || normSub.includes("đl")) {
    if (normTitle.includes("địa lí") || normTitle.includes("thiên nhiên") || normTitle.includes("vị trí") || normTitle.includes("đất và rừng") || normTitle.includes("biển đảo") || normTitle.includes("khí hậu")) {
      return [
        "Tập bản đồ Địa lí, lược đồ phân bố tự nhiên",
        "Tranh ảnh, tư liệu sưu tầm về các danh lam thắng cảnh, di sản thiên nhiên hoặc chủ quyền biển đảo",
        "Phiếu học tập tìm hiểu kiến thức địa lí"
      ];
    }
    return [
      "Tập bản đồ / Lược đồ lịch sử Việt Nam",
      "Tranh ảnh, câu chuyện và tư liệu lịch sử sưu tầm về nhân vật, sự kiện",
      "Phiếu học tập tìm hiểu mốc thời gian lịch sử"
    ];
  }

  // 5. ĐẠO ĐỨC
  if (normSub.includes("đạo đức") || normSub.includes("đđ")) {
    return [
      "Bộ thẻ bày tỏ ý kiến cá nhân (thẻ màu xanh: tán thành, thẻ màu đỏ: không tán thành)",
      "Đạo cụ/mặt nạ đơn giản sắm vai xử lý tình huống đạo đức",
      "Phiếu cam kết hành động rèn luyện phẩm chất tốt đẹp"
    ];
  }

  // 6. CÔNG NGHỆ / TIN HỌC
  if (normSub.includes("công nghệ") || normSub.includes("tin học") || normSub === "cn" || normSub === "th") {
    if (normSub.includes("tin học") || normSub === "th") {
      return [
        "Phiếu thực hành máy tính, sơ đồ thao tác phần mềm"
      ];
    }
    return [
      "Vật liệu thủ công theo bài (giấy màu, bìa cứng, que kem, vỏ hộp tái chế)",
      "Kéo thủ công an toàn, hồ dán, thước kẻ chia vạch"
    ];
  }

  // 7. HOẠT ĐỘNG TRẢI NGHIỆM
  if (normSub.includes("hđtn") || normSub.includes("trải nghiệm")) {
    if (normSubSub.includes("dưới cờ") || normTitle.includes("chào cờ") || normTitle.includes("dưới cờ")) {
      return [
        "Trang phục chỉnh tề (áo đồng phục trắng, khăn quàng đỏ, bảng tên)",
        "Ghế ngồi cá nhân theo sơ đồ quy định"
      ];
    }
    if (normSubSub.includes("lớp") || normTitle.includes("sinh hoạt lớp")) {
      return [
        "Sổ theo dõi thi đua của ban cán sự và tổ trưởng",
        "Phiếu tự đánh giá rèn luyện cá nhân tuần qua",
        "Tài liệu/tranh ảnh tuyên truyền An toàn giao thông"
      ];
    }
    return [
      "Sổ tay rèn luyện nề nếp, phiếu mục tiêu tuần",
      "Vật liệu trang trí hoặc sản phẩm trải nghiệm theo chủ đề sinh hoạt"
    ];
  }

  // 8. ÂM NHẠC / MĨ THUẬT / GIÁO DỤC THỂ CHẤT
  if (normSub.includes("âm nhạc") || normSub.includes("nhạc")) {
    return [
      "Nhạc cụ gõ đơn giản (thanh phách, song loan, xúc xắc hoặc cốc nhựa gõ đệm)"
    ];
  }
  if (normSub.includes("mĩ thuật") || normSub.includes("vẽ")) {
    return [
      "Giấy vẽ A4, bút màu vẽ (màu sáp, màu dạ hoặc màu nước), đất nặn, kéo và hồ dán"
    ];
  }
  if (normSub.includes("gdtc") || normSub.includes("thể dục")) {
    return [
      "Trang phục thể thao thoáng mát, giày bata mềm đúng quy định"
    ];
  }

  // Môn khác
  return [
    "Phiếu học tập cá nhân, đồ dùng trực quan theo yêu cầu bài học"
  ];
}

/**
 * Sinh danh mục thiết bị, vật liệu CẦN THIẾT dành cho Giáo viên theo từng môn và bài học cụ thể
 * Gắn liền với nội dung bài học cụ thể, không ghi giáo án/SGK chung chung
 */
export function getRequiredTeacherMaterialsForLesson(
  subject: string,
  lessonTitle: string,
  grade: number = 5,
  subSubject?: string
): string[] {
  const normSub = (subject || "").toLowerCase();
  const normTitle = (lessonTitle || "").toLowerCase();
  const normSubSub = (subSubject || "").toLowerCase();
  const cleanTitle = lessonTitle.replace(/^BÀI\s*\d+:\s*/i, "").trim();

  // 1. TOÁN
  if (normSub.includes("toán") || normSub === "t") {
    if (
      normTitle.includes("hình") ||
      normTitle.includes("góc") ||
      normTitle.includes("đo") ||
      normTitle.includes("diện tích") ||
      normTitle.includes("chu vi") ||
      normTitle.includes("thể tích") ||
      normTitle.includes("tam giác") ||
      normTitle.includes("thang") ||
      normTitle.includes("tròn") ||
      normTitle.includes("mét khối")
    ) {
      return [
        `Bài giảng điện tử tương tác (PPTX) minh họa trực quan các yếu tố và quy trình vẽ hình bài: ${cleanTitle}`,
        "Bộ thước dạy học khổ lớn trên bảng lớp: thước thẳng chia vạch, ê-ke, compa lớn",
        "Mô hình trực quan các hình hình học phẳng và khối không gian theo bài học",
        "Phiếu học tập nhóm cho học sinh thực hành đo đạc và tính toán"
      ];
    }
    if (
      normTitle.includes("phân số") ||
      normTitle.includes("hỗn số") ||
      normTitle.includes("thập phân") ||
      normTitle.includes("tỉ số") ||
      normTitle.includes("phần trăm") ||
      normTitle.includes("hàng và lớp") ||
      normTitle.includes("số tự nhiên")
    ) {
      return [
        `Bài giảng điện tử tương tác (PPTX) có mô hình số hóa trực quan bài: ${cleanTitle}`,
        "Mô hình các hình tròn chia phần bằng nhau biểu diễn phân số và hỗn số",
        "Bảng các hàng và lớp, bộ thẻ số có gắn nam châm",
        "Phiếu bài tập phân hóa theo đối tượng học sinh"
      ];
    }
    return [
      `Bài giảng điện tử tương tác (PPTX) có trò chơi khởi động và bài tập củng cố bài: ${cleanTitle}`,
      "Bảng phụ ghi các quy tắc tính toán và bài toán mẫu",
      "Phiếu bài tập nhóm, thẻ số gắn nam châm"
    ];
  }

  // 2. TIẾNG VIỆT
  if (normSub.includes("tiếng việt") || normSub === "tv") {
    if (normTitle.includes("đọc mở rộng") || normSubSub.includes("mở rộng")) {
      return [
        "Một số cuốn sách thiếu nhi, tuyển tập truyện và thơ hay theo chủ điểm bài học",
        "Mẫu Phiếu đọc sách chuẩn in sẵn cho học sinh",
        "Slide trình chiếu hướng dẫn tiêu chí chia sẻ sách"
      ];
    }
    if (normSubSub.includes("viết") || normTitle.includes("viết") || normTitle.includes("kể chuyện") || normTitle.includes("tả") || normTitle.includes("báo cáo")) {
      return [
        `Bài giảng điện tử (PPTX) trình chiếu hình ảnh, video clip thực tế gợi mở cảm xúc bài viết: ${cleanTitle}`,
        "Bảng phụ ghi tiêu chí đánh giá đoạn văn/bài văn hay, bài viết mẫu xuất sắc",
        "Phiếu hướng dẫn lập dàn ý câu chuyện/bài văn"
      ];
    }
    if (normSubSub.includes("ltvc") || normSubSub.includes("luyện từ") || normTitle.includes("ltvc") || normTitle.includes("từ loại") || normTitle.includes("danh từ") || normTitle.includes("đại từ")) {
      return [
        `Bài giảng điện tử tương tác (PPTX) với trò chơi ngôn ngữ khởi động bài: ${cleanTitle}`,
        "Bảng phụ chép sẵn các câu văn mẫu, sơ đồ tư duy hệ thống hóa kiến thức ngữ pháp",
        "Bộ thẻ từ học tập gắn nam châm, phiếu bài tập nhóm"
      ];
    }
    // Đọc
    return [
      `Bài giảng điện tử tương tác (PPTX) tích hợp file âm thanh/video và tranh ảnh tư liệu phóng to bài: ${cleanTitle}`,
      "Bảng phụ ghi sẵn các câu văn dài cần hướng dẫn luyện đọc ngắt nghỉ và diễn cảm",
      "Phiếu học tập đọc hiểu văn bản theo nhóm đôi"
    ];
  }

  // 3. TỰ NHIÊN VÀ XÃ HỘI / KHOA HỌC
  if (normSub.includes("khoa học") || normSub.includes("tự nhiên") || normSub.includes("tnxh") || normSub === "kh") {
    return [
      `Bài giảng điện tử tương tác (PPTX) tích hợp video khoa học thực tế bài: ${cleanTitle}`,
      "Khay dụng cụ thí nghiệm an toàn cho các nhóm: Cốc thủy tinh, thìa khuấy, đèn cồn/nến, que diêm, kính lúp (theo yêu cầu bài)",
      "Mẫu vật thật hoặc mô hình trực quan phóng to",
      "Bảng phụ ghi phiếu thí nghiệm, tranh ảnh khổ lớn"
    ];
  }

  // 4. LỊCH SỬ VÀ ĐỊA LÍ
  if (normSub.includes("lịch sử") || normSub.includes("địa lí") || normSub.includes("ls") || normSub.includes("đl")) {
    return [
      `Bài giảng điện tử tương tác (PPTX) tích hợp phim tư liệu lịch sử và danh thắng bài: ${cleanTitle}`,
      "Bản đồ hành chính Việt Nam, lược đồ địa hình tự nhiên/trận đánh treo tường cỡ lớn",
      "Bộ tranh ảnh tư liệu phóng to về các di tích, nhân vật lịch sử, vùng kinh tế",
      "Phiếu học tập phân nhóm tìm hiểu kiến thức"
    ];
  }

  // 5. ĐẠO ĐỨC
  if (normSub.includes("đạo đức") || normSub.includes("đđ")) {
    return [
      `Bài giảng điện tử tương tác (PPTX) trình chiếu tình huống đạo đức bài: ${cleanTitle}`,
      "Video clip tình huống thực tế, tranh ảnh minh họa các hành vi ứng xử văn minh",
      "Bộ thẻ bày tỏ thái độ (xanh/đỏ) cỡ lớn gắn bảng, phiếu bài tập tình huống",
      "Kịch bản gợi ý cho hoạt động sắm vai xử lý tình huống"
    ];
  }

  // 6. CÔNG NGHỆ / TIN HỌC
  if (normSub.includes("công nghệ") || normSub.includes("tin học") || normSub === "cn" || normSub === "th") {
    if (normSub.includes("tin học") || normSub === "th") {
      return [
        "Phòng máy tính kết nối mạng nội bộ ổn định, máy chiếu kết nối máy giáo viên",
        `Bài giảng điện tử tương tác có video hướng dẫn thao tác phần mềm mẫu: ${cleanTitle}`,
        "Phiếu bài tập thực hành trên máy tính"
      ];
    }
    return [
      `Sản phẩm công nghệ mẫu hoàn thiện trực quan bài: ${cleanTitle}`,
      "Bài giảng điện tử trình chiếu rõ ràng quy trình từng bước thực hiện",
      "Bộ dụng cụ thao tác mẫu của giáo viên (kéo, dao trổ an toàn, hồ dán)",
      "Bảng tiêu chí đánh giá sản phẩm công nghệ"
    ];
  }

  // 7. HOẠT ĐỘNG TRẢI NGHIỆM
  if (normSub.includes("hđtn") || normSub.includes("trải nghiệm")) {
    if (normSubSub.includes("dưới cờ") || normTitle.includes("chào cờ") || normTitle.includes("dưới cờ")) {
      return [
        "Kế hoạch tuần, sổ chủ nhiệm, bài phát động thi đua",
        "Hệ thống âm thanh micro, cờ Tổ quốc, loa đài ngoài sân trường"
      ];
    }
    if (normSubSub.includes("lớp") || normTitle.includes("sinh hoạt lớp")) {
      return [
        "Sổ chủ nhiệm, bảng tổng hợp điểm thi đua tuần qua, kế hoạch tuần tới",
        "Video clip/hình ảnh tư liệu chuyên đề An toàn giao thông và Kỹ năng sống",
        "Slide bài giảng sinh hoạt chủ đề, máy chiếu"
      ];
    }
    return [
      `Kế hoạch sinh hoạt chuyên đề, hệ thống âm thanh, máy chiếu bài: ${cleanTitle}`,
      "Video bài hát sinh hoạt tập thể, phiếu học tập trải nghiệm",
      "Biểu bảng tổng hợp thi đua rèn luyện"
    ];
  }

  // 8. ÂM NHẠC / MĨ THUẬT / GIÁO DỤC THỂ CHẤT
  if (normSub.includes("âm nhạc") || normSub.includes("nhạc")) {
    return [
      `Bài giảng điện tử tương tác (PPTX) có file âm thanh/nhạc beat bài hát: ${cleanTitle}`,
      "Đàn phím điện tử (keyboard), thanh phách mẫu của giáo viên, máy chiếu"
    ];
  }
  if (normSub.includes("mĩ thuật") || normSub.includes("vẽ")) {
    return [
      `Bài giảng điện tử (PPTX) trình chiếu hình ảnh và tác phẩm mĩ thuật mẫu bài: ${cleanTitle}`,
      "Vật liệu và sản phẩm mĩ thuật mẫu thực tế, bảng hướng dẫn các bước thực hành"
    ];
  }
  if (normSub.includes("gdtc") || normSub.includes("thể dục")) {
    return [
      "Còi chỉ huy, đồng hồ bấm giờ, tranh ảnh minh họa động tác kỹ thuật",
      "Dụng cụ thể thao phục vụ bài học (bóng, dây nhảy, nấm chiến thuật...)"
    ];
  }

  return [
    `Bài giảng điện tử tương tác (PPTX), tivi/máy chiếu bài: ${cleanTitle}`,
    "Bảng phụ ghi nội dung trọng tâm, tranh ảnh tư liệu phóng to",
    "Phiếu học tập nhóm và đồ dùng trực quan theo bài học"
  ];
}

/**
 * Hàm làm sạch và đồng bộ hoàn chỉnh cặp học liệu (Giáo viên & Học sinh)
 */
export function sanitizeLessonMaterials(
  rawTeacherMaterials: string[] | undefined,
  rawStudentMaterials: string[] | undefined,
  subject: string,
  lessonTitle: string,
  grade: number = 5,
  subSubject?: string
): { teacher: string[]; student: string[] } {
  // 1. Xử lý Giáo viên
  let cleanTeacher: string[] = [];
  if (rawTeacherMaterials && rawTeacherMaterials.length > 0) {
    for (const m of rawTeacherMaterials) {
      const cleaned = cleanTeacherMaterialsText(m);
      if (cleaned.length > 2) {
        cleanTeacher.push(cleaned);
      }
    }
  }

  if (cleanTeacher.length === 0 || (cleanTeacher.length === 1 && cleanTeacher[0].length < 15)) {
    cleanTeacher = getRequiredTeacherMaterialsForLesson(subject, lessonTitle, grade, subSubject);
  }

  // 2. Xử lý Học sinh
  let cleanStudent: string[] = [];
  if (rawStudentMaterials && rawStudentMaterials.length > 0) {
    for (const m of rawStudentMaterials) {
      const cleaned = cleanStudentMaterialsText(m);
      if (cleaned.length > 2) {
        cleanStudent.push(cleaned);
      }
    }
  }

  if (cleanStudent.length === 0 || (cleanStudent.length === 1 && cleanStudent[0].length < 12)) {
    cleanStudent = getRequiredStudentMaterialsForLesson(subject, lessonTitle, grade, subSubject);
  }

  return {
    teacher: cleanTeacher,
    student: cleanStudent
  };
}
