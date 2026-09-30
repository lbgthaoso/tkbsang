import { Grade, LessonPlan, ScheduleItem } from "../types";
import { sortScheduleChronologically } from "./defaultTimetables";
import { getDetailedActivitiesForLesson } from "../utils/detailedActivitiesHelper";
import { getTrafficSafetyForWeek } from "./trafficSafetyData";
import { sanitizeLessonMaterials } from "../utils/materialsHelper";

export interface SubjectCurriculum {
  subject: string;
  periodsPerWeek: number;
  totalPeriods: number;
}

export const GRADE_SUBJECTS: Record<Grade, SubjectCurriculum[]> = {
  1: [
    { subject: "Tiếng Việt", periodsPerWeek: 12, totalPeriods: 420 },
    { subject: "Toán", periodsPerWeek: 3, totalPeriods: 105 },
    { subject: "Đạo đức", periodsPerWeek: 1, totalPeriods: 35 },
    { subject: "Tự nhiên và Xã hội", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Giáo dục Thể chất", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Nghệ thuật (Âm nhạc, Mĩ thuật)", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Hoạt động trải nghiệm", periodsPerWeek: 3, totalPeriods: 105 },
    { subject: "Tăng cường Tiếng Việt", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Tăng cường Toán", periodsPerWeek: 3, totalPeriods: 105 },
  ],
  2: [
    { subject: "Tiếng Việt", periodsPerWeek: 10, totalPeriods: 350 },
    { subject: "Toán", periodsPerWeek: 5, totalPeriods: 175 },
    { subject: "Đạo đức", periodsPerWeek: 1, totalPeriods: 35 },
    { subject: "Tự nhiên và Xã hội", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Giáo dục Thể chất", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Nghệ thuật (Âm nhạc, Mĩ thuật)", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Hoạt động trải nghiệm", periodsPerWeek: 3, totalPeriods: 105 },
    { subject: "Tự chọn Tiếng Anh", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Tăng cường Tiếng Việt", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Tăng cường Toán", periodsPerWeek: 3, totalPeriods: 105 },
  ],
  3: [
    { subject: "Tiếng Việt", periodsPerWeek: 7, totalPeriods: 245 },
    { subject: "Toán", periodsPerWeek: 5, totalPeriods: 175 },
    { subject: "Tiếng Anh", periodsPerWeek: 4, totalPeriods: 140 },
    { subject: "Đạo đức", periodsPerWeek: 1, totalPeriods: 35 },
    { subject: "Tự nhiên và Xã hội", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Tin học & Công nghệ", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Giáo dục Thể chất", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Nghệ thuật (Âm nhạc, Mĩ thuật)", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Hoạt động trải nghiệm", periodsPerWeek: 3, totalPeriods: 105 },
  ],
  4: [
    { subject: "Tiếng Việt", periodsPerWeek: 7, totalPeriods: 245 },
    { subject: "Toán", periodsPerWeek: 5, totalPeriods: 175 },
    { subject: "Tiếng Anh", periodsPerWeek: 4, totalPeriods: 140 },
    { subject: "Đạo đức", periodsPerWeek: 1, totalPeriods: 35 },
    { subject: "Khoa học", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Lịch sử và Địa lí", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Công nghệ", periodsPerWeek: 1, totalPeriods: 35 },
    { subject: "Tin học", periodsPerWeek: 1, totalPeriods: 35 },
    { subject: "Giáo dục Thể chất", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Nghệ thuật (Âm nhạc, Mĩ thuật)", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Hoạt động trải nghiệm", periodsPerWeek: 3, totalPeriods: 105 },
  ],
  5: [
    { subject: "Tiếng Việt", periodsPerWeek: 7, totalPeriods: 245 },
    { subject: "Toán", periodsPerWeek: 5, totalPeriods: 175 },
    { subject: "Tiếng Anh", periodsPerWeek: 4, totalPeriods: 140 },
    { subject: "Đạo đức", periodsPerWeek: 1, totalPeriods: 35 },
    { subject: "Khoa học", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Lịch sử và Địa lí", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Công nghệ", periodsPerWeek: 1, totalPeriods: 35 },
    { subject: "Tin học", periodsPerWeek: 1, totalPeriods: 35 },
    { subject: "Giáo dục Thể chất", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Nghệ thuật", periodsPerWeek: 2, totalPeriods: 70 },
    { subject: "Hoạt động trải nghiệm", periodsPerWeek: 3, totalPeriods: 105 },
  ]
};

/**
 * Tên tựa bài dạy: bỏ chữ môn, chỉ ghi trọn vẹn tên bài học
 */
export function cleanLessonTitleForHeader(rawTitle: string): string {
  if (!rawTitle) return "";
  let clean = rawTitle.trim();
  clean = clean.replace(/^(môn\s*[^:]*:\s*|môn\s+[^-]*-\s*|bài học:\s*)/i, "");
  return clean.toUpperCase();
}

// 18 Kế hoạch bài dạy chuẩn trọn vẹn theo tài liệu PDF mẫu Lớp 5A (Tuần 3)
export const SAMPLE_LESSON_PLANS: Record<string, LessonPlan> = {
  // 1. THỨ HAI - TIẾT 1: HĐTN (Tiết 7)
  "5-w3-hdtn-1": {
    id: "5-w3-hdtn-1",
    grade: 5,
    subject: "HĐTN",
    subSubject: "Sinh hoạt dưới cờ",
    periodNumber: 1,
    curriculumPeriod: 7,
    lessonTitle: "SINH HOẠT DƯỚI CỜ: HOẠT ĐỘNG VUI TRUNG THU",
    week: 3,
    dayOfWeek: "Thứ Hai",
    dateStr: "21/09/2026",
    teacherName: "Nguyễn Hoàng Tuấn",
    className: "5A",
    schoolName: "Trường Tiểu học Tân Thạnh",
    departmentName: "UBND Xã Tân Thạnh - Phòng GD&ĐT",
    objectives: {
      specificCompetencies: [
        "Học sinh tích cực tham gia các hoạt động biểu diễn, trải nghiệm không khí ngày Tết Trung Thu truyền thống, thể hiện tinh thần tập thể, vui vẻ và tự tin."
      ],
      generalCompetencies: [
        "Năng lực giao tiếp và hợp tác thông qua việc phối hợp tổ chức lễ hội và trang trí mâm cỗ. Năng lực tự chủ và tự học khi chuẩn bị sản phẩm lồng đèn, tiết mục."
      ],
      qualities: [
        "Nhân ái, trách nhiệm, tôn trọng các nét đẹp văn hóa truyền thống của quê hương."
      ],
      integrations: {
        ai: "1.D1.1 - Nhận biết máy thông minh/AI có thể hỗ trợ tạo hình ảnh, nhạc nền và gợi ý kịch bản lễ hội.",
        digitalCompetence: "2.3.CB1a - Giao tiếp, chia sẻ thông điệp vui tươi, văn minh trong môi trường số.",
        humanRights: "Quyền trẻ em được vui chơi, giải trí và tham gia các hoạt động văn hóa, nghệ thuật.",
        nutrition: "GDDD: Nhận biết giá trị dinh dưỡng của mâm ngũ quả, bánh trung thu an toàn vệ sinh.",
        stem: "STEM: Sáng tạo lồng đèn từ vật liệu tái chế."
      }
    },
    materials: {
      teacher: ["Tivi, loa máy, lồng đèn mẫu, mâm cỗ Trung Thu mô hình."],
      student: ["Lồng đèn tự làm, vật liệu trang trí mâm ngũ quả của tổ."]
    },
    activities: [
      {
        name: "1. Hoạt động mở đầu",
        teacherActivity: "Tổ chức cho toàn trường làm lễ Chào cờ nghiêm trang. Sau đó điều hành văn nghệ khởi động bài hát 'Chiếc đèn ông sao'.",
        studentActivity: "Học sinh thực hiện nghi thức chào cờ nghiêm túc. Đồng thanh hát vang và vỗ tay theo nhịp bài hát."
      },
      {
        name: "2. Hoạt động hình thành kiến thức mới",
        teacherActivity: "Tổng phụ trách Đội giới thiệu ý nghĩa lịch sử ngày Tết Trung Thu, giới thiệu mâm cỗ và tục rước đèn phá cỗ.",
        studentActivity: "Lắng nghe chăm chú, tham gia trả lời câu hỏi đố vui về chú Cuội, chị Hằng."
      },
      {
        name: "3. Luyện tập / Thực hành",
        teacherActivity: "Tổ chức cuộc thi trưng bày lồng đèn giữa các lớp. GVCN hướng dẫn các tổ học sinh lớp 5A tự sắp xếp sản phẩm của mình lên bàn trưng bày.",
        studentActivity: "Các tổ phân công nhau đặt lồng đèn tự làm lên bàn, trang trí mâm ngũ quả nhỏ của tổ."
      },
      {
        name: "4. Hoạt động vận dụng và trải nghiệm",
        teacherActivity: "Nhận xét, tuyên dương các tổ hoạt động xuất sắc. Dặn dò HS mang lồng đèn về rước đèn cùng người thân.",
        studentActivity: "Chia sẻ cảm nghĩ về ngày hội. Ghi nhớ mang lồng đèn về nhà đón Trung thu an toàn."
      }
    ],
    postLessonAdjustment: ".....................................................................................................................................................\n......................"
  },

  // 2. THỨ HAI - TIẾT 2: TIẾNG VIỆT 5 (Tiết 15)
  "5-w3-tv-1": {
    id: "5-w3-tv-1",
    grade: 5,
    subject: "TIẾNG VIỆT 5",
    subSubject: "Đọc",
    periodNumber: 2,
    curriculumPeriod: 15,
    lessonTitle: "BÀI 5: TIẾNG HẠT NẢY MẦM (TIẾT 1)",
    week: 3,
    dayOfWeek: "Thứ Hai",
    dateStr: "21/09/2026",
    teacherName: "Nguyễn Hoàng Tuấn",
    className: "5A",
    schoolName: "Trường Tiểu học Tân Thạnh",
    objectives: {
      specificCompetencies: [
        "Đọc đúng, trôi chảy và bước đầu biết đọc diễn cảm bài thơ 'Tiếng hạt nảy mầm'. Hiểu nội dung, thông điệp ý nghĩa: Lắng nghe và thấu cảm với những điều kỳ diệu xung quanh và thế giới tinh tế của trẻ em."
      ],
      generalCompetencies: [
        "Năng lực tự chủ và tự học thông qua luyện đọc cá nhân. Năng lực giải quyết vấn đề qua trả lời câu hỏi đọc hiểu."
      ],
      qualities: [
        "Nhân ái, biết trân trọng cuộc sống và thế giới thiên nhiên."
      ],
      integrations: {
        ai: "1.A1.1 - Nhận biết con người có cảm xúc thật trước vẻ đẹp thiên nhiên, AI chỉ mô phỏng theo dữ liệu được nạp.",
        digitalCompetence: "1.1.CB1a - Biết tìm kiếm hình ảnh hạt nảy mầm từ nguồn học liệu số an toàn do GV cung cấp.",
        environment: "Bảo vệ môi trường: Yêu quý cây xanh, chăm sóc mầm cây non quanh trường lớp."
      }
    },
    materials: {
      teacher: ["Bài giảng điện tử tương tác có file âm thanh/video minh họa bài đọc: Tiếng hạt nảy mầm", "Tranh ảnh phóng to minh họa quá trình hạt nảy mầm", "Bảng phụ ghi sẵn các câu thơ luyện đọc diễn cảm"],
      student: ["Tranh ảnh hoặc tư liệu sưu tầm về sự nảy mầm và phát triển của hạt giống", "Phiếu học tập đọc hiểu bài thơ"]
    },
    activities: [
      {
        name: "1. Hoạt động mở đầu",
        teacherActivity: "Cho học sinh quan sát hình ảnh một mầm cây đang nhú lên từ lòng đất. Hỏi: 'Em nghĩ hạt giống có phát ra tiếng động khi nảy mầm không?' Dẫn dắt vào bài mới.",
        studentActivity: "Quan sát tranh, suy nghĩ và đưa ra ý kiến cá nhân (Có/Không/Tiếng cựa mình nhẹ nhàng)."
      },
      {
        name: "2. Hoạt động hình thành kiến thức mới",
        teacherActivity: "Đọc mẫu bài thơ với giọng nhẹ nhàng, truyền cảm. Hướng dẫn ngắt nhịp thơ thích hợp. Chia bài thơ làm các khổ thơ để luyện đọc nối tiếp.",
        studentActivity: "Theo dõi SGK, lắng nghe cách đọc mẫu. 4 học sinh nối tiếp nhau đọc 4 khổ thơ trước lớp. Luyện đọc từ khó: 'nảy mầm', 'xôn xao', 'lặng thầm'."
      },
      {
        name: "3. Luyện tập",
        teacherActivity: "Yêu cầu HS đọc thầm, thảo luận nhóm trả lời các câu hỏi đọc hiểu trong SGK: Hạt mầm cần những gì để nảy mầm? Những âm thanh nào được miêu tả?",
        studentActivity: "Thảo luận nhóm đôi, trả lời câu hỏi: Hạt mầm cần nước, đất ấm và ánh sáng. Tiếng hạt nảy mầm là âm thanh của sự sống sinh sôi."
      },
      {
        name: "4. Hoạt động vận dụng và trải nghiệm",
        teacherActivity: "Hướng dẫn học sinh chọn khổ thơ yêu thích để học thuộc lòng. Nhận xét tiết học.",
        studentActivity: "Luyện đọc diễn cảm khổ thơ yêu thích và ghi nhớ việc quan sát cây cối quanh nhà."
      }
    ],
    postLessonAdjustment: ".....................................................................................................................................................\n......................"
  },

  // 3. THỨ HAI - TIẾT 3: TIẾNG VIỆT 5 (Tiết 16)
  "5-w3-tv-2": {
    id: "5-w3-tv-2",
    grade: 5,
    subject: "TIẾNG VIỆT 5",
    subSubject: "Luyện từ và câu",
    periodNumber: 3,
    curriculumPeriod: 16,
    lessonTitle: "BÀI 5: TIẾNG HẠT NẢY MẦM (TIẾT 2: LTVC: LUYỆN TẬP VỀ ĐẠI TỪ)",
    week: 3,
    dayOfWeek: "Thứ Hai",
    dateStr: "21/09/2026",
    teacherName: "Nguyễn Hoàng Tuấn",
    className: "5A",
    schoolName: "Trường Tiểu học Tân Thạnh",
    objectives: {
      specificCompetencies: [
        "Học sinh củng cố kiến thức về đại từ xưng hô, đại từ chỉ định; biết cách tìm và sử dụng đại từ đúng ngữ cảnh trong văn bản đọc viết."
      ],
      generalCompetencies: [
        "Năng lực giao tiếp ngôn ngữ mạch lạc. Năng lực tự học và giải quyết bài tập cá nhân."
      ],
      qualities: [
        "Chăm chỉ rèn luyện từ ngữ tiếng Việt; trung thực trong làm bài tập."
      ],
      integrations: {
        ai: "2.A1.1 - Hiểu rằng AI có thể gợi ý đại từ xưng hô phù hợp ngữ cảnh nhưng người học cần kiểm tra và xưng hô lễ phép.",
        digitalCompetence: "5.2.CB1a - Sử dụng bảng phân loại đại từ trên slide/bảng tương tác để kiểm tra kết quả."
      }
    },
    materials: {
      teacher: ["Bài giảng điện tử tương tác (PPTX) với trò chơi ngôn ngữ củng cố đại từ", "Bảng phụ ghi các đoạn văn mẫu có chứa đại từ", "Phiếu bài tập nhóm phân loại đại từ"],
      student: ["Thẻ từ ngữ nhận diện đại từ", "Phiếu bài tập thực hành luyện từ và câu"]
    },
    activities: [
      {
        name: "1. Hoạt động mở đầu",
        teacherActivity: "Tổ chức trò chơi 'Hộp quà bí mật' chứa các câu hỏi ngắn: 'Thế nào là đại từ?', 'Cho ví dụ về đại từ xưng hô'.",
        studentActivity: "Học sinh tham gia trả lời nhanh để mở quà, ôn lại kiến thức đại từ xưng hô (tôi, tớ, chúng ta)."
      },
      {
        name: "2. Hoạt động hình thành kiến thức mới",
        teacherActivity: "Đưa đoạn văn mẫu lên bảng phụ. Yêu cầu học sinh đọc và gạch chân các từ dùng để thay thế hoặc xưng hô.",
        studentActivity: "Đọc thầm đoạn văn, làm việc cá nhân gạch chân các từ: 'anh', 'tôi', 'họ', 'ấy'."
      },
      {
        name: "3. Luyện tập",
        teacherActivity: "Giao nhiệm vụ trong Phiếu bài tập: Phân biệt đại từ xưng hô và đại từ chỉ định trong các câu cụ thể. Đặt 2 câu sử dụng đại từ.",
        studentActivity: "Hoàn thành phiếu bài tập cá nhân. Trao đổi chéo vở để kiểm tra và nhận xét bài của bạn."
      },
      {
        name: "4. Hoạt động vận dụng và trải nghiệm",
        teacherActivity: "Nhận xét kết quả bài làm. Khắc sâu nguyên tắc xưng hô lễ phép của học sinh tiểu học.",
        studentActivity: "Lắng nghe, tự rút kinh nghiệm về cách xưng hô với người lớn, thầy cô."
      }
    ],
    postLessonAdjustment: ".....................................................................................................................................................\n......................"
  },

  // 4. THỨ HAI - TIẾT 4: TOÁN 5 (Tiết 11)
  "5-w3-t-1": {
    id: "5-w3-t-1",
    grade: 5,
    subject: "TOÁN 5",
    periodNumber: 4,
    curriculumPeriod: 11,
    lessonTitle: "BÀI 6: CỘNG, TRỪ HAI PHÂN SỐ KHÁC MẪU SỐ (TIẾT 1)",
    week: 3,
    dayOfWeek: "Thứ Hai",
    dateStr: "21/09/2026",
    teacherName: "Nguyễn Hoàng Tuấn",
    className: "5A",
    schoolName: "Trường Tiểu học Tân Thạnh",
    objectives: {
      specificCompetencies: [
        "Học sinh hiểu và thực hiện được quy trình cộng, trừ hai phân số khác mẫu số bằng cách quy đồng mẫu số rồi thực hiện phép tính."
      ],
      generalCompetencies: [
        "Phát triển năng lực tư duy toán học và năng lực giải quyết vấn đề toán học thực tiễn."
      ],
      qualities: [
        "Cẩn thận, chính xác trong tính toán, chăm chỉ làm bài tập toán học."
      ],
      integrations: {
        ai: "4.C4.1 - Hiểu AI áp dụng thuật toán logic quy đồng mẫu số để tính toán nhanh, con người cần kiểm tra bước trung gian.",
        digitalCompetence: "5.2.CB1a - Sử dụng công cụ tương tác kéo thả phân số trên màn hình để kiểm tra đáp án."
      }
    },
    materials: {
      teacher: ["Bài giảng điện tử tương tác (PPTX) có mô hình số hóa biểu diễn phân số", "Mô hình trực quan các hình tròn chia phần bằng nhau biểu diễn phân số", "Phiếu học tập nhóm luyện tập phân số"],
      student: ["Mô hình các mảnh ghép hình tròn chia phần bằng nhau biểu diễn phân số", "Thẻ số, thẻ phân số phục vụ trò chơi học tập", "Phiếu bài tập thực hành phân hóa"]
    },
    activities: [
      {
        name: "1. Hoạt động mở đầu",
        teacherActivity: "Yêu cầu 2 học sinh lên bảng làm phép tính: 3/7 + 2/7 và 5/9 - 1/9.",
        studentActivity: "Thực hiện phép tính trên bảng lớp, cả lớp làm nháp. Nêu quy tắc: Cộng/trừ tử số và giữ nguyên mẫu số."
      },
      {
        name: "2. Hoạt động hình thành kiến thức mới",
        teacherActivity: "Nêu bài toán thực tế: 'Bạn Nam uống 1/2 cốc nước, bạn Mai uống 1/3 cốc nước. Hỏi cả hai uống bao nhiêu phần cốc nước?' Đặt phép tính: 1/2 + 1/3. Hỏi cách làm?",
        studentActivity: "Phát hiện mẫu số khác nhau nên không cộng trực tiếp được. Đề xuất quy đồng mẫu số hai phân số về cùng mẫu số rồi cộng."
      },
      {
        name: "3. Luyện tập",
        teacherActivity: "Hướng dẫn HS làm Bài 1, Bài 2 trong SGK. Quan sát, uốn nắn những em tính toán chậm.",
        studentActivity: "Làm bài cá nhân vào vở. Lên bảng trình bày các phép tính quy đồng và cộng: 1/2 + 1/3 = 3/6 + 2/6 = 5/6."
      },
      {
        name: "4. Hoạt động vận dụng và trải nghiệm",
        teacherActivity: "Giao bài toán đố: Một mảnh vườn trồng hoa hết 1/3 diện tích, trồng rau hết 2/5 diện tích. Hỏi tổng diện tích trồng hoa và rau chiếm bao nhiêu phần?",
        studentActivity: "Tính nhanh: 1/3 + 2/5 = 5/15 + 6/15 = 11/15 diện tích mảnh vườn."
      }
    ],
    postLessonAdjustment: ".....................................................................................................................................................\n......................"
  },

  // 5. THỨ HAI - TIẾT 2 CHIỀU: ĐẠO ĐỨC 5 (Tiết 3)
  "5-w3-dd-1": {
    id: "5-w3-dd-1",
    grade: 5,
    subject: "ĐẠO ĐỨC 5",
    periodNumber: 2,
    curriculumPeriod: 3,
    lessonTitle: "BÀI 1: BIẾT ƠN NHỮNG NGƯỜI CÓ CÔNG VỚI QUÊ HƯƠNG, ĐẤT NƯỚC (TIẾT 3)",
    week: 3,
    dayOfWeek: "Thứ Hai",
    dateStr: "21/09/2026",
    teacherName: "Nguyễn Hoàng Tuấn",
    className: "5A",
    schoolName: "Trường Tiểu học Tân Thạnh",
    objectives: {
      specificCompetencies: [
        "Biết thể hiện lòng biết ơn bằng những việc làm cụ thể: thăm viếng nghĩa trang liệt sĩ, giúp đỡ gia đình thương binh liệt sĩ, chăm ngoan học giỏi."
      ],
      generalCompetencies: [
        "Năng lực tự chủ, giao tiếp hợp tác và giải quyết vấn đề thực tiễn."
      ],
      qualities: [
        "Yêu nước, nhân ái, có trách nhiệm với quê hương đất nước."
      ],
      integrations: {
        defense: "GDQPAN: Tự hào truyền thống đấu tranh dựng nước và giữ nước của cha ông.",
        humanRights: "Quyền con người: Tôn vinh và tri ân những người hi sinh vì độc lập tự do của dân tộc."
      }
    },
    materials: {
      teacher: ["Bài giảng điện tử tương tác (PPTX) trình chiếu tình huống đạo đức: Biết ơn người có công với quê hương, đất nước", "Video clip tư liệu về các anh hùng liệt sĩ, hoạt động đền ơn đáp nghĩa", "Bộ thẻ bày tỏ thái độ (xanh/đỏ) gắn bảng", "Phiếu giao nhiệm vụ xử lý tình huống"],
      student: ["Bộ thẻ bày tỏ ý kiến cá nhân (thẻ màu xanh: tán thành, thẻ màu đỏ: không tán thành)", "Đạo cụ đơn giản sắm vai xử lý tình huống đạo đức", "Phiếu cam kết hành động thể hiện lòng biết ơn"]
    },
    activities: [
      {
        name: "1. Hoạt động mở đầu",
        teacherActivity: "Chiếu bài hát 'Uống nước nhớ nguồn'. Đặt câu hỏi về ý nghĩa câu ca dao tục ngữ.",
        studentActivity: "Hát theo giai điệu bài hát, nêu cảm nghĩ về truyền thống uống nước nhớ nguồn."
      },
      {
        name: "2. Hoạt động hình thành kiến thức mới",
        teacherActivity: "Kể chuyện về gương hy sinh anh dũng của các anh hùng trẻ tuổi (Kim Đồng, Võ Thị Sáu, Vừ A Dính).",
        studentActivity: "Lắng nghe xúc động, thảo luận về những phẩm chất cao đẹp của các vị anh hùng."
      },
      {
        name: "3. Luyện tập",
        teacherActivity: "Tổ chức thảo luận nhóm xử lý tình huống: Nhóm em sẽ làm gì khi địa phương tổ chức thăm viếng nghĩa trang liệt sĩ?",
        studentActivity: "Thảo luận nhóm, đại diện nhóm trình bày kế hoạch dọn vệ sinh, dâng hoa thắp hương."
      },
      {
        name: "4. Hoạt động vận dụng và trải nghiệm",
        teacherActivity: "Nhắc nhở học sinh luôn kính trọng người có công, chăm chỉ học tập để xứng đáng với sự hy sinh của thế hệ đi trước.",
        studentActivity: "Cam kết thực hiện tốt 5 điều Bác Hồ dạy, viết lời tri ân vào sổ tay."
      }
    ],
    postLessonAdjustment: ".....................................................................................................................................................\n......................"
  },

  // 6. THỨ BA - TIẾT 4 SÁNG: TIẾNG VIỆT 5 (Tiết 17)
  "5-w3-tv-3": {
    id: "5-w3-tv-3",
    grade: 5,
    subject: "TIẾNG VIỆT 5",
    subSubject: "Viết",
    periodNumber: 4,
    curriculumPeriod: 17,
    lessonTitle: "BÀI 5: TIẾNG HẠT NẢY MẦM (TIẾT 3: VIẾT: ĐÁNH GIÁ, CHỈNH SỬA BÀI VĂN KỂ CHUYỆN SÁNG TẠO)",
    week: 3,
    dayOfWeek: "Thứ Ba",
    dateStr: "22/09/2026",
    teacherName: "Nguyễn Hoàng Tuấn",
    className: "5A",
    schoolName: "Trường Tiểu học Tân Thạnh",
    objectives: {
      specificCompetencies: [
        "Phát triển các kỹ năng đọc đúng, đọc hiểu, viết câu đúng ngữ pháp và diễn đạt lưu loát. Đánh giá, chỉnh sửa bài văn kể chuyện sáng tạo, vận dụng từ ngữ phong phú."
      ],
      generalCompetencies: [
        "Năng lực tự chủ và tự học; Năng lực giao tiếp và hợp tác; Năng lực giải quyết vấn đề và sáng tạo."
      ],
      qualities: [
        "Yêu nước, nhân ái, chăm chỉ, trung thực, trách nhiệm."
      ],
      integrations: {
        ai: "NLS: 1.2.CB2a: Đánh giá, so sánh và kiểm chứng cách dùng đại từ từ các nguồn số. (AI 4.A1.2: Gợi ý sửa câu văn.)",
        digitalCompetence: "NLS: 1.2.CB2a."
      }
    },
    materials: {
      teacher: ["Bài giảng điện tử (PPTX) trình chiếu các đoạn văn mở bài trực tiếp và gián tiếp bài: Viết bài văn kể chuyện sáng tạo", "Bảng phụ ghi sẵn đoạn văn mẫu và bảng tiêu chí đánh giá", "Phiếu hướng dẫn lập dàn ý"],
      student: ["Dàn ý phác thảo bài viết, sơ đồ tư duy ý tưởng", "Sổ tay tích lũy từ ngữ hay", "Phiếu tiêu chí tự đánh giá và chỉnh sửa đoạn văn"]
    },
    activities: [
      {
        name: "1. Hoạt động mở đầu (5 phút)",
        teacherActivity: "Chiếu bức ảnh/video clip ngắn liên quan đến đề tài bài viết. Đặt câu hỏi gợi mở cảm xúc và dẫn dắt vào bài mới.",
        studentActivity: "Theo dõi hình ảnh/video, chia sẻ cảm nghĩ nhanh với lớp. Lắng nghe lời dẫn dắt của giáo viên, ghi tên bài học vào vở."
      },
      {
        name: "2. Hoạt động hình thành kiến thức mới (12-15 phút)",
        teacherActivity: "Cho 1 HS đọc to đề bài/đoạn văn mẫu. Phân tích yêu cầu trọng tâm. Hướng dẫn tìm ý, lập dàn ý 3 phần (Mở bài, Thân bài, Kết bài).",
        studentActivity: "Đọc to đề bài, dùng bút chì gạch chân từ khóa. Trả lời câu hỏi gợi ý, ghi nhanh ý chính vào vở nháp, thảo luận nhóm đôi."
      },
      {
        name: "3. Luyện tập (12-15 phút)",
        teacherActivity: "Yêu cầu HS tập trung viết đoạn văn/bài văn vào vở. Đi quanh lớp quan sát uốn nắn. Gọi 2-3 HS đọc bài trước lớp và phân tích ưu điểm, góp ý.",
        studentActivity: "Tự giác viết bài vào vở theo dàn ý. Tự tin đọc bài viết trước lớp, lắng nghe góp ý để tự chỉnh sửa hoàn thiện."
      },
      {
        name: "4. Hoạt động vận dụng và trải nghiệm (3-5 phút)",
        teacherActivity: "Hướng dẫn HS tự đọc lại bài viết, soát lỗi chính tả và dấu câu. Dặn dò về nhà đọc bài cho người thân nghe.",
        studentActivity: "Dùng bút chì tự soát lỗi chính tả, sửa lại những câu văn chưa gãy gọn. Ghi nhớ nhiệm vụ về nhà."
      }
    ],
    postLessonAdjustment: ".....................................................................................................................................................\n......................"
  },

  // 7. THỨ BA - TIẾT 1 CHIỀU: TOÁN 5 (Tiết 12)
  "5-w3-t-2": {
    id: "5-w3-t-2",
    grade: 5,
    subject: "TOÁN 5",
    periodNumber: 1,
    curriculumPeriod: 12,
    lessonTitle: "BÀI 6: CỘNG, TRỪ HAI PHÂN SỐ KHÁC MẪU SỐ (TIẾT 2)",
    week: 3,
    dayOfWeek: "Thứ Ba",
    dateStr: "22/09/2026",
    teacherName: "Nguyễn Hoàng Tuấn",
    className: "5A",
    schoolName: "Trường Tiểu học Tân Thạnh",
    objectives: {
      specificCompetencies: [
        "Nắm vững quy tắc và thực hiện thành thạo phép cộng, trừ hai phân số khác mẫu số trong các bài toán thực tế, biểu thức tính toán."
      ],
      generalCompetencies: [
        "Năng lực tự chủ, tự học; Năng lực giải quyết vấn đề toán học."
      ],
      qualities: [
        "Chăm chỉ, cẩn thận, chính xác."
      ],
      integrations: {
        digitalCompetence: "NLS: 1.1.CB2b: Tìm kiếm dữ liệu bảng số liệu phân số thập phân."
      }
    },
    materials: {
      teacher: ["Bài giảng điện tử tương tác (PPTX) minh họa quy tắc cộng, trừ hai phân số khác mẫu số", "Bảng phụ ghi các bài toán mẫu và quy tắc quy đồng mẫu số", "Phiếu bài tập nhóm phân hóa"],
      student: ["Thẻ phân số phục vụ trò chơi học tập tính nhanh", "Phiếu bài tập thực hành giải toán thực tế"]
    },
    activities: [
      {
        name: "1. Hoạt động mở đầu (5 phút)",
        teacherActivity: "Tổ chức trò chơi 'Truyền điện tính nhanh' các phép tính nhẩm cộng trừ phân số cùng mẫu số. Kết nối giới thiệu Tiết 2.",
        studentActivity: "Tham gia trò chơi tích cực, nhẩm nhanh kết quả. Nối tiếp đọc to tựa bài học."
      },
      {
        name: "2. Hoạt động hình thành kiến thức mới (12-15 phút)",
        teacherActivity: "Chiếu hình ảnh tình huống thực tế trong SGK. Hướng dẫn thao tác đồ dùng trực quan, thảo luận nhóm rút ra quy tắc thực hành.",
        studentActivity: "Quan sát tranh, thực thao tác trên bộ đồ dùng. Thảo luận cặp đôi tìm cách giải quyết và phát biểu trước lớp."
      },
      {
        name: "3. Luyện tập (12-15 phút)",
        teacherActivity: "Hướng dẫn HS làm Bài 1 (bảng con), Bài 2 (vở bài tập), Bài 3 (toán có lời văn vào vở). Quan sát uốn nắn HS yếu.",
        studentActivity: "Thực hiện bài tập cá nhân, giơ bảng con, lên bảng phụ làm bài. Đổi vở kiểm tra chéo."
      },
      {
        name: "4. Hoạt động vận dụng và trải nghiệm (3-5 phút)",
        teacherActivity: "Đưa ra bài toán thực tiễn gắn với đời sống. Tóm tắt nội dung trọng tâm bài học và dặn dò.",
        studentActivity: "Tư duy nhanh giải quyết tình huống thực tế. Nhắc lại quy tắc cốt lõi và thu dọn đồ dùng."
      }
    ],
    postLessonAdjustment: ".....................................................................................................................................................\n......................"
  },

  // 8. THỨ BA - TIẾT 2 CHIỀU: LS & ĐL 5 (Tiết 5)
  "5-w3-lsdl-1": {
    id: "5-w3-lsdl-1",
    grade: 5,
    subject: "LS & ĐL 5",
    periodNumber: 2,
    curriculumPeriod: 5,
    lessonTitle: "BÀI 2: THIÊN NHIÊN VIỆT NAM (TIẾT 3: KHÍ HẬU VÀ SÔNG NGÒI)",
    week: 3,
    dayOfWeek: "Thứ Ba",
    dateStr: "22/09/2026",
    teacherName: "Nguyễn Hoàng Tuấn",
    className: "5A",
    schoolName: "Trường Tiểu học Tân Thạnh",
    objectives: {
      specificCompetencies: [
        "Trình bày được đặc điểm chính của khí hậu (nhiệt đới ẩm gió mùa) và mạng lưới sông ngòi Việt Nam. Biết khai thác bản đồ, lược đồ địa lí."
      ],
      generalCompetencies: [
        "Năng lực tự chủ, giao tiếp hợp tác và giải quyết vấn đề."
      ],
      qualities: [
        "Yêu nước, có ý thức bảo vệ nguồn nước và môi trường thiên nhiên."
      ],
      integrations: {
        environment: "Tích hợp Bảo vệ môi trường sông ngòi, ứng phó biến đổi khí hậu."
      }
    },
    materials: {
      teacher: ["Bản đồ Địa lí tự nhiên Việt Nam cỡ lớn treo tường", "Bài giảng điện tử tương tác (PPTX) tích hợp video tư liệu về mạng lưới sông ngòi Việt Nam", "Phiếu học tập tìm hiểu khí hậu và sông ngòi"],
      student: ["Tập bản đồ Địa lí, lược đồ phân bố khí hậu và sông ngòi Việt Nam", "Tranh ảnh, tư liệu sưu tầm về các dòng sông lớn (sông Hồng, sông Cửu Long)", "Phiếu học tập cá nhân"]
    },
    activities: [
      {
        name: "1. Hoạt động mở đầu (5 phút)",
        teacherActivity: "Chiếu hình ảnh sông Hồng, sông Cửu Long và đố HS tên các dòng sông nổi tiếng. Giới thiệu vào bài mới.",
        studentActivity: "Quan sát hình ảnh, hào hứng đoán tên địa danh sông ngòi."
      },
      {
        name: "2. Hoạt động hình thành kiến thức mới (12-15 phút)",
        teacherActivity: "Hướng dẫn HS đọc tư liệu SGK, quan sát bản đồ khí hậu và sông ngòi. Tổ chức thảo luận nhóm 4 hoàn thành phiếu học tập.",
        studentActivity: "Đọc SGK, làm việc nhóm xác định các vùng khí hậu và hệ thống sông lớn trên bản đồ. Đại diện nhóm lên chỉ bản đồ báo cáo."
      },
      {
        name: "3. Luyện tập (12-15 phút)",
        teacherActivity: "Cho HS làm bài tập điền khuyết vắng trong vở bài tập. Tổ chức trò chơi trắc nghiệm 'Rung chuông vàng'.",
        studentActivity: "Làm bài tập cá nhân, tham gia trò chơi giơ thẻ đáp án trắc nghiệm."
      },
      {
        name: "4. Hoạt động vận dụng và trải nghiệm (3-5 phút)",
        teacherActivity: "Đặt câu hỏi liên hệ: Học sinh cần làm gì để bảo vệ giữ gìn nguồn nước sông hồ sạch đẹp?",
        studentActivity: "Nêu các việc làm cụ thể: Không vứt rác xuống sông hồ, tiết kiệm nước sạch."
      }
    ],
    postLessonAdjustment: ".....................................................................................................................................................\n......................"
  },

  // 9. THỨ BA - TIẾT 3 CHIỀU: KHOA HỌC 5 (Tiết 5)
  "5-w3-kh-1": {
    id: "5-w3-kh-1",
    grade: 5,
    subject: "KHOA HỌC 5",
    periodNumber: 3,
    curriculumPeriod: 5,
    lessonTitle: "BÀI 2: Ô NHIỄM, XÓI MÒN ĐẤT VÀ BẢO VỆ MÔI TRƯỜNG ĐẤT (TIẾT 3)",
    week: 3,
    dayOfWeek: "Thứ Ba",
    dateStr: "22/09/2026",
    teacherName: "Nguyễn Hoàng Tuấn",
    className: "5A",
    schoolName: "Trường Tiểu học Tân Thạnh",
    objectives: {
      specificCompetencies: [
        "Nêu được các biện pháp bảo vệ môi trường đất, chống xói mòn và ô nhiễm đất trong nông nghiệp và đời sống."
      ],
      generalCompetencies: [
        "Năng lực giải quyết vấn đề, đề xuất giải pháp thực tiễn."
      ],
      qualities: [
        "Trách nhiệm bảo vệ môi trường, tiết kiệm tài nguyên."
      ],
      integrations: {
        ai: "4.A1.1 - AI phân tích chất lượng đất qua ảnh vệ tinh.",
        nutrition: "Đất sạch cung cấp nông sản sạch.",
        environment: "Trồng rừng, làm ruộng bậc thang."
      }
    },
    materials: {
      teacher: ["Bài giảng điện tử tương tác (PPTX) minh họa hình ảnh ruộng bậc thang và video về xói mòn đất bài: Ô nhiễm, xói mòn đất và bảo vệ môi trường đất", "Phiếu học tập nhóm"],
      student: ["Tranh ảnh tư liệu sưu tầm về các biện pháp chống xói mòn và ô nhiễm đất", "Phiếu học tập ghi chép giải pháp bảo vệ đất"]
    },
    activities: [
      {
        name: "1. Hoạt động mở đầu",
        teacherActivity: "Hỏi: 'Những hoạt động nào của con người trực tiếp làm đất bị ô nhiễm?'",
        studentActivity: "Trả lời: Phun thuốc trừ sâu bừa bãi, vứt rác thải nhựa, bón quá nhiều phân hóa học."
      },
      {
        name: "2. Hoạt động hình thành kiến thức mới",
        teacherActivity: "Chiếu hình ảnh ruộng bậc thang, trồng rừng. Đặt câu hỏi thảo luận: 'Tại sao trồng rừng lại chống được xói mòn đất?'",
        studentActivity: "Thảo luận nhóm 4. Trả lời: Rễ cây giữ đất, lá cây cản bớt lực nước mưa rơi trực tiếp làm trôi đất mặt."
      },
      {
        name: "3. Luyện tập",
        teacherActivity: "Yêu cầu HS lập bảng phân loại biện pháp: Chống xói mòn đất và Chống ô nhiễm đất.",
        studentActivity: "Làm bài nhóm vào giấy A3: Chống xói mòn (trồng rừng, làm ruộng bậc thang); Chống ô nhiễm (dùng phân hữu cơ, phân loại rác)."
      },
      {
        name: "4. Hoạt động vận dụng và trải nghiệm",
        teacherActivity: "Yêu cầu HS viết 1 thông điệp ngắn kêu gọi giữ sạch môi trường đất.",
        studentActivity: "Viết thông điệp: 'Hãy bón phân xanh, giữ sạch đất lành!' và dán góc học tập."
      }
    ],
    postLessonAdjustment: ".....................................................................................................................................................\n......................"
  },

  // 10. THỨ TƯ - TIẾT 1 SÁNG: TIẾNG VIỆT 5 (Tiết 18)
  "5-w3-tv-4": {
    id: "5-w3-tv-4",
    grade: 5,
    subject: "TIẾNG VIỆT 5",
    subSubject: "Đọc",
    periodNumber: 1,
    curriculumPeriod: 18,
    lessonTitle: "BÀI 6: NGÔI SAO SÂN CỎ (TIẾT 1)",
    week: 3,
    dayOfWeek: "Thứ Tư",
    dateStr: "23/09/2026",
    teacherName: "Nguyễn Hoàng Tuấn",
    className: "5A",
    schoolName: "Trường Tiểu học Tân Thạnh",
    objectives: {
      specificCompetencies: [
        "Đọc đúng, trôi chảy toàn bài 'Ngôi sao sân cỏ'. Hiểu nghĩa các từ ngữ mới, nắm được diễn biến cốt truyện và tính cách nhân vật."
      ],
      generalCompetencies: [
        "Năng lực tự chủ, tự học, năng lực giao tiếp ngôn ngữ."
      ],
      qualities: [
        "Tinh thần thể thao trung thực, tinh thần đoàn kết tập thể."
      ],
      integrations: {
        digitalCompetence: "NLS 1.2.CB2a",
        humanRights: "Tinh thần thể thao trung thực, lành mạnh."
      }
    },
    materials: {
      teacher: ["Bài giảng điện tử tương tác (PPTX) có tích hợp tranh ảnh phóng to bài đọc: Ngôi sao sân cỏ", "Bảng phụ ghi các từ ngữ khó đọc và câu văn dài cần luyện ngắt giọng", "Phiếu học tập đọc hiểu"],
      student: ["Tranh ảnh sưu tầm về môn bóng đá thiếu nhi", "Phiếu học tập đọc hiểu bài đọc"]
    },
    activities: [
      {
        name: "1. Hoạt động mở đầu (5 phút)",
        teacherActivity: "Cho HS xem hình ảnh trận thi đấu bóng đá thiếu nhi. Dẫn dắt vào bài đọc 'Ngôi sao sân cỏ (Tiết 1)'.",
        studentActivity: "Quan sát tranh, chia sẻ cảm xúc về môn bóng đá. Ghi tựa bài vào vở."
      },
      {
        name: "2. Hoạt động hình thành kiến thức mới (12-15 phút)",
        teacherActivity: "GV đọc mẫu toàn bài. Hướng dẫn chia đoạn, luyện đọc từ khó và giải nghĩa từ mới trong chú giải.",
        studentActivity: "Lắng nghe GV đọc mẫu. Nối tiếp nhau đọc từng đoạn. Luyện phát âm từ khó."
      },
      {
        name: "3. Luyện tập (12-15 phút)",
        teacherActivity: "Hướng dẫn thảo luận nhóm trả lời các câu hỏi tìm hiểu bài trong SGK. Rút ra nội dung chính bài đọc.",
        studentActivity: "Thảo luận cặp đôi, trả lời câu hỏi đọc hiểu. Đại diện nhóm phát biểu trước lớp."
      },
      {
        name: "4. Hoạt động vận dụng và trải nghiệm (3-5 phút)",
        teacherActivity: "Liên hệ thực tế về tinh thần đoàn kết trong thể thao và học tập. Dặn dò luyện đọc lại bài.",
        studentActivity: "Chia sẻ cảm nghĩ cá nhân, ghi nhớ lời dặn dò của giáo viên."
      }
    ],
    postLessonAdjustment: ".....................................................................................................................................................\n......................"
  },

  // 11. THỨ TƯ - TIẾT 2 SÁNG: TIẾNG VIỆT 5 (Tiết 19)
  "5-w3-tv-5": {
    id: "5-w3-tv-5",
    grade: 5,
    subject: "TIẾNG VIỆT 5",
    subSubject: "Đọc",
    periodNumber: 2,
    curriculumPeriod: 19,
    lessonTitle: "BÀI 6: NGÔI SAO SÂN CỎ (TIẾT 2)",
    week: 3,
    dayOfWeek: "Thứ Tư",
    dateStr: "23/09/2026",
    teacherName: "Nguyễn Hoàng Tuấn",
    className: "5A",
    schoolName: "Trường Tiểu học Tân Thạnh",
    objectives: {
      specificCompetencies: [
        "Luyện đọc diễn cảm đoạn văn tiêu biểu trong bài. Phân tích kĩ hơn về ý nghĩa thông điệp bài đọc và bài học ứng xử."
      ],
      generalCompetencies: [
        "Năng lực tự chủ, năng lực giao tiếp và hợp tác."
      ],
      qualities: [
        "Trung thực, tôn trọng bạn bè và ý thức kỉ luật."
      ],
      integrations: {
        digitalCompetence: "NLS 1.2.CB2a."
      }
    },
    materials: {
      teacher: ["Bảng phụ ghi đoạn luyện đọc diễn cảm bài: Ngôi sao sân cỏ (Tiết 2)", "Bài giảng điện tử tương tác (PPTX) hướng dẫn phân tích nhân vật", "Phiếu thảo luận nhóm"],
      student: ["Tranh ảnh minh họa bài đọc", "Phiếu ghi chép cảm nhận về nhân vật trong bài đọc"]
    },
    activities: [
      {
        name: "1. Hoạt động mở đầu (5 phút)",
        teacherActivity: "Gọi 2 HS đọc lại 2 đoạn bài 'Ngôi sao sân cỏ' và trả lời câu hỏi ngắn.",
        studentActivity: "2 HS đọc bài trước lớp, cả lớp nhận xét."
      },
      {
        name: "2. Hoạt động hình thành kiến thức mới (12-15 phút)",
        teacherActivity: "Hướng dẫn HS phát hiện giọng đọc phù hợp cho từng nhân vật. GV đọc mẫu đoạn văn tiêu biểu.",
        studentActivity: "Quan sát đoạn văn trên bảng phụ, đánh dấu chỗ ngắt giọng và nhấn giọng."
      },
      {
        name: "3. Luyện tập (12-15 phút)",
        teacherActivity: "Tổ chức luyện đọc diễn cảm theo nhóm đôi. Tổ chức thi đọc diễn cảm giữa các tổ.",
        studentActivity: "Luyện đọc trong nhóm, tham gia thi đọc diễn cảm trước lớp. Bình chọn bạn đọc hay nhất."
      },
      {
        name: "4. Hoạt động vận dụng và trải nghiệm (3-5 phút)",
        teacherActivity: "Nhận xét tuyên dương. Dặn dò HS tập kể lại câu chuyện cho người thân.",
        studentActivity: "Lắng nghe nhận xét, ghi nhớ nhiệm vụ về nhà."
      }
    ],
    postLessonAdjustment: ".....................................................................................................................................................\n......................"
  },

  // 12. THỨ TƯ - TIẾT 3 SÁNG: TOÁN 5 (Tiết 13)
  "5-w3-t-3": {
    id: "5-w3-t-3",
    grade: 5,
    subject: "TOÁN 5",
    periodNumber: 3,
    curriculumPeriod: 13,
    lessonTitle: "BÀI 7: HỖN SỐ (TIẾT 1)",
    week: 3,
    dayOfWeek: "Thứ Tư",
    dateStr: "23/09/2026",
    teacherName: "Nguyễn Hoàng Tuấn",
    className: "5A",
    schoolName: "Trường Tiểu học Tân Thạnh",
    objectives: {
      specificCompetencies: [
        "Nhận biết được khái niệm hỗn số, cấu tạo của hỗn số (gồm phần nguyên và phần phân số). Biết đọc, viết hỗn số."
      ],
      generalCompetencies: [
        "Năng lực tư duy logic toán học, giải quyết vấn đề."
      ],
      qualities: [
        "Chăm chỉ, cẩn thận, yêu thích môn Toán."
      ],
      integrations: {
        digitalCompetence: "NLS 1.1.CB2b",
        stem: "Trực quan hóa khái niệm hỗn số."
      }
    },
    materials: {
      teacher: ["Bài giảng điện tử tương tác (PPTX) mô phỏng trực quan khái niệm hỗn số", "Mô hình hình tròn và các mảnh bìa trực quan biểu diễn hỗn số", "Phiếu bài tập phân hóa"],
      student: ["Mô hình các mảnh ghép hình tròn chia phần bằng nhau biểu diễn hỗn số", "Thẻ số, thẻ phân số phục vụ trò chơi học tập", "Phiếu bài tập thực hành phân hóa"]
    },
    activities: [
      {
        name: "1. Hoạt động mở đầu (5 phút)",
        teacherActivity: "Tổ chức trò chơi toán học 'Hái hoa dân chủ' ôn tập về phân số lớn hơn 1. Giới thiệu bài 'Hỗn số (Tiết 1)'.",
        studentActivity: "Hào hứng tham gia trò chơi, trả lời câu hỏi. Ghi tựa bài vào vở."
      },
      {
        name: "2. Hoạt động hình thành kiến thức mới (12-15 phút)",
        teacherActivity: "Nêu tình huống: Có 2 hình tròn và 3/4 hình tròn. GV giới thiệu cách viết 2 và 3/4 thành hỗn số 2 3/4. Hướng dẫn đọc, viết phần nguyên và phần phân số.",
        studentActivity: "Quan sát mô hình trực quan. Nhận biết hỗn số gồm phần nguyên và phần phân số. Luyện đọc và viết hỗn số trên bảng con."
      },
      {
        name: "3. Luyện tập (12-15 phút)",
        teacherActivity: "Hướng dẫn HS làm Bài 1 (đọc viết hỗn số theo hình vẽ), Bài 2 (chuyển hình vẽ thành hỗn số) trong SGK.",
        studentActivity: "Làm bài cá nhân vào vở, giơ bảng con kết quả. Lên bảng trình bày."
      },
      {
        name: "4. Hoạt động vận dụng và trải nghiệm (3-5 phút)",
        teacherActivity: "Đưa ra hình ảnh thực tế (2 cái bánh và 1/2 cái bánh) yêu cầu HS đọc hỗn số tương ứng.",
        studentActivity: "Quan sát và nêu nhanh hỗn số: 2 1/2 cái bánh. Tóm tắt bài học."
      }
    ],
    postLessonAdjustment: ".....................................................................................................................................................\n......................"
  },

  // 13. THỨ NĂM - TIẾT 1 SÁNG: TIẾNG VIỆT 5 (Tiết 20)
  "5-w3-tv-6": {
    id: "5-w3-tv-6",
    grade: 5,
    subject: "TIẾNG VIỆT 5",
    subSubject: "Viết",
    periodNumber: 1,
    curriculumPeriod: 20,
    lessonTitle: "BÀI 6: NGÔI SAO SÂN CỎ (TIẾT 3: VIẾT: TÌM HIỂU CÁCH VIẾT BÁO CÁO CÔNG VIỆC)",
    week: 3,
    dayOfWeek: "Thứ Năm",
    dateStr: "24/09/2026",
    teacherName: "Nguyễn Hoàng Tuấn",
    className: "5A",
    schoolName: "Trường Tiểu học Tân Thạnh",
    objectives: {
      specificCompetencies: [
        "Nhận diện được cấu trúc, quy cách và nội dung của một văn bản Báo cáo công việc. Biết lập dàn ý báo cáo công việc của tổ/lớp."
      ],
      generalCompetencies: [
        "Năng lực tự chủ, giao tiếp hợp tác, định dạng văn bản."
      ],
      qualities: [
        "Trách nhiệm, trung thực trong báo cáo công việc."
      ],
      integrations: {
        digitalCompetence: "NLS 3.2.CB1a: Định dạng văn bản báo cáo."
      }
    },
    materials: {
      teacher: ["Bản báo cáo công việc mẫu in phóng to, bài giảng điện tử (PPTX) hướng dẫn cấu trúc báo cáo", "Phiếu tiêu chí đánh giá bản báo cáo công việc"],
      student: ["Sơ đồ tư duy lập dàn ý báo cáo", "Phiếu học tập thực hành lập báo cáo công việc"]
    },
    activities: [
      {
        name: "1. Hoạt động mở đầu (5 phút)",
        teacherActivity: "Chiếu văn bản báo cáo mẫu của Lớp trưởng. Hỏi: 'Văn bản này dùng để làm gì?' Dẫn dắt vào bài mới.",
        studentActivity: "Quan sát văn bản mẫu, trả lời câu hỏi. Ghi tựa bài."
      },
      {
        name: "2. Hoạt động hình thành kiến thức mới (12-15 phút)",
        teacherActivity: "Cho 1 HS đọc báo cáo mẫu. Hướng dẫn HS phân tích 3 phần của báo cáo: Tiêu đề/Quốc hiệu, Nội dung báo cáo (kết quả đạt được, hạn chế), Người làm báo cáo.",
        studentActivity: "Đọc thầm báo cáo mẫu, thảo luận nhóm 4 trả lời các câu hỏi phân tích cấu trúc báo cáo."
      },
      {
        name: "3. Luyện tập (12-15 phút)",
        teacherActivity: "Hướng dẫn HS thực hành lập dàn ý báo cáo công việc tuần qua của tổ mình.",
        studentActivity: "Làm việc cá nhân/nhóm lập dàn ý báo cáo vào vở. 2 HS đọc dàn ý trước lớp, cả lớp nhận xét."
      },
      {
        name: "4. Hoạt động vận dụng và trải nghiệm (3-5 phút)",
        teacherActivity: "Khắc sâu quy cách viết báo cáo công việc. Dặn dò chuẩn bị viết báo cáo chính thức ở tiết sau.",
        studentActivity: "Ghi nhớ các phần bắt buộc của báo cáo công việc."
      }
    ],
    postLessonAdjustment: ".....................................................................................................................................................\n......................"
  },

  // 14. THỨ NĂM - TIẾT 2 SÁNG: TOÁN 5 (Tiết 14)
  "5-w3-t-4": {
    id: "5-w3-t-4",
    grade: 5,
    subject: "TOÁN 5",
    periodNumber: 2,
    curriculumPeriod: 14,
    lessonTitle: "BÀI 7: HỖN SỐ (TIẾT 2)",
    week: 3,
    dayOfWeek: "Thứ Năm",
    dateStr: "24/09/2026",
    teacherName: "Nguyễn Hoàng Tuấn",
    className: "5A",
    schoolName: "Trường Tiểu học Tân Thạnh",
    objectives: {
      specificCompetencies: [
        "Biết cách chuyển một hỗn số thành phân số và ngược lại. Thực hành tính toán với hỗn số."
      ],
      generalCompetencies: [
        "Năng lực tư duy logic, thực hành tính toán."
      ],
      qualities: [
        "Cẩn thận, chính xác, chăm chỉ."
      ],
      integrations: {
        digitalCompetence: "NLS 1.1.CB2b."
      }
    },
    materials: {
      teacher: ["Bài giảng điện tử tương tác (PPTX) trình chiếu quy tắc chuyển đổi hỗn số sang phân số và ngược lại", "Bảng phụ ghi các ví dụ mẫu và sơ đồ tư duy"],
      student: ["Thẻ số và thẻ phân số phục vụ trò chơi tiếp sức", "Phiếu bài tập thực hành chuyển đổi hỗn số"]
    },
    activities: [
      {
        name: "1. Hoạt động mở đầu (5 phút)",
        teacherActivity: "Kiểm tra bài cũ: Đọc và nêu phần nguyên, phần phân số của hỗn số 3 2/5.",
        studentActivity: "1 HS lên bảng làm bài, cả lớp nhận xét."
      },
      {
        name: "2. Hoạt động hình thành kiến thức mới (12-15 phút)",
        teacherActivity: "Hướng dẫn quy tắc chuyển hỗn số thành phân số: Tử số = (Phần nguyên x Mẫu số) + Tử số cũ; Mẫu số giữ nguyên. Ví dụ: 2 3/4 = (2x4+3)/4 = 11/4.",
        studentActivity: "Theo dõi hướng dẫn, đọc lại quy tắc chuyển đổi. Luyện tập làm ví dụ trên bảng con."
      },
      {
        name: "3. Luyện tập (12-15 phút)",
        teacherActivity: "Hướng dẫn làm Bài 1 (chuyển hỗn số thành phân số), Bài 2 (so sánh hai hỗn số) trong SGK.",
        studentActivity: "Làm bài cá nhân vào vở, giơ bảng con. 2 HS lên bảng chữa bài."
      },
      {
        name: "4. Hoạt động vận dụng và trải nghiệm (3-5 phút)",
        teacherActivity: "Tổ chức trò chơi 'Ai nhanh ai đúng' chuyển nhanh 3 hỗn số thành phân số.",
        studentActivity: "Hào hứng tham gia trò chơi nhẩm nhanh kết quả. Củng cố tiết học."
      }
    ],
    postLessonAdjustment: ".....................................................................................................................................................\n......................"
  },

  // 15. THỨ NĂM - TIẾT 1 CHIỀU: LS & ĐL 5 (Tiết 6)
  "5-w3-lsdl-2": {
    id: "5-w3-lsdl-2",
    grade: 5,
    subject: "LS & ĐL 5",
    periodNumber: 1,
    curriculumPeriod: 6,
    lessonTitle: "BÀI 2: THIÊN NHIÊN VIỆT NAM (TIẾT 4: ĐẤT VÀ RỪNG)",
    week: 3,
    dayOfWeek: "Thứ Năm",
    dateStr: "24/09/2026",
    teacherName: "Nguyễn Hoàng Tuấn",
    className: "5A",
    schoolName: "Trường Tiểu học Tân Thạnh",
    objectives: {
      specificCompetencies: [
        "Trình bày được đặc điểm của các loại đất chính (đất phe-ra-lit, đất phù sa) và các loại rừng chính (rừng rậm nhiệt đới, rừng ngập mặn) ở nước ta."
      ],
      generalCompetencies: [
        "Năng lực tự chủ, giao tiếp hợp tác và khai thác bản đồ."
      ],
      qualities: [
        "Yêu thiên nhiên, có ý thức bảo vệ rừng và tài nguyên đất."
      ],
      integrations: {
        environment: "Tích hợp Bảo vệ rừng, phòng chống cháy rừng và bảo vệ đa dạng sinh học."
      }
    },
    materials: {
      teacher: ["Bản đồ phân bố đất và rừng Việt Nam cỡ lớn treo tường", "Bài giảng điện tử (PPTX) tích hợp video tư liệu về rừng rậm nhiệt đới và rừng ngập mặn", "Phiếu học tập nhóm"],
      student: ["Tập bản đồ Địa lí, lược đồ phân bố đất và rừng Việt Nam", "Tranh ảnh, tư liệu sưu tầm về rừng ngập mặn Cần Giờ, vườn quốc gia Cúc Phương", "Phiếu học tập cá nhân"]
    },
    activities: [
      {
        name: "1. Hoạt động mở đầu (5 phút)",
        teacherActivity: "Chiếu hình ảnh rừng ngập mặn Cà Mau và đất đỏ Tây Nguyên. Đố HS nhận diện. Dẫn dắt vào bài mới.",
        studentActivity: "Quan sát tranh, trả lời câu đố địa danh."
      },
      {
        name: "2. Hoạt động hình thành kiến thức mới (12-15 phút)",
        teacherActivity: "Hướng dẫn HS làm việc nhóm 4: Nhóm 1,2 nghiên cứu về Đất phe-ra-lit & Đất phù sa; Nhóm 3,4 nghiên cứu về Rừng nhiệt đới & Rừng ngập mặn.",
        studentActivity: "Đọc SGK, quan sát bản đồ phân bố. Báo cáo kết quả thảo luận nhóm trước lớp."
      },
      {
        name: "3. Luyện tập (12-15 phút)",
        teacherActivity: "Cho HS hoàn thành sơ đồ tư duy hệ thống hóa đặc điểm Đất và Rừng Việt Nam vào vở.",
        studentActivity: "Vẽ sơ đồ tư duy cá nhân, tô màu hoàn thiện."
      },
      {
        name: "4. Hoạt động vận dụng và trải nghiệm (3-5 phút)",
        teacherActivity: "Hỏi: 'Vì sao chúng ta phải tích cực trồng cây gây rừng và bảo vệ rừng?'",
        studentActivity: "Nêu lý do: Rừng giúp chống lũ lụt, điều hòa khí hậu, cung cấp oxy và bảo vệ động vật."
      }
    ],
    postLessonAdjustment: ".....................................................................................................................................................\n......................"
  },

  // 16. THỨ NĂM - TIẾT 2 CHIỀU: KHOA HỌC 5 (Tiết 6)
  "5-w3-kh-2": {
    id: "5-w3-kh-2",
    grade: 5,
    subject: "KHOA HỌC 5",
    periodNumber: 2,
    curriculumPeriod: 6,
    lessonTitle: "BÀI 3: HỖN HỢP VÀ DUNG DỊCH (TIẾT 1)",
    week: 3,
    dayOfWeek: "Thứ Năm",
    dateStr: "24/09/2026",
    teacherName: "Nguyễn Hoàng Tuấn",
    className: "5A",
    schoolName: "Trường Tiểu học Tân Thạnh",
    objectives: {
      specificCompetencies: [
        "Nêu được khái niệm hỗn số, hỗn hợp chất rắn, chất lỏng. Thực hành tạo hỗn hợp đơn giản (muối và tiêu, đường và nước)."
      ],
      generalCompetencies: [
        "Năng lực thực nghiệm khoa học, quan sát phân tích."
      ],
      qualities: [
        "Cẩn thận, trung thực trong thí nghiệm."
      ],
      integrations: {
        stem: "Thí nghiệm hòa tan tạo hỗn hợp, dung dịch."
      }
    },
    materials: {
      teacher: ["Bài giảng điện tử tương tác (PPTX) minh họa thí nghiệm dung dịch và hỗn hợp", "Khay dụng cụ thí nghiệm: Cốc thủy tinh, thìa khuấy, nước sạch, muối, đường, cát", "Phiếu thí nghiệm nhóm"],
      student: ["Mẫu chất an toàn theo dặn dò (chút muối ăn, đường kính)", "Khay thí nghiệm thực hành an toàn: thìa nhỏ, cốc nhựa trong, khăn lau tay", "Phiếu ghi chép kết quả thí nghiệm"]
    },
    activities: [
      {
        name: "1. Hoạt động mở đầu (5 phút)",
        teacherActivity: "Thực hiện trộn muối và hạt tiêu trong cốc. Hỏi: 'Trong cốc có những chất nào? Ta gọi đây là gì?'",
        studentActivity: "Quan sát GV thao tác, trả lời: Có muối và tiêu, gọi là hỗn hợp."
      },
      {
        name: "2. Hoạt động hình thành kiến thức mới (12-15 phút)",
        teacherActivity: "GV hướng dẫn các nhóm làm thí nghiệm: Thí nghiệm 1 (Trộn cát với nước); Thí nghiệm 2 (Trộn đường với nước). Quan sát và ghi nhận hiện tượng.",
        studentActivity: "Các nhóm nhận dụng cụ, tiến hành thí nghiệm, ghi kết quả vào phiếu: Cát không tan trong nước, đường tan hoàn toàn tạo dung dịch."
      },
      {
        name: "3. Luyện tập (12-15 phút)",
        teacherActivity: "Hướng dẫn HS rút ra định nghĩa: Hỗn hợp là gì? Dung dịch là gì?",
        studentActivity: "Phát biểu định nghĩa trước lớp. Rút ra kết luận ghi vào vở."
      },
      {
        name: "4. Hoạt động vận dụng và trải nghiệm (3-5 phút)",
        teacherActivity: "Nêu các ví dụ về hỗn hợp và dung dịch thường gặp trong đời sống (nước muối sinh lý, nước chanh đường, canh rau).",
        studentActivity: "Liên hệ thực tế đời sống gia đình."
      }
    ],
    postLessonAdjustment: ".....................................................................................................................................................\n......................"
  },

  // 17. THỨ NĂM - TIẾT 3 CHIỀU: TC TIẾNG VIỆT 5 (Tiết TCTV1)
  "5-w3-tctv-1": {
    id: "5-w3-tctv-1",
    grade: 5,
    subject: "TIẾNG VIỆT 5",
    subSubject: "Tăng cường Tiếng Việt",
    periodNumber: 3,
    curriculumPeriod: "TCTV1",
    lessonTitle: "LUYỆN TẬP TIẾNG VIỆT: CỦNG CỐ RÈN CHỮ, TỪ VÀ CÂU TUẦN 3",
    week: 3,
    dayOfWeek: "Thứ Năm",
    dateStr: "24/09/2026",
    teacherName: "Nguyễn Hoàng Tuấn",
    className: "5A",
    schoolName: "Trường Tiểu học Tân Thạnh",
    objectives: {
      specificCompetencies: [
        "Củng cố kĩ năng rèn chữ viết đẹp, đúng khoảng cách. Luyện tập mở rộng vốn từ và sử dụng đại từ xưng hô đúng ngữ cảnh."
      ],
      generalCompetencies: [
        "Năng lực tự học, rèn luyện ngôn ngữ."
      ],
      qualities: [
        "Kiên trì, cẩn thận, giữ gìn vở sạch chữ đẹp."
      ],
      integrations: {
        humanRights: "Tích hợp Rèn chữ giữ vở, văn hóa giao tiếp ứng xử."
      }
    },
    materials: {
      teacher: ["Bảng mẫu chữ viết đẹp chuẩn quy định, bài giảng điện tử (PPTX) trình chiếu quy trình viết", "Phiếu bài tập bổ trợ rèn từ và câu"],
      student: ["Thẻ từ kiểm tra chính tả, phiếu bài tập rèn từ và câu bổ trợ"]
    },
    activities: [
      {
        name: "1. Hoạt động mở đầu (5 phút)",
        teacherActivity: "Tổ chức trò chơi 'Ô chữ kì diệu' ôn tập các đại từ xưng hô đã học trong tuần.",
        studentActivity: "Tham gia trò chơi tích cực."
      },
      {
        name: "2. Hoạt động hình thành kiến thức mới (12-15 phút)",
        teacherActivity: "Hướng dẫn HS phân tích bài tập trong phiếu: Tìm đại từ xưng hô, thay thế từ lặp trong đoạn văn ngắn.",
        studentActivity: "Đọc kĩ đề bài trong phiếu, thảo luận cặp đôi làm bài."
      },
      {
        name: "3. Luyện tập (12-15 phút)",
        teacherActivity: "Hướng dẫn HS thực hành viết 3 dòng chữ hoa/câu ứng dụng vào vở rèn chữ. Viết đoạn văn 3-4 câu có dùng đại từ.",
        studentActivity: "Tập trung viết chữ cẩn thận vào vở. Hoàn thành đoạn văn ngắn."
      },
      {
        name: "4. Hoạt động vận dụng và trải nghiệm (3-5 phút)",
        teacherActivity: "Chấm chữa bài trực tiếp cho 5 HS hoàn thành sớm. Tuyên dương những bài viết chữ đẹp.",
        studentActivity: "Nộp vở chấm bài, lắng nghe GV nhận xét góp ý."
      }
    ],
    postLessonAdjustment: ".....................................................................................................................................................\n......................"
  },

  // 18. THỨ SÁU - TIẾT 2 SÁNG: TIẾNG VIỆT 5 (Tiết 21)
  "5-w3-tv-7": {
    id: "5-w3-tv-7",
    grade: 5,
    subject: "TIẾNG VIỆT 5",
    subSubject: "Đọc mở rộng",
    periodNumber: 2,
    curriculumPeriod: 21,
    lessonTitle: "BÀI 6: NGÔI SAO SÂN CỎ (TIẾT 4: ĐỌC MỞ RỘNG)",
    week: 3,
    dayOfWeek: "Thứ Sáu",
    dateStr: "25/09/2026",
    teacherName: "Nguyễn Hoàng Tuấn",
    className: "5A",
    schoolName: "Trường Tiểu học Tân Thạnh",
    objectives: {
      specificCompetencies: [
        "Tìm đọc được sách báo, câu chuyện về đề tài thể thao, tinh thần đồng đội hoặc ước mơ tuổi trẻ. Biết ghi chép Phiếu đọc sách."
      ],
      generalCompetencies: [
        "Năng lực tự chủ, tự học, năng lực tìm kiếm thông tin."
      ],
      qualities: [
        "Chăm đọc sách, yêu thích thể thao và hoạt động lành mạnh."
      ],
      integrations: {
        digitalCompetence: "NLS 1.1.CB1a: Tìm đọc sách an toàn trên thư viện số."
      }
    },
    materials: {
      teacher: ["Một số cuốn sách thiếu nhi, tuyển tập truyện và thơ hay về chủ điểm thể thao, đoàn kết", "Mẫu Phiếu đọc sách chuẩn in sẵn cho học sinh", "Slide hướng dẫn tiêu chí chia sẻ sách"],
      student: ["Sách truyện, báo thiếu nhi chuẩn bị trước theo chủ điểm", "Phiếu đọc sách cá nhân ghi chép cảm nhận và chi tiết yêu thích"]
    },
    activities: [
      {
        name: "1. Hoạt động mở đầu (5 phút)",
        teacherActivity: "Giới thiệu mục tiêu tiết Đọc mở rộng. Tạo không khí đọc sách tích cực.",
        studentActivity: "Chuẩn bị sách truyện đã mang theo."
      },
      {
        name: "2. Hoạt động hình thành kiến thức mới (12-15 phút)",
        teacherActivity: "Hướng dẫn HS cá nhân đọc sách truyện đã chuẩn bị. Điền thông tin vào Phiếu đọc sách (Tên câu chuyện, Tác giả, Nhân vật yêu thích, Bài học rút ra).",
        studentActivity: "Đọc sách cá nhân giữ trật tự. Hoàn thành Phiếu đọc sách cẩn thận."
      },
      {
        name: "3. Luyện tập (12-15 phút)",
        teacherActivity: "Tổ chức cho HS chia sẻ câu chuyện mình vừa đọc trong nhóm 4. Gọi 3 HS đại diện chia sẻ trước lớp.",
        studentActivity: "Chia sẻ trong nhóm. Tự tin giới thiệu câu chuyện hay trước lớp."
      },
      {
        name: "4. Hoạt động vận dụng và trải nghiệm (3-5 phút)",
        teacherActivity: "Tuyên dương các phiếu đọc sách hay, góc đọc sách hoạt động tích cực. Dặn dò tiếp tục duy trì thói quen đọc sách.",
        studentActivity: "Trưng bày Phiếu đọc sách lên góc học tập của lớp."
      }
    ],
    postLessonAdjustment: ".....................................................................................................................................................\n......................"
  },

  // 19. THỨ SÁU - TIẾT 3 SÁNG: TOÁN 5 (Tiết 15)
  "5-w3-t-5": {
    id: "5-w3-t-5",
    grade: 5,
    subject: "TOÁN 5",
    periodNumber: 3,
    curriculumPeriod: 15,
    lessonTitle: "BÀI 8: ÔN TẬP HÌNH HỌC VÀ ĐO LƯỜNG (TIẾT 1)",
    week: 3,
    dayOfWeek: "Thứ Sáu",
    dateStr: "25/09/2026",
    teacherName: "Nguyễn Hoàng Tuấn",
    className: "5A",
    schoolName: "Trường Tiểu học Tân Thạnh",
    objectives: {
      specificCompetencies: [
        "Củng cố kiến thức về góc nhọn, góc tù, góc bẹt, hai đường thẳng vuông góc, hai đường thẳng song song. Ôn tập đơn vị đo diện tích, độ dài."
      ],
      generalCompetencies: [
        "Năng lực tư duy không gian hình học, thực hành đo lường."
      ],
      qualities: [
        "Cẩn thận, chính xác khi sử dụng thước và ê-ke."
      ],
      integrations: {
        digitalCompetence: "NLS 1.1.CB2b."
      }
    },
    materials: {
      teacher: ["Bộ thước vẽ hình khổ lớn trên bảng lớp: thước thẳng chia vạch cm/mm, ê-ke, compa lớn", "Bài giảng điện tử tương tác (PPTX) ôn tập hình học và đo lường", "Phiếu bài tập nhóm"],
      student: ["Thước thẳng chia vạch cm/mm, ê-ke, compa (đồ dùng đo vẽ hình)", "Phiếu bài tập thực hành đo đạc và vẽ hình"]
    },
    activities: [
      {
        name: "1. Hoạt động mở đầu (5 phút)",
        teacherActivity: "Tổ chức trò chơi 'Nhận diện hình nhanh' qua hình ảnh slide chiếu.",
        studentActivity: "Đoán tên các loại góc và quan hệ hai đường thẳng."
      },
      {
        name: "2. Hoạt động hình thành kiến thức mới (12-15 phút)",
        teacherActivity: "Ôn tập lý thuyết: Dùng ê-ke kiểm tra góc vuông, hai đường thẳng vuông góc và song song. Bảng đổi đơn vị đo độ dài và diện tích.",
        studentActivity: "Nhắc lại kiến thức lý thuyết hình học và đơn vị đo."
      },
      {
        name: "3. Luyện tập (12-15 phút)",
        teacherActivity: "Hướng dẫn HS làm Bài 1 (dùng ê-ke kiểm tra góc), Bài 2 (đổi đơn vị đo diện tích m2, dm2, cm2), Bài 3 (toán thực tế diện tích) trong SGK.",
        studentActivity: "Thực hành vẽ hình, kiểm tra góc bằng ê-ke. Làm bài tập vào vở."
      },
      {
        name: "4. Hoạt động vận dụng và trải nghiệm (3-5 phút)",
        teacherActivity: "Đưa bài toán đố tính diện tích mặt bàn học sinh. Tóm tắt tiết học.",
        studentActivity: "Tính nhanh kết quả, trả lời dõng dạc."
      }
    ],
    postLessonAdjustment: ".....................................................................................................................................................\n......................"
  },

  // 20. THỨ SÁU - TIẾT 4 SÁNG: HĐTN (Tiết 9) - SINH HOẠT LỚP TÍCH HỢP AN TOÀN GIAO THÔNG
  "5-w3-hdtn-3": {
    id: "5-w3-hdtn-3",
    grade: 5,
    subject: "HĐTN",
    subSubject: "Sinh hoạt lớp",
    periodNumber: 4,
    curriculumPeriod: 9,
    lessonTitle: "SINH HOẠT LỚP: CÂN BẰNG CẢM XÚC & AN TOÀN GIAO THÔNG",
    week: 3,
    dayOfWeek: "Thứ Sáu",
    dateStr: "25/09/2026",
    teacherName: "Nguyễn Hoàng Tuấn",
    className: "5A",
    schoolName: "Trường Tiểu học Tân Thạnh",
    objectives: {
      specificCompetencies: [
        "Tự đánh giá hoạt động học tập, nề nếp trong tuần; thống nhất phương hướng tuần tới. Tham gia sinh hoạt chủ đề 'Cân bằng cảm xúc'. Nhận biết các vị trí/tình huống giao thông bị che khuất tầm nhìn có nguy cơ tai nạn và biết cách phòng tránh an toàn."
      ],
      generalCompetencies: [
        "Năng lực tự quản, tự tin phát biểu ý kiến, làm chủ cảm xúc; phán đoán nguy cơ và xử lý tình huống giao thông an toàn."
      ],
      qualities: [
        "Trung thực, tôn trọng, yêu thương giúp đỡ bạn bè; có ý thức chấp hành Luật Giao thông đường bộ."
      ],
      integrations: {
        lifeSkills: "Tích hợp Giáo dục kỹ năng sống, quản lý cảm xúc bản thân và Giáo dục Văn hóa giao thông an toàn."
      }
    },
    materials: {
      teacher: ["Sổ chủ nhiệm, bảng tổng hợp thi đua tuần 3, kế hoạch tuần 4", "Video clip/hình ảnh tư liệu chuyên đề An toàn giao thông: Tình huống giao thông bị che khuất tầm nhìn", "Slide bài giảng sinh hoạt chủ đề, máy chiếu"],
      student: ["Sổ theo dõi thi đua của ban cán sự và tổ trưởng", "Phiếu tự đánh giá rèn luyện cá nhân tuần qua", "Tài liệu An toàn giao thông 5"]
    },
    activities: [
      {
        name: "1. Hoạt động mở đầu (5 phút)",
        teacherActivity: "Bắt nhịp bài hát tập thể vui nhộn; trình chiếu video ngắn về tình huống giao thông nơi tầm nhìn bị che khuất để dẫn dắt sinh hoạt.",
        studentActivity: "Cả lớp hát vang và vỗ tay theo nhịp; quan sát video và hào hứng hưởng ứng."
      },
      {
        name: "2. Sơ kết tuần qua (10-12 phút)",
        teacherActivity: "Mời Lớp trưởng, các Tổ trưởng báo cáo thi đua tuần qua. GVCN nhận xét toàn diện, khen ngợi cá nhân tiến bộ, nhắc nhở nề nếp.",
        studentActivity: "Các tổ trưởng đọc bảng tổng kết. Cả lớp lắng nghe, tự đối chiếu bản thân và vỗ tay chúc mừng bạn được tuyên dương."
      },
      {
        name: "3. Sinh hoạt chủ đề: Cân bằng cảm xúc & An toàn giao thông (15-18 phút)",
        teacherActivity: "• Nội dung 1 (Cân bằng cảm xúc): Hướng dẫn HS thảo luận cách giải tỏa căng thẳng, làm chủ cảm xúc khi gặp chuyện không vừa ý.\n• Nội dung 2 (An toàn giao thông): Cho HS quan sát tranh/ảnh các vị trí che khuất tầm nhìn (đoạn đường cua gấp, sau xe buýt đỗ, ngõ hẻm khuất tường). Hướng dẫn quy tắc an toàn: Đi chậm, giảm tốc độ, bấm chuông/còi cảnh báo, dừng lại quan sát.",
        studentActivity: "• Chia sẻ câu chuyện cá nhân, sắm vai thể hiện cảm xúc tích cực.\n• Thảo luận nhóm chỉ ra các điểm nguy hiểm bị che khuất tầm nhìn và thực hành nêu cách xử lý an toàn."
      },
      {
        name: "4. Hoạt động vận dụng và trải nghiệm (3-5 phút)",
        teacherActivity: "Phổ biến phương hướng nhiệm vụ tuần 4. Phân công trực nhật. Nhắc nhở HS luôn cảnh giác khi đi đường hằng ngày và nâng cao ý thức chấp hành an toàn giao thông.",
        studentActivity: "Ghi chép phương hướng vào sổ tay, quyết tâm thi đua tuần tới. Ghi nhớ quy tắc an toàn giao thông."
      }
    ],
    postLessonAdjustment: ".....................................................................................................................................................\n......................"
  }
};

export const CURRICULUM_GRADES: Grade[] = [1, 2, 3, 4, 5];

/**
 * Generate full week Lesson Plans (KHBD) for all items in the schedule
 * When schoolInfo.teacherType === "homeroom", specialist subjects (taught by specialist teachers)
 * are excluded by default so that homeroom teachers only generate KHBD for their directly taught subjects.
 */
export function generateFullWeekLessonPlans(
  schoolInfo: any,
  scheduleItems: ScheduleItem[],
  options?: { includeSpecialistInHomeroom?: boolean }
): LessonPlan[] {
  const plans: LessonPlan[] = [];
  const isHomeroom = schoolInfo.teacherType === "homeroom";
  const includeSpecialist = options?.includeSpecialistInHomeroom ?? false;

  // For homeroom teachers, filter out specialist and departmental subjects taught by other teachers
  // Tiết HĐTN thứ 2 (CC/SHDC) và thứ 6 (SHL) luôn do GVCN dạy
  const targetItems = isHomeroom && !includeSpecialist
    ? scheduleItems.filter((it) => {
        if (it.day === "Thứ Hai" && (it.subject.includes("HĐTN") || it.subSubject?.includes("dưới cờ") || it.note?.includes("Chào cờ"))) {
          return true;
        }
        if (it.day === "Thứ Sáu" && (it.subject.includes("HĐTN") || it.subSubject?.includes("lớp") || it.note?.includes("Sinh hoạt"))) {
          return true;
        }
        // Exclude meeting
        if (it.subject.toUpperCase().includes("HỌP")) return false;
        return !it.note || (!it.note.includes("GV Chuyên") && !it.note.includes("GV Bộ môn"));
      })
    : scheduleItems.filter(it => !it.subject.toUpperCase().includes("HỌP"));

  // Sắp xếp các tiết học theo đúng thứ tự ngày -> buổi -> tiết trước khi sinh KHBD
  const sortedItems = sortScheduleChronologically(targetItems);

  sortedItems.forEach((item, idx) => {
    const itemGrade = (parseInt(item.className.charAt(0)) as Grade) || schoolInfo.grade || 5;

    // Check if we have an existing sample plan that matches this lesson exactly
    const sampleKey = Object.keys(SAMPLE_LESSON_PLANS).find(k => {
      const sp = SAMPLE_LESSON_PLANS[k];
      const matchGrade = sp.grade === itemGrade;
      const matchTitle = sp.lessonTitle.toLowerCase().trim() === item.lessonTitle.toLowerCase().trim() ||
        sp.lessonTitle.toLowerCase().replace(/^(tiết\s*\d+:\s*|bài\s*\d+:\s*)/, "").trim() === 
        item.lessonTitle.toLowerCase().replace(/^(tiết\s*\d+:\s*|bài\s*\d+:\s*)/, "").trim();
      return matchGrade && matchTitle;
    });

    if (sampleKey && SAMPLE_LESSON_PLANS[sampleKey]) {
      const sp = SAMPLE_LESSON_PLANS[sampleKey];
      plans.push({
        ...sp,
        id: `plan-${item.id}-${idx}`,
        grade: itemGrade,
        week: schoolInfo.week,
        dayOfWeek: item.day,
        session: item.session,
        dateStr: item.dateStr || schoolInfo.startDate,
        periodNumber: item.period,
        curriculumPeriod: item.curriculumPeriod || idx + 1,
        teacherName: schoolInfo.teacherName,
        className: item.className || schoolInfo.className,
        schoolName: schoolInfo.schoolName,
        departmentName: schoolInfo.departmentName,
        branchName: schoolInfo.branchName,
        objectives: {
          ...sp.objectives,
          inclusiveEducation: schoolInfo.hasInclusiveEducation
            ? "Học sinh khuyết tật/học hòa nhập được hỗ trợ thực hiện các nhiệm vụ vừa sức theo khả năng cá nhân, được giáo viên và các bạn trong tổ đồng hành giúp đỡ."
            : undefined
        }
      });
      return;
    }

    // Dynamic tailored plan with authentic detailed GDPT 2018 classroom interactions
    const detailed = getDetailedActivitiesForLesson(
      item.subject,
      item.lessonTitle,
      itemGrade,
      item.subSubject,
      item.curriculumPeriod
    );

    const specificCompetencies = detailed.specificCompetencies || [
      `Học sinh nắm vững kiến thức, kĩ năng cơ bản của bài học: ${item.lessonTitle}, vận dụng giải quyết bài tập và tình huống thực tiễn.`
    ];
    const cleanMaterials = sanitizeLessonMaterials(
      detailed.teacherMaterials,
      detailed.studentMaterials,
      item.subject,
      cleanLessonTitleForHeader(item.lessonTitle),
      itemGrade,
      item.subSubject
    );

    const act1Teacher = detailed.act1Teacher;
    const act1Student = detailed.act1Student;
    const act2Teacher = detailed.act2Teacher;
    const act2Student = detailed.act2Student;
    const act3Teacher = detailed.act3Teacher;
    const act3Student = detailed.act3Student;
    const act4Teacher = detailed.act4Teacher;
    const act4Student = detailed.act4Student;

    // Check if Friday SHL to format activities properly
    const isFridaySHL = item.day === "Thứ Sáu" && (item.subject.includes("HĐTN") || item.subSubject?.includes("lớp") || item.lessonTitle.includes("Sinh hoạt"));

    // Dynamic CV 2345 plan
    plans.push({
      id: `plan-${item.id}-${idx}`,
      grade: itemGrade,
      subject: item.subject,
      subSubject: item.subSubject,
      lessonTitle: cleanLessonTitleForHeader(item.lessonTitle),
      periodNumber: item.period,
      curriculumPeriod: item.curriculumPeriod || idx + 1,
      week: schoolInfo.week,
      dayOfWeek: item.day,
      session: item.session,
      dateStr: item.dateStr || schoolInfo.startDate,
      teacherName: schoolInfo.teacherName,
      className: item.className || schoolInfo.className,
      schoolName: schoolInfo.schoolName,
      departmentName: schoolInfo.departmentName,
      branchName: schoolInfo.branchName,
      objectives: {
        specificCompetencies,
        generalCompetencies: [
          "Năng lực tự chủ và tự học: Tự giác chuẩn bị sách vở, đồ dùng học tập; chủ động hoàn thành nhiệm vụ cá nhân.",
          "Năng lực giao tiếp và hợp tác: Tích cực trao đổi, thảo luận nhóm, biết lắng nghe và tôn trọng ý kiến bạn bè.",
          "Năng lực giải quyết vấn đề và sáng tạo: Biết vận dụng kiến thức bài học để xử lý các tình huống thực tiễn linh hoạt."
        ],
        qualities: [
          "Nhân ái, trách nhiệm, chăm chỉ rèn luyện và trung thực trong học tập."
        ],
        inclusiveEducation: schoolInfo.hasInclusiveEducation
          ? "Học sinh khuyết tật/học hòa nhập được hỗ trợ thực hiện các nhiệm vụ vừa sức theo khả năng cá nhân, được giáo viên và các bạn trong tổ đồng hành giúp đỡ."
          : undefined,
        integrations: {
          ai: item.integrationNotes?.includes("AI") ? "Tích hợp AI: Làm quen ứng dụng công nghệ trí tuệ nhân tạo hỗ trợ học tập (1.A1.1 / 4.C4.1)." : undefined,
          digitalCompetence: item.integrationNotes?.includes("NLS") ? "Tích hợp Năng lực số (CV 3456/BGDĐT-GDTH): 1.1.CB1a / 5.2.CB1a - Khám phá và sử dụng công nghệ số an toàn." : undefined,
          humanRights: item.integrationNotes?.includes("QCN") ? "Giáo dục quyền trẻ em (QCN): Tôn trọng sự khác biệt, bình đẳng và an toàn thân thể." : undefined,
          defense: item.integrationNotes?.includes("GDQPAN") ? "Lồng ghép GDQPAN (TT 08/2024): Tự hào truyền thống yêu nước, ý thức bảo vệ chủ quyền quê hương." : undefined,
          nutrition: item.integrationNotes?.includes("GDDD") ? "Giáo dục Dinh dưỡng học đường (GDDD): Lựa chọn thực phẩm lành mạnh, giữ gìn sức khỏe." : undefined,
          stem: item.integrationNotes?.includes("STEM") ? "Giáo dục STEM / Học thông qua chơi: Vận dụng kiến thức liên môn giải quyết vấn đề thực tiễn." : undefined,
          environment: item.integrationNotes?.includes("BVMT") || item.integrationNotes?.includes("Môi trường") ? "Bảo vệ môi trường: Giữ gìn vệ sinh chung, bảo vệ nguồn nước và cây xanh trường lớp." : undefined,
          lifeSkills: item.integrationNotes?.includes("KNS") || isFridaySHL ? "Giáo dục kỹ năng sống, quản lý cảm xúc và văn hóa ứng xử văn minh." : undefined,
        }
      },
      materials: {
        teacher: cleanMaterials.teacher,
        student: cleanMaterials.student
      },
      activities: isFridaySHL ? [
        {
          name: "1. Hoạt động mở đầu (5 phút)",
          teacherActivity: act1Teacher,
          studentActivity: act1Student
        },
        {
          name: "2. Sơ kết tuần qua (10-12 phút)",
          teacherActivity: act2Teacher,
          studentActivity: act2Student
        },
        {
          name: "3. Sinh hoạt chủ đề: Kỹ năng sống & An toàn giao thông (15-18 phút)",
          teacherActivity: act3Teacher,
          studentActivity: act3Student
        },
        {
          name: "4. Hoạt động vận dụng và trải nghiệm (3-5 phút)",
          teacherActivity: act4Teacher,
          studentActivity: act4Student
        }
      ] : [
        {
          name: "1. Hoạt động mở đầu",
          teacherActivity: act1Teacher,
          studentActivity: act1Student
        },
        {
          name: "2. Hoạt động hình thành kiến thức mới",
          teacherActivity: act2Teacher,
          studentActivity: act2Student
        },
        {
          name: "3. Luyện tập",
          teacherActivity: act3Teacher,
          studentActivity: act3Student
        },
        {
          name: "4. Hoạt động vận dụng và trải nghiệm",
          teacherActivity: act4Teacher,
          studentActivity: act4Student
        }
      ],
      postLessonAdjustment: ".....................................................................................................................................................\n......................"
    });
  });

  // Luôn trả về danh sách KHBD được sắp xếp chuẩn xác theo trình tự thời gian
  return sortScheduleChronologically(plans);
}
