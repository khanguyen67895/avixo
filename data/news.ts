export type Article = {
  slug: string;
  img: string;
  category: string;
  date: string;
  title: string;
  desc: string;
  body: (string | { bold: string })[];
};

export const articles: Article[] = [
  {
    slug: "gia-bitcoin-tang-vuot-76000",
    img: "/images/news1.png",
    category: "Phân tích thị trường",
    date: "14 Tháng 5, 2024",
    title: "Giá Bitcoin hôm nay: tăng vượt 76.000 USD khi nhà đầu tư theo dõi đàm phán Mỹ-Iran, phiên điều trần của ông Warsh",
    desc: "Investing.com- Bitcoin đã tăng vượt mốc 76.000 USD trong phiên giao dịch châu Á hôm thứ Ba, mở rộng đà tăng gần đây khi tâm lý rủi ro được cải thiện và hy vọng về tiến triển trong các cuộc đàm phán Mỹ-Iran.",
    body: [
      "Investing.com- Bitcoin đã tăng vượt mốc 76.000 USD trong phiên giao dịch châu Á hôm thứ Ba, mở rộng đà tăng gần đây khi tâm lý rủi ro được cải thiện và hy vọng về tiến triển trong các cuộc đàm phán Mỹ-Iran đã thúc đẩy sự quan tâm đối với các tài sản đầu cơ.",
      "Đồng tiền mã hóa lớn nhất thế giới giao dịch gần nhất tăng 1,6% ở mức 76.045,6 USD vào lúc 03:10 ET (14:10 giờ Việt Nam).",
      { bold: "Nhà đầu tư theo dõi đàm phán Mỹ-Iran trước khi thỏa thuận ngừng bắn kết thúc" },
      "Tâm lý thị trường được hỗ trợ bởi kỳ vọng về sự tham gia ngoại giao giữa Washington và Tehran tại Islamabad, trước thời hạn ngừng bắn sắp đến vào thứ Tư.",
      "Đà tăng được xây dựng dựa trên động lực từ đợt tăng giá tuần trước trên Phố Wall, nơi các chỉ số chứng khoán chính tăng điểm nhờ lo ngại địa chính trị giảm bớt và đà tăng của cổ phiếu công nghệ.",
      "Bitcoin cũng nhận được sự hỗ trợ từ sự quan tâm liên tục của các tổ chức và dòng vốn ổn định vào các sản phẩm đầu tư tài sản kỹ thuật số.",
      { bold: "Phiên điều trần của ông Kevin Warsh, triển vọng Fed được chú ý" },
      "Các nhà đầu tư cũng tập trung vào phiên điều trần xác nhận của ông Kevin Warsh, ứng cử viên của Tổng thống Mỹ Donald Trump để lãnh đạo Cục Dự trữ Liên bang. Phiên điều trần tại Thượng viện vào thứ Ba đang được theo dõi chặt chẽ để tìm manh mới về chính sách lãi suất trong tương lai.",
      "Bài viết này được tạo và dịch với sự hỗ trợ của AI và đã được biên tập viên xem xét. Để biết thêm thông tin, hãy xem Điều Kiện & Điều Khoản của chúng tôi.",
    ],
  },
  {
    slug: "nang-cao-chuan-muc-ai-crypto",
    img: "/images/news2.png",
    category: "Công nghệ tài chính",
    date: "14 Tháng 5, 2024",
    title: "Nâng cao chuẩn mực về trách nhiệm với AI trong lĩnh vực crypto",
    desc: "Binance nhận chứng chỉ ISO/IEC 42001. Binance đã đạt được chứng chỉ ISO/IEC 42001, tiêu chuẩn quản lý AI quốc tế đầu tiên.",
    body: [
      "Binance, sàn giao dịch tiền mã hóa lớn nhất thế giới, vừa công bố đạt được chứng chỉ ISO/IEC 42001 — tiêu chuẩn quản lý hệ thống AI quốc tế đầu tiên được công nhận toàn cầu.",
      "Đây là bước tiến quan trọng trong việc nâng cao tính minh bạch và trách nhiệm trong ứng dụng AI tại các nền tảng tài chính số.",
      { bold: "Ý nghĩa của chứng chỉ ISO/IEC 42001" },
      "ISO/IEC 42001 thiết lập các yêu cầu và hướng dẫn cho tổ chức trong việc xây dựng, triển khai, duy trì và cải thiện liên tục hệ thống quản lý AI.",
      "Việc đạt được chứng chỉ này khẳng định cam kết của Binance trong việc phát triển AI có trách nhiệm, đặt nền tảng tin cậy với người dùng và cơ quan quản lý trên toàn thế giới.",
    ],
  },
  {
    slug: "phan-tich-bien-dong-chau-a",
    img: "/images/news3.png",
    category: "Phân tích thị trường",
    date: "14 Tháng 5, 2024",
    title: "Phân Tích Biến Động Thị Trường Châu Á Hậu Quý 1",
    desc: "Tổng hợp những thay đổi đáng kể trong dòng vốn đầu tư và các chính sách tiền tệ mới nhất tác động đến khu vực.",
    body: [
      "Thị trường châu Á trải qua nhiều biến động đáng kể trong quý đầu năm, khi dòng vốn đầu tư nước ngoài có xu hướng dịch chuyển đáng kể giữa các nền kinh tế khu vực.",
      "Các chính sách tiền tệ thắt chặt tại Mỹ tiếp tục tạo áp lực lên đồng tiền các quốc gia mới nổi châu Á, dẫn đến sự điều chỉnh trong chiến lược phân bổ tài sản của các quỹ đầu tư lớn.",
      { bold: "Dòng vốn FDI vào khu vực Đông Nam Á" },
      "Bất chấp những thách thức về địa chính trị, Đông Nam Á vẫn thu hút lượng lớn vốn FDI, đặc biệt trong lĩnh vực công nghệ và sản xuất. Việt Nam, Indonesia và Thái Lan nổi lên là những điểm đến đầu tư hấp dẫn.",
    ],
  },
  {
    slug: "xu-huong-cong-nghe-mua-sam",
    img: "/images/news1.png",
    category: "Chuyển đổi số trong ngành bán lẻ",
    date: "20 Tháng 5, 2024",
    title: "Xu Hướng Công Nghệ Mới Thúc Đẩy Thói Quen Mua Sắm",
    desc: "Khám phá các giải pháp số và trải nghiệm khách hàng được cải tiến giúp tăng trưởng doanh thu.",
    body: [
      "Làn sóng chuyển đổi số đang tái định hình ngành bán lẻ toàn cầu với tốc độ chưa từng có. Các công nghệ như AI, AR và thanh toán không tiếp xúc đang trở thành tiêu chuẩn mới.",
      { bold: "AI cá nhân hóa trải nghiệm mua sắm" },
      "Các hệ thống gợi ý sản phẩm dựa trên AI giúp tăng tỷ lệ chuyển đổi lên đến 35% trong các nghiên cứu gần đây. Người tiêu dùng ngày càng kỳ vọng được trải nghiệm cá nhân hóa theo thời gian thực.",
    ],
  },
  {
    slug: "vai-tro-doanh-nghiep-bien-doi-khi-hau",
    img: "/images/news2.png",
    category: "Phát triển bền vững và môi trường",
    date: "22 Tháng 5, 2024",
    title: "Vai Trò Của Doanh Nghiệp Trong Cuộc Chiến Biến Đổi Khí Hậu",
    desc: "Phân tích những sáng kiến xanh và phương pháp giảm lượng khí thải trong sản xuất công nghiệp.",
    body: [
      "Biến đổi khí hậu không còn là vấn đề của tương lai — đó là thực tế mà các doanh nghiệp phải đối mặt ngay hôm nay. Áp lực từ nhà đầu tư, người tiêu dùng và cơ quan quản lý đang thúc đẩy các cam kết ESG mạnh mẽ hơn.",
      { bold: "Xu hướng trung hòa carbon trong ngành sản xuất" },
      "Nhiều tập đoàn lớn đã đặt mục tiêu trung hòa carbon vào năm 2040-2050. Các công nghệ thu hồi carbon, năng lượng tái tạo và chuỗi cung ứng xanh đang được đầu tư mạnh mẽ.",
    ],
  },
  {
    slug: "tac-dong-ai-thi-truong-lao-dong",
    img: "/images/news3.png",
    category: "Công nghệ AI và tương lai công việc",
    date: "25 Tháng 5, 2024",
    title: "Tác Động Của Trí Tuệ Nhân Tạo Đến Thị Trường Lao Động",
    desc: "Đánh giá các ngành nghề bị ảnh hưởng và kỹ năng cần thiết để thích nghi trong kỷ nguyên AI.",
    body: [
      "Cuộc cách mạng AI đang tạo ra sự dịch chuyển lớn trong thị trường lao động toàn cầu. Theo báo cáo của WEF, đến năm 2027, khoảng 83 triệu việc làm sẽ bị thay thế trong khi 69 triệu việc làm mới được tạo ra.",
      { bold: "Các ngành chịu tác động mạnh nhất" },
      "Kế toán, nhập liệu, dịch thuật và một phần công việc pháp lý đang đối mặt với nguy cơ tự động hóa cao. Ngược lại, các vai trò đòi hỏi kỹ năng xã hội, tư duy sáng tạo và quản lý AI sẽ tăng trưởng mạnh.",
    ],
  },
  {
    slug: "chien-luoc-swing-trading",
    img: "/images/news1.png",
    category: "Chiến lược giao dịch",
    date: "28 Tháng 5, 2024",
    title: "Chiến Lược Swing Trading Hiệu Quả Trong Thị Trường Biến Động",
    desc: "Hướng dẫn áp dụng các chỉ báo kỹ thuật để xác định điểm vào lệnh tối ưu trong xu hướng ngắn hạn.",
    body: [
      "Swing trading là phương pháp nắm giữ vị thế từ vài ngày đến vài tuần, tận dụng các dao động giá trong xu hướng chính. Đây là chiến lược phù hợp cho nhà đầu tư không có thời gian theo dõi thị trường liên tục.",
      { bold: "Các chỉ báo kỹ thuật quan trọng" },
      "RSI, MACD và Bollinger Bands là bộ ba công cụ phổ biến nhất trong swing trading. Kết hợp với phân tích cấu trúc thị trường (BOS, CHoCH), trader có thể xác định điểm vào lệnh với xác suất thành công cao.",
    ],
  },
  {
    slug: "quan-ly-rui-ro-nha-dau-tu-moi",
    img: "/images/news2.png",
    category: "Hướng dẫn",
    date: "30 Tháng 5, 2024",
    title: "Hướng Dẫn Quản Lý Rủi Ro Cho Nhà Đầu Tư Mới",
    desc: "Các nguyên tắc cơ bản về quản lý vốn và kiểm soát thua lỗ giúp bảo vệ danh mục đầu tư dài hạn.",
    body: [
      "Quản lý rủi ro là nền tảng của mọi chiến lược đầu tư thành công. Nhiều trader mới thường bỏ qua yếu tố này và chỉ tập trung vào tìm kiếm điểm vào lệnh.",
      { bold: "Nguyên tắc 1%: Không bao giờ rủi ro quá 1% tài khoản cho một lệnh" },
      "Áp dụng nguyên tắc này đồng nghĩa với việc bạn cần thua 100 lệnh liên tiếp mới mất toàn bộ tài khoản — điều gần như không thể xảy ra với một hệ thống giao dịch có edge dương.",
    ],
  },
  {
    slug: "blockchain-thanh-toan-toan-cau",
    img: "/images/news3.png",
    category: "Công nghệ tài chính",
    date: "1 Tháng 6, 2024",
    title: "Blockchain Và Tương Lai Của Hệ Thống Thanh Toán Toàn Cầu",
    desc: "Phân tích tiềm năng và thách thức trong việc áp dụng công nghệ blockchain vào hạ tầng tài chính quốc tế.",
    body: [
      "Blockchain đang định hình lại cách thức vận hành của hệ thống tài chính toàn cầu. Từ thanh toán xuyên biên giới đến hợp đồng thông minh, công nghệ này hứa hẹn giảm chi phí và tăng tốc độ giao dịch đáng kể.",
      { bold: "CBDC — Tiền kỹ thuật số của ngân hàng trung ương" },
      "Hơn 130 quốc gia đang nghiên cứu hoặc thí điểm CBDC. Trung Quốc với e-CNY và các nền kinh tế châu Á khác đang dẫn đầu trong cuộc đua số hóa tiền tệ quốc gia.",
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug);
}

export function getRelatedArticles(slug: string, category: string, count = 3): Article[] {
  return articles.filter(a => a.slug !== slug && a.category === category).slice(0, count);
}

export const hotArticles = articles.slice(0, 4);
export const featuredArticle = articles[0];
