import { Grade } from "../types";
import { DetailedLessonActivities } from "./detailedActivitiesHelper";

/**
 * Pedagogical Activity Builder
 * Generates highly granular, textbook-aligned lesson plan activities (KHBD):
 * - Specific Teacher actions (dialogues, game names, structured guidance, concrete exercises)
 * - Specific Student actions (answers, group work roles, mini-blackboard tasks, notebook solving)
 */
export function buildPedagogicalActivities(
  subject: string,
  lessonTitle: string,
  grade: Grade,
  subSubject?: string,
  curriculumPeriod?: number | string
): DetailedLessonActivities {
  const normSub = (subject || "").toLowerCase();
  const normTitle = (lessonTitle || "").toLowerCase();
  const normSubSub = (subSubject || "").toLowerCase();

  // -------------------------------------------------------------------------
  // 1. TIẾNG VIỆT
  // -------------------------------------------------------------------------
  if (normSub.includes("tiếng việt") || normSub === "tv") {
    // Phân môn LUYỆN TỪ VÀ CÂU (LTVC)
    if (normSubSub.includes("ltvc") || normSubSub.includes("luyện từ") || normTitle.includes("ltvc") || normTitle.includes("từ đồng nghĩa") || normTitle.includes("đại từ") || normTitle.includes("từ đa nghĩa") || normTitle.includes("kết từ") || normTitle.includes("danh từ") || normTitle.includes("động từ") || normTitle.includes("tính từ")) {
      return {
        specificCompetencies: [
          `Nắm vững khái niệm, đặc điểm và công dụng của kiến thức bài học: ${lessonTitle} theo chương trình Tiếng Việt lớp ${grade}.`,
          "Biết nhận diện đúng từ loại/hiện tượng ngữ pháp trong câu văn, đoạn văn ngữ liệu SGK.",
          "Vận dụng linh hoạt để đặt câu đúng ngữ pháp, dùng từ chính xác, phong phú và viết đoạn văn sinh động, giàu hình ảnh."
        ],
        teacherMaterials: [
          "Bảng phụ chép sẵn các câu văn mẫu, thẻ từ học tập (thẻ xanh, thẻ đỏ), máy chiếu tương tác, slide bài giảng điện tử."
        ],
        studentMaterials: [
          `SGK Tiếng Việt lớp ${grade}, vở ghi bài, vở bài tập Tiếng Việt, bảng con, bút viết.`
        ],
        act1Teacher: `Tổ chức trò chơi khởi động "Bắn tên tìm từ" hoặc "Ong non tìm mật":\n- GV chiếu 4 câu văn có các từ in đậm lên màn hình. Đặt câu hỏi: "Trong các từ in đậm trên, từ nào chỉ người, từ nào chỉ hoạt động, từ nào dùng để thay thế hoặc nối các vế câu?"\n- Gọi 3-4 HS trả lời nhanh, nhận xét tuyên dương và dẫn dắt: "Để hiểu rõ hơn về bản chất và cách sử dụng các từ ngữ này trong văn cảnh, hôm nay chúng ta cùng tìm hiểu bài: ${lessonTitle}".`,
        act1Student: `Hào hứng tham gia trò chơi, tập trung quan sát các câu văn trên bảng và giơ tay phát biểu:\n- HS 1: "Thưa cô, từ 'chăm chỉ' là từ chỉ đặc điểm ạ!"\n- HS 2: "Từ 'chúng em' dùng để thay thế cho danh từ chỉ người ạ!"\n- Cả lớp lắng nghe GV nhận xét, mở SGK Tiếng Việt lớp ${grade} và ghi tên bài vào vở.`,
        act2Teacher: `- Hướng dẫn hoạt động Khám phá (Hình thành kiến thức mới):\n  + Bước 1: Yêu cầu 1 HS đọc to phần Ngữ liệu (Nhận xét) trong SGK. Cả lớp đọc thầm theo.\n  + Bước 2: Tổ chức thảo luận nhóm 4 theo phiếu học tập trong 5 phút:\n    * Câu hỏi 1: Tìm các từ ngữ được gạch chân trong đoạn văn mẫu.\n    * Câu hỏi 2: So sánh ý nghĩa và tác dụng của các từ đó trong việc diễn đạt câu.\n    * Câu hỏi 3: Nếu thay thế hoặc bỏ các từ ngữ đó đi thì câu văn có thay đổi ý nghĩa không? Vì sao?\n  + Bước 3: Quan sát, hỗ trợ các nhóm gặp khó khăn. Mời đại diện nhóm lên báo cáo.\n  + Bước 4: Chốt kiến thức, giảng giải kĩ điểm mấu chốt và hướng dẫn HS rút ra phần Ghi nhớ trong SGK. Ghi bảng quy tắc trọng tâm.`,
        act2Student: `- 1 HS đọc to ngữ liệu, cả lớp đọc thầm bằng mắt và dùng bút chì gạch chân từ ngữ quan trọng.\n- Thảo luận sôi nổi theo nhóm 4: Nhóm trưởng điều hành, thư kí ghi lại câu trả lời vào phiếu nhóm.\n- Đại diện nhóm 2 đứng lên báo cáo kết quả trước lớp. Các nhóm khác lắng nghe, đối chiếu và bổ sung ý kiến.\n- 2-3 HS đọc to phần Ghi nhớ trong SGK. Cả lớp nhắc lại đồng thanh để khắc sâu kiến thức vào vở ghi.`,
        act3Teacher: `- Tổ chức Luyện tập - Thực hành qua từng bài tập SGK:\n  + Bài tập 1 (Mức độ Nhận biết): Yêu cầu HS đọc đề bài. Hướng dẫn làm mẫu 1 câu. Cho HS làm bài vào bảng con. GV quan sát, yêu cầu cả lớp giơ bảng đồng loạt, nhận xét và sửa lỗi phát âm/chính tả.\n  + Bài tập 2 (Mức độ Thông hiểu): Cho HS thảo luận cặp đôi, lựa chọn từ thích hợp điền vào chỗ trống trong đoạn văn và ghi vào vở bài tập. GV đi vòng quanh lớp theo dõi, chấm chữa tại chỗ cho một số em.\n  + Bài tập 3 (Mức độ Vận dụng): Giao nhiệm vụ đặt 1-2 câu có sử dụng kiến thức bài học (ví dụ: đặt câu có từ đồng nghĩa/đại từ/kết từ). Gọi 3 HS lên bảng viết câu của mình. GV hướng dẫn cả lớp nhận xét về cấu trúc ngữ pháp và tính biểu cảm của câu.`,
        act3Student: `- Bài tập 1: Đọc kĩ đề, suy nghĩ và viết đáp án vào bảng con. Giơ bảng theo hiệu lệnh của GV. 1 HS giải thích lí do chọn đáp án.\n- Bài tập 2: Trao đổi nhóm đôi cùng bạn cùng bàn, thống nhất đáp án và làm bài cẩn thận vào vở bài tập Tiếng Việt.\n- Bài tập 3: Tự giác đặt câu vào vở. 3 HS lên bảng lớp viết câu. Cả lớp quan sát, nhận xét câu của bạn (về dấu câu, từ ngữ, ý nghĩa) và sửa lại bài của mình nếu cần.`,
        act4Teacher: `Đưa ra tình huống vận dụng thực tiễn:\n- GV chiếu một đoạn hội thoại ngắn trong giao tiếp hàng ngày còn mắc lỗi lặp từ hoặc dùng từ chưa chuẩn xác. Yêu cầu HS đóng vai biên tập viên sửa lại cho hay và lịch sự hơn.\n- Tích hợp rèn kỹ năng giao tiếp văn minh, tôn trọng người nghe (QCN & KNS).\n- Nhận xét tinh thần học tập của cả lớp, dặn dò học thuộc phần Ghi nhớ và hoàn thành bài tập còn lại vào VBT.`,
        act4Student: `- Suy nghĩ và xung phong sửa lại đoạn hội thoại: "Thưa cô, chúng ta nên thay từ lặp bằng đại từ phù hợp để câu văn gãy gọn và lịch sự hơn ạ."\n- Lắng nghe GV nhận xét tiết học, ghi nhớ lời dặn dò chuẩn bị bài sau vào sổ tay.`
      };
    }

    // Phân môn VIẾT (Tập làm văn / Viết đoạn văn / Viết bài văn)
    if (normSubSub.includes("viết") || normTitle.includes("viết") || normTitle.includes("kể chuyện") || normTitle.includes("tả phong cảnh") || normTitle.includes("báo cáo") || normTitle.includes("đoạn văn")) {
      return {
        specificCompetencies: [
          `Nắm vững quy trình và cấu trúc bài viết: ${lessonTitle} (gồm Mở bài, Thân bài, Kết bài hoặc Đoạn văn có câu chủ đề).`,
          "Biết quan sát, chọn lọc chi tiết đặc sắc, sử dụng từ ngữ gợi tả, gợi cảm và biện pháp tu từ thích hợp.",
          "Viết được đoạn văn/bài văn hoàn chỉnh, diễn đạt mạch lạc, đúng chính tả và bộc lộ cảm xúc chân thực."
        ],
        teacherMaterials: [
          "Tranh ảnh hoặc video sinh động liên quan đến chủ đề bài viết, bảng phụ tiêu chí đánh giá bài văn hay, bài văn mẫu xuất sắc của học sinh."
        ],
        studentMaterials: [
          `SGK Tiếng Việt lớp ${grade}, vở tập làm văn, sổ tay tích lũy từ ngữ hay, bút viết.`
        ],
        act1Teacher: `Tổ chức hoạt động khởi động "Khơi nguồn cảm xúc":\n- Chiếu chùm ảnh hoặc một đoạn video ngắn 1-2 phút về chủ đề bài viết (cảnh đẹp quê hương, chân dung một người đáng mến hoặc hoạt động ý nghĩa).\n- Đặt câu hỏi: "Khi quan sát những hình ảnh trên, em ấn tượng nhất với điều gì và muốn dùng những từ ngữ nào để miêu tả lại?"\n- Gọi 2-3 HS chia sẻ cảm nhận, GV nhận xét và kết nối vào tiết học: ${lessonTitle}.`,
        act1Student: `- Chăm chú theo dõi hình ảnh/video trên màn hình.\n- HS hào hứng phát biểu: "Em rất thích vẻ đẹp rực rỡ của cánh đồng lúa chín lúc bình minh, em muốn dùng từ 'vàng xuộm', 'ngút ngàn' để tả ạ!"\n- Cả lớp ghi tên bài học vào vở tập làm văn.`,
        act2Teacher: `- Hướng dẫn Khám phá cấu trúc và cách viết:\n  + Bước 1: Yêu cầu 1 HS đọc bài văn/đoạn văn mẫu trong SGK. GV hướng dẫn HS phân tích:\n    * Phần Mở bài: Giới thiệu đối tượng theo cách trực tiếp hay gián tiếp?\n    * Phần Thân bài: Tác giả miêu tả theo trình tự nào (không gian, thời gian hay từ bao quát đến chi tiết)? Các giác quan nào đã được vận dụng (thị giác, thính giác, khứu giác)?\n    * Phần Kết bài: Bộc lộ tình cảm, suy nghĩ gì?\n  + Bước 2: Cho HS thảo luận nhóm đôi tìm những câu văn hay, từ ngữ giàu hình ảnh và các biện pháp so sánh, nhân hóa trong bài mẫu.\n  + Bước 3: Rút ra dàn ý mẫu chung và các lưu ý cần tránh khi viết (tránh liệt kê thô thiển, tránh sai chính tả).`,
        act2Student: `- Theo dõi bài mẫu trong SGK, gạch chân các từ ngữ gợi cảm và câu liên kết đoạn.\n- Trao đổi cặp đôi: Chỉ ra các biện pháp so sánh, nhân hóa đắc địa trong văn bản mẫu.\n- 2 cặp HS trình bày trước lớp. Lớp nhận xét, ghi lại những cách diễn đạt hay vào sổ tay từ ngữ.`,
        act3Teacher: `- Tổ chức Luyện tập - Thực hành viết:\n  + Bước 1: Cho HS lựa chọn đề tài phù hợp với trải nghiệm thực tế của bản thân.\n  + Bước 2: Hướng dẫn HS phác thảo dàn ý ngắn gọn (Mở đầu - Nội dung chính - Kết thúc) vào nháp trong 5 phút.\n  + Bước 3: Dành 15-20 phút cho HS độc lập viết đoạn văn/bài văn vào vở.\n  + GV đi bao quát lớp, kịp thời hỗ trợ các em học sinh viết chậm, gợi ý từ ngữ thay thế cho các câu văn lủng củng.\n  + Bước 4: Mời 2-3 HS đọc bài viết của mình trước lớp. Hướng dẫn cả lớp nhận xét theo các tiêu chí: Đúng chủ đề, diễn đạt trôi chảy, có từ ngữ gợi tả, câu văn giàu cảm xúc.`,
        act3Student: `- Lập dàn ý nhanh vào giấy nháp.\n- Tập trung viết bài vào vở thật nắn nót, cẩn thận, chú ý ngắt câu, đặt dấu câu đúng chỗ.\n- 3 HS tự tin đứng lên đọc bài viết của mình trước lớp. Cả lớp chăm chú lắng nghe, nhận xét ưu điểm và góp ý chân thành cho bạn.`,
        act4Teacher: `- Hướng dẫn tự đánh giá và chỉnh sửa: Yêu cầu HS dùng bút chì tự soát lại bài của mình hoặc đổi chéo vở với bạn cùng bàn để soát lỗi chính tả, lặp từ.\n- Tích hợp giáo dục tình cảm yêu quý con người, cảnh sắc quê hương và ý thức giữ gìn sự trong sáng của tiếng Việt.\n- Nhận xét chung giờ học, dặn dò hoàn thiện bài viết ở nhà.`,
        act4Student: `- Đổi chéo vở cho bạn cùng bàn, kiểm tra và chỉ ra lỗi chính tả giúp bạn sửa lại.\n- Lắng nghe nhận xét của GV, ghi nhớ dặn dò để hoàn thành bài viết thật sạch đẹp.`
      };
    }

    // Phân môn ĐỌC (Tập đọc / Đọc hiểu) mặc định
    return {
      specificCompetencies: [
        `Đọc đúng từ ngữ, câu, đoạn và toàn bộ văn bản: ${lessonTitle}. Biết ngắt nghỉ hơi đúng dấu câu và theo logic ngữ nghĩa.`,
        "Đọc hiểu nội dung chính, các chi tiết nghệ thuật tiêu biểu và thông điệp nhân văn mà tác giả gửi gắm trong bài học.",
        "Biết đọc diễn cảm, thể hiện được cảm xúc và giọng điệu phù hợp với tính cách nhân vật hoặc cảnh sắc miêu tả."
      ],
      teacherMaterials: [
        "Tranh ảnh minh họa bài đọc phóng to hoặc trình chiếu slide, máy tính, bảng phụ ghi các câu văn dài cần luyện ngắt nghỉ."
      ],
      studentMaterials: [
        `SGK Tiếng Việt lớp ${grade}, vở bài tập Tiếng Việt, bút chì thước kẻ.`
      ],
      act1Teacher: `Tổ chức khởi động bằng trò chơi "Mảnh ghép kì diệu":\n- Chiếu 3 bức tranh gợi ý liên quan đến nội dung bài đọc "${lessonTitle}".\n- Đặt câu hỏi tương tác: "Quan sát các bức tranh trên, em liên tưởng đến câu chuyện hoặc cảnh tượng nào? Hãy chia sẻ điều em biết về hình ảnh đó."\n- GV nhận xét câu trả lời của HS, tạo tâm thế hào hứng và giới thiệu vào bài đọc mới: ${lessonTitle}.`,
      act1Student: `- Quan sát hình ảnh trên màn hình, nhanh tay giơ tay phát biểu ý kiến.\n- HS chia sẻ hiểu biết ban đầu về hình ảnh và nhân vật trong bài đọc.\n- Mở SGK Tiếng Việt lớp ${grade}, chuẩn bị tâm thế bước vào giờ luyện đọc.`,
      act2Teacher: `- Hoạt động Khám phá (Luyện đọc đúng & Tìm hiểu bài):\n  + Luyện đọc thành tiếng: GV đọc mẫu toàn bài với giọng truyền cảm, rõ ràng. Hướng dẫn chia đoạn bài đọc (thường 3-4 đoạn). Cho HS đọc nối tiếp câu (GV sửa lỗi phát âm từ khó: r/d, l/n, thanh hỏi/ngã). Cho HS đọc nối tiếp đoạn trước lớp, kết hợp giải nghĩa từ mới ở phần Chú giải SGK. Luyện đọc câu dài trên bảng phụ.\n  + Tìm hiểu bài: Hướng dẫn HS đọc thầm từng đoạn và thảo luận nhóm 4 để trả lời các câu hỏi trong SGK:\n    * Câu 1: Tìm các chi tiết miêu tả sự việc/hoàn cảnh mở đầu bài đọc.\n    * Câu 2: Phân tích hành động, suy nghĩ và cảm xúc của nhân vật chính.\n    * Câu 3: Chi tiết hoặc hình ảnh nào trong bài đọc làm em xúc động hoặc ấn tượng nhất? Vì sao?\n    * Câu 4: Nêu nội dung, ý nghĩa chính của bài đọc.\n  + GV chốt lại nội dung bài học, ghi tóm tắt ý chính lên bảng.`,
      act2Student: `- Lắng nghe GV đọc mẫu, theo dõi ngón tay chỉ vào từng dòng chữ trong SGK.\n- Lần lượt đọc nối tiếp từng câu, luyện phát âm từ khó cá nhân và đồng thanh.\n- Đọc nối tiếp đoạn trong nhóm 4, lắng nghe bạn đọc và sửa lỗi cho nhau.\n- Đọc thầm từng đoạn, tích cực thảo luận nhóm 4 trả lời 4 câu hỏi tìm hiểu bài. Đại diện nhóm đứng dậy trả lời rõ ràng, trích dẫn đúng ngữ liệu trong bài đọc.\n- Rút ra nội dung chính của bài đọc dưới sự định hướng của giáo viên.`,
      act3Teacher: `- Hoạt động Luyện đọc lại và Luyện đọc diễn cảm:\n  + GV chọn 1 đoạn văn/khổ thơ tiêu biểu nhất trong bài đọc, chiếu lên màn hình.\n  + Hướng dẫn kĩ thuật đọc diễn cảm: Chỗ cần đọc giọng tha thiết, chỗ đọc dồn dập, chỗ cần hạ giọng lắng đọng; gạch dưới các từ ngữ cần nhấn giọng.\n  + Đọc mẫu đoạn diễn cảm cho cả lớp nghe.\n  + Tổ chức cho HS luyện đọc theo cặp đôi trong 3 phút.\n  + Tổ chức thi đọc diễn cảm giữa các tổ (mỗi tổ cử 1 đại diện). GV và cả lớp bình chọn bạn đọc truyền cảm nhất.`,
      act3Student: `- Chú ý lắng nghe GV đọc mẫu đoạn diễn cảm, dùng bút chì đánh dấu vào SGK chỗ nhấn giọng, ngắt nghỉ.\n- Luyện đọc cùng bạn cùng bàn: Một bạn đọc, một bạn lắng nghe và nhận xét góp ý.\n- Đại diện 3 tổ tự tin bước lên bục giảng thi đọc diễn cảm. Cả lớp lắng nghe và vỗ tay bình chọn tiết mục đọc xuất sắc nhất.`,
      act4Teacher: `- Hoạt động Vận dụng - Trải nghiệm:\n  + Đặt câu hỏi liên hệ thực tế: "Sau khi học xong bài đọc ${lessonTitle}, em rút ra được bài học gì cho bản thân trong cuộc sống hàng ngày?"\n  + Tích hợp giáo dục lòng nhân ái, tình yêu thiên nhiên, gia đình và nhà trường (QCN & Đạo đức lối sống).\n  + Nhận xét giờ học, biểu dương các em đọc tiến bộ, dặn dò về nhà đọc lại bài cho người thân nghe.`,
      act4Student: `- Suy nghĩ và bộc lộ cảm xúc chân thành: Nêu những việc làm cụ thể bản thân sẽ thực hiện để xứng đáng với thông điệp của bài học.\n- Ghi nhớ lời dặn dò của thầy cô vào sổ tay.`,
    };
  }

  // -------------------------------------------------------------------------
  // 2. TOÁN HỌC
  // -------------------------------------------------------------------------
  if (normSub.includes("toán") || normSub === "t") {
    return {
      specificCompetencies: [
        `Nắm vững bản chất toán học, công thức và quy tắc thực hiện của bài: ${lessonTitle} lớp ${grade}.`,
        "Rèn luyện kỹ năng tính toán thành thạo, chính xác; phân tích và giải quyết trọn vẹn các bài toán có lời văn gắn với thực tiễn.",
        "Phát triển năng lực tư duy logic, mô hình hóa toán học và tính cẩn thận, kiên trì trong học tập."
      ],
      teacherMaterials: [
        "Bộ đồ dùng dạy học Toán tiểu học (que tính, bảng phụ, mô hình phân số, thước đo hình học), bài giảng điện tử tương tác."
      ],
      studentMaterials: [
        `SGK Toán lớp ${grade}, vở bài tập Toán, bảng con, phấn trắng/bút dạ, thước kẻ compa.`
      ],
      act1Teacher: `Tổ chức trò chơi khởi động "Đố bạn giải nhanh" hoặc "Truyền điện":\n- GV nêu 3 phép tính nhẩm hoặc đưa ra một tình huống toán học thực tế ngắn liên quan trực tiếp đến bài "${lessonTitle}".\n- Gọi bất kì học sinh nào trả lời nhanh, bạn đó được quyền "truyền điện" sang bạn tiếp theo.\n- GV nhận xét kết quả, tuyên dương và dẫn vào bài mới: "Để giúp các em nắm vững phương pháp và giải quyết các bài toán dạng này một cách nhanh chóng, chính xác, chúng ta cùng học bài: ${lessonTitle}".`,
      act1Student: `- Tham gia trò chơi hào hứng, tính nhẩm thần tốc và trả lời dõng dạc khi đến lượt.\n- Cả lớp vỗ tay chúc mừng các bạn trả lời đúng.\n- Mở SGK Toán lớp ${grade}, ghi thứ ngày tháng và tên bài học vào vở ô li.`,
      act2Teacher: `- Hoạt động Khám phá (Hình thành kiến thức mới / Quy tắc tính):\n  + Bước 1: GV nêu bài toán tình huống thực tế trong SGK lên bảng. Cho 1 HS đọc to đề bài.\n  + Bước 2: Dùng đồ dùng trực quan hoặc hình vẽ minh họa từng bước bản chất của phép tính/khái niệm mới (cách đặt tính, cách quy đồng, cách xác định hàng số, công thức diện tích/chu vi...).\n  + Bước 3: Đặt hệ thống câu hỏi gợi mở:\n    * "Muốn thực hiện phép tính này, bước đầu tiên chúng ta phải làm gì?"\n    * "Khi đặt tính, các chữ số cùng hàng cần phải được đặt như thế nào?"\n    * "Khi tính, ta thực hiện theo thứ tự từ đâu sang đâu?"\n  + Bước 4: Hướng dẫn HS thảo luận nhóm đôi để tự rút ra quy tắc tính. GV chuẩn hóa quy tắc bằng các bước cụ thể, ghi bảng rõ ràng và cho HS nhắc lại.`,
      act2Student: `- Quan sát hình vẽ và mô hình trực quan trên bảng, tập trung theo dõi các bước làm mẫu của GV.\n- Trả lời các câu hỏi gợi mở của GV:\n  + HS: "Thưa cô, chúng ta phải đặt tính thẳng hàng thẳng cột, dấu phẩy thẳng cột với dấu phẩy ạ!"\n  + HS: "Ta thực hiện tính từ phải sang trái như số tự nhiên ạ!"\n- Thảo luận cặp đôi nhắc lại quy tắc tính cho nhau nghe.\n- 2-3 HS đứng lên phát biểu quy tắc hoàn chỉnh. Cả lớp nhắc lại đồng thanh và ghi nhớ các bước làm bài.`,
      act3Teacher: `- Hoạt động Luyện tập - Thực hành (Bài tập 1, 2, 3 SGK):\n  + Bài tập 1 (Rèn kỹ năng cơ bản - Tính/Đặt tính): Yêu cầu HS đọc đề bài. Cho cả lớp làm 2 phép tính đầu vào bảng con. GV quan sát, chỉnh sửa tư thế viết bảng, cách giơ bảng và chỉ ra ngay lỗi sai (nếu có) để HS rút kinh nghiệm.\n  + Bài tập 2 (Tính giá trị biểu thức / Tìm thành phần chưa biết / Đổi đơn vị đo): Cho HS làm việc độc lập vào vở bài tập. Mời 2 HS lên bảng lớp thực hiện bài giải. GV đi quan sát các bàn, kèm cặp những em tiếp thu chậm, chấm chữa bài tại chỗ cho 5 HS hoàn thành sớm.\n  + Bài tập 3 (Bài toán có lời văn gắn với thực tế): Cho 1 HS đọc to đề bài. GV hướng dẫn phân tích đề:\n    * Bài toán cho biết những dữ kiện gì?\n    * Bài toán yêu cầu tìm cái gì?\n    * Muốn tìm được kết quả, ta phải giải qua mấy bước tính và bằng những phép tính nào?\n  + Cho HS tự trình bày bài giải đầy đủ (lời giải, phép tính, đáp số) vào vở. GV gọi 1 HS lên bảng chữa bài, tổ chức cho cả lớp đối chiếu và nhận xét.`,
      act3Student: `- Bài tập 1: Tập trung đặt tính và tính toán cẩn thận vào bảng con. Giơ bảng dứt khoát khi có hiệu lệnh của GV. Tự giác nhận xét bài của bạn bên cạnh.\n- Bài tập 2: Làm bài vào vở ô li cẩn thận, thẳng hàng, sạch sẽ. 2 bạn lên bảng trình bày rõ ràng từng bước giải.\n- Bài tập 3: Đọc thầm đề bài, tự tóm tắt bài toán vào vở nháp. Viết câu lời giải chuẩn xác, thực hiện phép tính và ghi đáp số đầy đủ vào vở. Quan sát bài chữa trên bảng, đối chiếu kết quả của mình và đổi chéo vở kiểm tra cùng bạn bên cạnh.`,
      act4Teacher: `- Hoạt động Vận dụng - Trải nghiệm:\n  + Đưa ra bài toán đố vui tình huống thực tế gắn với đời sống hàng ngày của học sinh (tính tiền đi siêu thị, chia đều hoa quả cho các bạn, đo kích thước phòng học...).\n  + Hướng dẫn HS cách ước lượng nhanh và vận dụng toán học vào các hoạt động thực tiễn.\n  + Nhận xét, đánh giá kết quả tiết học. Khen ngợi những em có nhiều tiến bộ, tính toán nhanh và chính xác.\n  + Dặn dò hoàn thành các bài tập còn lại vào VBT và chuẩn bị bài học tiếp theo.`,
      act4Student: `- Suy nghĩ nhanh và hào hứng đưa ra đáp án cho bài toán đố vui thực tế.\n- Thấy được sự gần gũi, hữu ích của toán học trong cuộc sống.\n- Lắng nghe GV dặn dò, ghi nhớ nhiệm vụ về nhà vào sổ tay.`,
    };
  }

  // -------------------------------------------------------------------------
  // 3. KHOA HỌC / TỰ NHIÊN VÀ XÃ HỘI
  // -------------------------------------------------------------------------
  if (normSub.includes("khoa học") || normSub.includes("tự nhiên") || normSub.includes("tnxh") || normSub === "kh") {
    return {
      specificCompetencies: [
        `Nêu được các kiến thức cốt lõi về hiện tượng tự nhiên/khoa học của bài: ${lessonTitle}.`,
        "Thực hiện được các thao tác quan sát, thí nghiệm đơn giản, thu thập và xử lý thông tin từ thực tế.",
        "Hình thành thói quen bảo vệ sức khỏe, giữ gìn môi trường sống và có ý thức ứng dụng khoa học vào đời sống."
      ],
      teacherMaterials: [
        "Vật mẫu thật, tranh ảnh phóng to, video khoa học thực tế, dụng cụ thí nghiệm an toàn theo bài học."
      ],
      studentMaterials: [
        `SGK Khoa học / TNXH lớp ${grade}, vở ghi bài, phiếu học tập nhóm, bút dạ.`
      ],
      act1Teacher: `Tổ chức khởi động bằng thí nghiệm vui hoặc câu đố khám phá:\n- GV biểu diễn một hiện tượng khoa học bất ngờ hoặc chiếu đoạn clip 1 phút về hiện tượng tự nhiên trong bài "${lessonTitle}".\n- Đặt câu hỏi kích thích trí tò mò: "Điều gì đã xảy ra và tại sao lại có hiện tượng như vậy? Các em có muốn tự mình khám phá bí mật này không?"\n- GV nhận xét các suy đoán ban đầu của HS và dẫn dắt vào bài học mới.`,
      act1Student: `- Mắt chăm chú theo dõi hiện tượng, ồ lên thích thú.\n- Hào hứng đưa ra các phỏng đoán theo hiểu biết của bản thân.\n- Mở SGK, sẵn sàng tham gia các hoạt động tìm tòi khám phá.`,
      act2Teacher: `- Hướng dẫn Khám phá kiến thức qua quan sát và thí nghiệm:\n  + Bước 1: Chia lớp thành các nhóm 4 hoặc 6 HS. Giao khay dụng cụ thí nghiệm hoặc tranh ảnh quan sát cùng Phiếu học tập.\n  + Bước 2: Hướng dẫn các bước tiến hành thí nghiệm an toàn hoặc các góc quan sát chi tiết.\n  + Bước 3: Nêu câu hỏi định hướng:\n    * Hiện tượng các em quan sát thấy là gì?\n    * Nguyên nhân dẫn đến hiện tượng đó là gì?\n    * Điều đó có ý nghĩa gì đối với đời sống con người và sinh vật?\n  + Bước 4: Theo dõi, hỗ trợ các nhóm thao tác thí nghiệm, nhắc nhở giữ trật tự và vệ sinh.\n  + Bước 5: Mời đại diện nhóm lên bảng trình bày kết quả thí nghiệm/phiếu học tập. GV chốt lại kết luận khoa học chính xác.`,
      act2Student: `- Các nhóm nhận khay đồ dùng học tập, phân công nhóm trưởng điều hành, thư kí ghi chép.\n- Trực tiếp tiến hành thí nghiệm hoặc chăm chú quan sát vật thật theo hướng dẫn.\n- Thảo luận sôi nổi, ghi lại hiện tượng và rút ra nhận xét vào Phiếu học tập.\n- Đại diện nhóm lên bảng dán phiếu học tập, dõng dạc trình bày kết quả. Các nhóm khác đối chiếu, đặt câu hỏi phản biện và bổ sung.\n- Ghi nhớ kết luận khoa học vào vở.`,
      act3Teacher: `- Hướng dẫn Luyện tập và Hệ thống hóa kiến thức:\n  + Yêu cầu HS hoàn thành sơ đồ tư duy tóm tắt nội dung bài học vào vở bài tập.\n  + Cho HS xử lý các bài tập tình huống: Nhận biết hành vi đúng/sai trong việc bảo vệ môi trường, giữ gìn sức khỏe.\n  + GV đi quan sát, chấm chữa bài cho một số HS và sửa chữa các quan niệm sai lầm phổ biến.`,
      act3Student: `- Hoàn thiện bài tập trong VBT cá nhân.\n- 2 HS lên bảng hoàn thành sơ đồ tư duy tóm tắt bài học.\n- Cả lớp quan sát, nhận xét và hoàn thiện bài của mình.`,
      act4Teacher: `- Vận dụng vào đời sống hàng ngày:\n  + Nêu câu hỏi tình huống thực tiễn: "Em và gia đình cần làm gì để ứng dụng kiến thức bài học hôm nay vào việc giữ gìn sức khỏe / bảo vệ môi trường gia đình và trường lớp?"\n  + Tuyên dương các nhóm thực hành tốt, dặn dò chuẩn bị mẫu vật cho bài học tiếp theo.`,
      act4Student: `- Nêu các việc làm cụ thể bản thân sẽ thực hiện ở nhà (tiết kiệm điện nước, ăn uống khoa học, phân loại rác...).\n- Dọn dẹp khay thí nghiệm ngăn nắp, sạch sẽ trước khi kết thúc tiết học.`,
    };
  }

  // -------------------------------------------------------------------------
  // 4. LỊCH SỬ VÀ ĐỊA LÍ
  // -------------------------------------------------------------------------
  if (normSub.includes("lịch sử") || normSub.includes("địa lí") || normSub.includes("ls&đl") || normSub.includes("ls và đl")) {
    return {
      specificCompetencies: [
        `Nắm vững các sự kiện, nhân vật lịch sử hoặc đặc điểm địa lí, tự nhiên, dân cư của bài: ${lessonTitle}.`,
        "Khai thác và sử dụng thành thạo bản đồ, lược đồ, tranh ảnh và tư liệu lịch sử - địa lí.",
        "Bồi dưỡng lòng tự hào dân tộc, tình yêu quê hương đất nước và ý thức bảo vệ chủ quyền lãnh thổ quốc gia."
      ],
      teacherMaterials: [
        "Bản đồ hành chính Việt Nam, lược đồ trận đánh/vùng kinh tế phóng to, video tư liệu lịch sử, slide trình chiếu."
      ],
      studentMaterials: [
        `SGK Lịch sử và Địa lí lớp ${grade}, vở bài tập, thước kẻ bút màu.`
      ],
      act1Teacher: `Tổ chức khởi động bằng trò chơi "Theo dòng lịch sử / Du lịch qua màn ảnh nhỏ":\n- Chiếu một đoạn phóng sự ngắn hoặc đưa ra câu đố về một danh nhân/địa danh liên quan trực tiếp đến bài "${lessonTitle}".\n- Đặt câu hỏi: "Nhân vật/địa danh này gắn liền với sự kiện hào hùng nào của dân tộc ta?"\n- Gọi HS trả lời, nhận xét và dẫn dắt vào bài học mới.`,
      act1Student: `- Theo dõi hình ảnh tư liệu, hào hứng giải câu đố.\n- Tự tin xung phong chia sẻ những hiểu biết ban đầu của mình.\n- Mở SGK, ghi tên bài học vào vở.`,
      act2Teacher: `- Hướng dẫn Khám phá kiến thức qua lược đồ và tư liệu:\n  + Bước 1: Yêu cầu HS đọc thông tin và quan sát hình ảnh/lược đồ trong SGK.\n  + Bước 2: Chia lớp thành các nhóm chuyên gia tìm hiểu từng nội dung:\n    * Nhóm 1 & 2: Tìm hiểu nguyên nhân, hoàn cảnh diễn ra sự kiện / đặc điểm vị trí địa hình.\n    * Nhóm 3 & 4: Tìm hiểu diễn biến chính / đặc điểm khí hậu, sông ngòi, đời sống con người.\n    * Nhóm 5 & 6: Tìm hiểu ý nghĩa lịch sử / vai trò kinh tế và biện pháp bảo tồn.\n  + Bước 3: Tổ chức cho đại diện các nhóm lên chỉ lược đồ/bản đồ và thuyết minh trước lớp.\n  + Bước 4: GV chuẩn hóa kiến thức, giảng giải các chi tiết tiêu biểu và chốt ý chính.`,
      act2Student: `- Đọc kĩ ngữ liệu SGK, quan sát chú giải trên lược đồ/bản đồ.\n- Thảo luận sôi nổi trong nhóm, ghi chép câu trả lời vào bảng phụ nhóm.\n- Đại diện nhóm tự tin cầm que chỉ lên bảng, vừa chỉ vào lược đồ vừa thuyết trình rõ ràng các mốc sự kiện/vị trí địa lí.\n- Cả lớp lắng nghe, ghi chép các ý chính vào vở.`,
      act3Teacher: `- Hướng dẫn Luyện tập:\n  + Giao bài tập hoàn thành dòng thời gian lịch sử hoặc điền bảng thông tin so sánh đặc điểm địa lí vào VBT.\n  + Hướng dẫn HS đọc lại các mốc thời gian và địa danh quan trọng.\n  + Quan sát lớp làm bài, nhận xét và chấm chữa bài cho một số em.`,
      act3Student: `- Làm bài tập vào vở bài tập cá nhân.\n- 2 HS lên bảng hoàn thiện trục thời gian hoặc nối ô thông tin tương ứng.\n- Cả lớp kiểm tra chéo bài nhau dưới sự hướng dẫn của thầy cô.`,
      act4Teacher: `- Vận dụng và Giáo dục lòng yêu nước:\n  + Đặt câu hỏi liên hệ: "Em cảm thấy tự hào nhất về điều gì ở truyền thống dân tộc / vẻ đẹp quê hương? Em sẽ làm gì để góp phần giữ gìn di tích lịch sử / cảnh quan thiên nhiên quê mình?"\n  + Tích hợp giáo dục quốc phòng an ninh, chủ quyền biển đảo Hoàng Sa - Trường Sa.\n  + Nhận xét tiết học và giao nhiệm vụ sưu tầm thêm tư liệu cho bài học sau.`,
      act4Student: `- Bày tỏ cảm xúc tự hào và quyết tâm học tập rèn luyện tốt.\n- Ghi nhớ lời dặn dò và nhiệm vụ sưu tầm tư liệu.`,
    };
  }

  // -------------------------------------------------------------------------
  // 5. ĐẠO ĐỨC
  // -------------------------------------------------------------------------
  if (normSub.includes("đạo đức") || normSub.includes("đđ")) {
    return {
      specificCompetencies: [
        `Nhận biết được chuẩn mực hành vi đạo đức cần thực hiện trong bài: ${lessonTitle}.`,
        "Biết đồng tình với các hành vi đúng đắn và phê phán, không đồng tình với các hành vi sai trái, thiếu chuẩn mực.",
        "Thực hành và duy trì hành vi đạo đức tích cực trong học tập, quan hệ bạn bè, gia đình và cộng đồng xã hội."
      ],
      teacherMaterials: [
        "Video clip tình huống đạo đức ngắn, tranh ảnh minh họa các hành vi ứng xử, phiếu bài tập trắc nghiệm."
      ],
      studentMaterials: [
        `SGK Đạo đức lớp ${grade}, vở bài tập Đạo đức, thẻ bày tỏ ý kiến (thẻ xanh: tán thành, thẻ đỏ: không tán thành).`
      ],
      act1Teacher: `Tổ chức khởi động bằng bài hát hoặc tiểu phẩm ngắn:\n- Cho cả lớp hát vang một bài hát vui tươi về tình cảm bạn bè/thầy cô/gia đình.\n- Đặt câu hỏi kết nối: "Lời bài hát nhắc nhở chúng ta điều gì trong cách đối xử với mọi người xung quanh?"\n- Nhận xét và giới thiệu vào bài học đạo đức: ${lessonTitle}.`,
      act1Student: `- Cả lớp hát múa nhiệt tình theo giai điệu bài hát.\n- HS trả lời câu hỏi và nêu cảm nhận về thông điệp bài hát.\n- Mở SGK Đạo đức sẵn sàng bước vào bài học.`,
      act2Teacher: `- Khám phá chuẩn mực hành vi qua câu chuyện/tình huống:\n  + Cho HS đọc câu chuyện hoặc xem tranh tình huống trong SGK.\n  + Đặt câu hỏi đàm thoại:\n    * Các nhân vật trong truyện đã làm gì?\n    * Em có đồng tình với hành vi đó không? Vì sao?\n    * Nếu là bạn trong câu chuyện, em sẽ xử sự như thế nào?\n  + Rút ra bài học đạo đức chuẩn mực và phân tích ý nghĩa của hành vi tốt.`,
      act2Student: `- Đọc truyện, quan sát tranh tình huống trong SGK.\n- Suy nghĩ và xung phong phát biểu ý kiến: Phân tích rõ hành vi nào là đúng, hành vi nào là chưa đúng.\n- Rút ra lời khuyên đạo đức bổ ích cho bản thân.`,
      act3Teacher: `- Luyện tập - Thực hành bày tỏ ý kiến và Xử lý tình huống:\n  + Hoạt động 1: Trò chơi "Bày tỏ thái độ": Đưa ra 4 tình huống, yêu cầu HS giơ thẻ xanh (tán thành) hoặc thẻ đỏ (không tán thành). Mời một số HS giải thích lí do.\n  + Hoạt động 2: Thảo luận nhóm 4 sắm vai xử lý tình huống thực tế trong SGK. GV theo dõi các nhóm tập luyện và mời 2 nhóm lên thể hiện trước lớp.\n  + Nhận xét, biểu dương cách xử lý thông minh, khéo léo và nhân ái của học sinh.`,
      act3Student: `- Giơ thẻ màu dứt khoát bày tỏ quan điểm cá nhân, tự tin giải thích lí do trước lớp.\n- Sôi nổi thảo luận nhóm 4, phân vai và tập diễn cách xử lý tình huống.\n- Lên thể hiện tiểu phẩm ngắn trước lớp, cả lớp theo dõi và cổ vũ nồng nhiệt.`,
      act4Teacher: `- Vận dụng vào thực tế cuộc sống:\n  + Hướng dẫn HS xây dựng cam kết hành động: Mỗi em nêu 1-2 việc làm cụ thể sẽ thực hiện trong tuần này để thể hiện chuẩn mực đạo đức vừa học.\n  + Tích hợp quyền con người và kĩ năng sống yêu thương, chia sẻ.\n  + Nhận xét giờ học, nhắc nhở các em luôn duy trì việc làm tốt mỗi ngày.`,
      act4Student: `- Tự liên hệ bản thân và chia sẻ việc làm tốt mình sẽ thực hiện ở trường lớp và ở nhà.\n- Cam kết thực hiện đúng lời dạy của thầy cô.`,
    };
  }

  // -------------------------------------------------------------------------
  // 6. CÔNG NGHỆ / TIN HỌC
  // -------------------------------------------------------------------------
  if (normSub.includes("công nghệ") || normSub.includes("tin học") || normSub === "cn" || normSub === "th") {
    return {
      specificCompetencies: [
        `Hiểu rõ nguyên lí, quy trình thiết kế hoặc thao tác kĩ thuật của bài: ${lessonTitle}.`,
        "Thực hiện thành thạo các bước thao tác thực hành an toàn, đúng quy trình kĩ thuật.",
        "Phát huy tư duy sáng tạo, năng lực giải quyết vấn đề và ý thức sử dụng công nghệ an toàn, tiết kiệm."
      ],
      teacherMaterials: [
        "Vật liệu thực hành mẫu (bìa cứng, kéo, hồ dán) hoặc phòng máy tính, bài giảng trình chiếu quy trình các bước."
      ],
      studentMaterials: [
        `SGK Công nghệ / Tin học lớp ${grade}, bộ đồ dùng học tập thực hành.`
      ],
      act1Teacher: `Khởi động bằng trò chơi "Nhà công nghệ nhí":\n- Chiếu hình ảnh sản phẩm công nghệ hoặc một vấn đề cần giải quyết trong đời sống liên quan đến "${lessonTitle}".\n- Hỏi: "Làm thế nào để tạo ra sản phẩm này hoặc giải quyết vấn đề trên bằng công nghệ?"\n- Nhận xét và dẫn vào bài mới.`,
      act1Student: `- Quan sát sản phẩm mẫu, háo hức đưa ra các ý tưởng sáng tạo.\n- Nhận biết mục tiêu tiết học và chuẩn bị đồ dùng thực hành.`,
      act2Teacher: `- Khám phá quy trình công nghệ / kĩ thuật:\n  + Giới thiệu sản phẩm mẫu và hướng dẫn phân tích cấu tạo, công năng.\n  + Trình chiếu và giảng giải từng bước trong quy trình thực hiện (Bước 1: Chuẩn bị -> Bước 2: Tạo hình -> Bước 3: Lắp ráp -> Bước 4: Hoàn thiện).\n  + Hướng dẫn các quy tắc an toàn khi sử dụng công cụ (kéo, dao trổ, thiết bị điện, mạng internet).`,
      act2Student: `- Quan sát kĩ thao tác mẫu của GV, ghi nhớ thứ tự các bước thực hiện.\n- Nhắc lại các quy tắc an toàn lao động trong giờ thực hành.`,
      act3Teacher: `- Tổ chức Thực hành theo nhóm hoặc cá nhân:\n  + Giao nhiệm vụ thực hành tạo sản phẩm hoặc thao tác trên máy tính theo yêu cầu bài học.\n  + Đi từng bàn quan sát, uốn nắn thao tác kĩ thuật, hướng dẫn các em còn lúng túng.\n  + Tổ chức trưng bày và đánh giá sản phẩm: Tiêu chí đúng kĩ thuật, thẩm mĩ, chắc chắn và sáng tạo.`,
      act3Student: `- Trực tiếp bắt tay vào thực hành khéo léo, cẩn thận từng bước.\n- Hoàn thiện sản phẩm và mang lên bàn trưng bày của lớp.\n- Quan sát sản phẩm của các bạn, tham gia bình chọn sản phẩm xuất sắc nhất.`,
      act4Teacher: `- Vận dụng - Đổi mới sáng tạo:\n  + Đặt câu hỏi gợi mở: "Em có thể cải tiến hoặc trang trí sản phẩm này như thế nào để phục vụ học tập và sinh hoạt ở nhà tốt hơn?"\n  + Tuyên dương tinh thần làm việc tích cực, dọn dẹp vệ sinh góc thực hành ngăn nắp.`,
      act4Student: `- Nêu ý tưởng sáng tạo thêm cho sản phẩm.\n- Thu dọn rác thải, cất dụng cụ gọn gàng vào hộp đồ dùng trước khi tan học.`,
    };
  }

  // -------------------------------------------------------------------------
  // 7. HOẠT ĐỘNG TRẢI NGHIỆM (HĐTN) MẶC ĐỊNH
  // -------------------------------------------------------------------------
  return {
    specificCompetencies: [
      `Tích cực tham gia các hoạt động tập thể theo chủ đề: ${lessonTitle} lớp ${grade}.`,
      "Rèn luyện kỹ năng tự quản, giao tiếp tự tin, hợp tác cùng bạn bè và hình thành thói quen nề nếp tốt.",
      "Tự giác thực hiện các hành động tích cực và lan tỏa năng lượng lạc quan trong môi trường học đường."
    ],
    teacherMaterials: [
      "Kế hoạch tuần, loa đài âm thanh, phiếu đánh giá thi đua, máy chiếu bài giảng sinh hoạt chủ đề."
    ],
    studentMaterials: [
      "Trang phục gọn gàng, khăn quàng đỏ, sổ tay đội viên, phiếu ghi chép mục tiêu."
    ],
    act1Teacher: `Tổ chức hoạt động khởi động tạo không khí vui tươi, gắn kết:\n- Hướng dẫn cả lớp chơi trò chơi tập thể "Vòng tròn đoàn kết" hoặc hát vang một bài hát sinh hoạt.\n- Đặt câu hỏi kết nối vào chủ đề sinh hoạt: ${lessonTitle}.`,
    act1Student: `- Toàn thể học sinh tham gia hào hứng, đồng thanh hát và vỗ tay theo nhịp.\n- Sẵn sàng bước vào các hoạt động sinh hoạt tập thể.`,
    act2Teacher: `- Hướng dẫn Khám phá và Chia sẻ trải nghiệm theo chủ đề:\n  + Nêu mục tiêu và nội dung chính của buổi sinh hoạt.\n  + Mời các tổ/cá nhân chia sẻ những việc làm tốt, trải nghiệm thực tế hoặc kết quả thi đua tuần qua.\n  + Đặt câu hỏi định hướng để HS rút ra bài học kinh nghiệm trong học tập và rèn luyện đạo đức.`,
    act2Student: `- Lắng nghe và tích cực giơ tay chia sẻ những trải nghiệm của bản thân.\n- Lắng nghe ý kiến của các bạn trong lớp với tinh thần cầu thị và tôn trọng.`,
    act3Teacher: `- Tổ chức Hoạt động Thực hành - Trải nghiệm theo nhóm:\n  + Chia nhóm thảo luận về các giải pháp rèn luyện nề nếp, xây dựng tình bạn đẹp hoặc lập kế hoạch tuần mới.\n  + Cho các nhóm viết cam kết lên bảng phụ hoặc giấy note dán lên "Cây mục tiêu của lớp".\n  + GV nhận xét, biểu dương tinh thần tự giác của học sinh.`,
    act3Student: `- Thảo luận sôi nổi trong nhóm, đóng góp ý tưởng xây dựng tập thể lớp vững mạnh.\n- Viết mục tiêu hành động cụ thể và trang trí cây mục tiêu của lớp thật đẹp mắt.`,
    act4Teacher: `- Tổng kết và Phương hướng hành động:\n  + Nhắc nhở các nhiệm vụ trọng tâm cần thực hiện trong tuần tới.\n  + Nhắc nhở an toàn khi tham gia giao thông và vui chơi lành mạnh.\n  + Bắt nhịp bài hát kết thúc buổi sinh hoạt ấm áp.`,
    act4Student: `- Tiếp thu nhiệm vụ, ghi chép vào sổ tay và quyết tâm thực hiện tốt phương hướng đã đề ra.`,
  };
}
