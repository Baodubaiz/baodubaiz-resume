import type { ProjectItem } from "../types/project.type";

export const PROJECTS_DATA: Record<"vi" | "en", ProjectItem[]> = {
  vi: [
    {
      id: "qlktx-dormitory-system",
      slug: "qlktx-dormitory-system",
      title: "QLKTX — Hệ Thống Quản Lý Ký Túc Xá Sinh Viên",
      subtitle:
        "Nền tảng số hóa quản lý lưu trú, quy trình xếp chỗ phòng ở và truy vết lịch sử sinh viên",
      category: "Giáo dục & Quản lý Lưu trú",
      categoryKey: "education",
      status: "Hoàn thiện 85–90% (Đồ án Capstone Nghiệm thu Xuất sắc)",
      featured: true,
      role: "Full-stack Developer",

      overviewBrief:
        "Hệ thống số hóa toàn diện quy trình quản lý lưu trú sinh viên, cấu trúc phân cấp từ tòa nhà đến từng giường đơn, hỗ trợ xếp phòng, điều chuyển, trả phòng và bảo toàn tính toàn vẹn lịch sử lưu trú.",
      keyHighlights: [
        "Mô hình hóa dữ liệu quan hệ đa cấp: Đơn vị -> Tòa -> Tầng -> Phòng -> Giường",
        "Ràng buộc giao dịch nghiêm ngặt chống xếp trùng và bảo toàn lịch sử cư trú",
        "Ghi nhận nhật ký kiểm toán (Audit Logs) truy vết mọi thao tác điều chuyển",
        "Tra cứu hành chính đa tiêu chí và xuất dữ liệu báo cáo vận hành",
      ],
      engineeringFocusTags: [
        "Relational Data Modeling",
        "Data Integrity",
        "Business Workflow Validation",
        "State Management",
        "Audit Logging",
      ],
      primaryTechStack: [
        "NestJS",
        "TypeScript",
        "React",
        "PostgreSQL",
        "Prisma ORM",
        "Ant Design",
      ],

      detailedOverview: {
        systemPurpose:
          "Hệ thống quản lý ký túc xá tập trung, giải quyết bài toán thủ công trong phân bổ chỗ ở, quản lý trang thiết bị phòng và theo dõi tình trạng sinh viên lưu trú qua các kỳ học.",
        targetUsers:
          "Ban quản lý ký túc xá, cán bộ quản trị sinh viên, ban quản lý cơ sở vật chất và sinh viên lưu trú.",
        businessNeed:
          "Loại bỏ tình trạng phân bổ trùng giường, thất lạc thông tin lịch sử khi sinh viên luân chuyển phòng, và thiếu dữ liệu đối soát khi tổng hợp báo cáo tỷ lệ lấp đầy.",
        technicalInterest:
          "Bài toán mô hình hóa quan hệ dữ liệu có thứ bậc phức tạp, thiết kế ranh giới giao dịch (transaction boundary) bảo toàn trạng thái, và xây dựng cơ chế audit trail đáng tin cậy.",
      },

      capabilities: [
        {
          id: "student-org-management",
          title: "Quản lý Sinh viên & Tổ chức Học thuật",
          description:
            "Quản lý thông tin hồ sơ sinh viên gắn liền với cấu trúc khoa, lớp và trạng thái cư trú.",
          workflows: [
            "Hồ sơ sinh viên với mã định danh duy nhất và trạng thái học vụ",
            "Phân loại sinh viên theo diện chính sách và ưu tiên xét duyệt chỗ ở",
            "Tìm kiếm nhanh và lọc sinh viên theo nhiều tiêu chí kết hợp",
          ],
        },
        {
          id: "accommodation-management",
          title: "Quản lý Lưu trú & Phân bổ Chỗ ở",
          description:
            "Quản lý toàn bộ cấu trúc không gian và điều phối dòng luân chuyển sinh viên trong ký túc xá.",
          workflows: [
            "Cây phân cấp không gian: Tòa nhà -> Tầng -> Phòng -> Giường",
            "Quy trình tiếp nhận và xếp chỗ sinh viên vào giường khả dụng",
            "Quy trình điều chuyển phòng (Transfer) và trả phòng (Check-out) an toàn",
            "Lưu trữ tự động lịch sử lưu trú theo từng giai đoạn cư trú",
          ],
        },
        {
          id: "facility-asset-management",
          title: "Cơ sở Vật chất & Tài sản Phòng",
          description:
            "Theo dõi trang thiết bị gắn liền với từng đơn vị phòng ở và lịch sử bàn giao.",
          workflows: [
            "Danh mục tài sản theo phòng (giường, bàn học, quạt, đèn, khóa)",
            "Ghi nhận tình trạng hư hỏng và nhật ký bảo trì sửa chữa",
            "Kiểm kê bàn giao tài sản khi sinh viên nhận phòng và rời ký túc xá",
          ],
        },
        {
          id: "reporting-administration",
          title: "Báo cáo Quản trị & Phân quyền Hệ thống",
          description:
            "Cung cấp số liệu thống kê vận hành và kiểm soát truy cập theo vai trò người dùng.",
          workflows: [
            "Thống kê tỷ lệ lấp đầy (Occupancy Rate) theo tòa nhà, tầng và loại phòng",
            "Xuất dữ liệu báo cáo hành chính định dạng bảng tính",
            "Phân quyền truy cập dựa trên vai trò (Role-Based Access Control)",
            "Ghi nhận lịch sử hoạt động hệ thống phục vụ công tác thanh kiểm tra",
          ],
        },
      ],

      challenges: [
        {
          id: "challenge-relational-modeling",
          title: "Mô hình hóa Quan hệ Dữ liệu Đa tầng (Relational Data Modeling)",
          engineeringFocus: [
            "Relational Data Modeling",
            "Data Integrity",
            "Database Constraints",
          ],
          problem: {
            description:
              "Dữ liệu ký túc xá có liên kết chặt chẽ giữa sinh viên, đơn vị học vụ, tòa nhà, tầng, phòng và từng giường đơn lẻ. Nếu thiết kế schema lỏng lẻo sẽ gây dị thường dữ liệu (anomalies), trùng lặp giường hoặc mất liên kết khi sinh viên đổi trạng thái.",
            conditions:
              "Phát sinh khi một sinh viên có thể chuyển đổi phòng nhiều lần trong thời gian học, nhưng tại mỗi thời điểm chỉ được phép giữ duy nhất một giường khả dụng.",
            risk:
              "Hai sinh viên cùng được phân vào một giường, hoặc giường bị treo ở trạng thái bận dù sinh viên đã rời đi, dẫn đến sai lệch số liệu báo cáo.",
          },
          approach: {
            description:
              "Thiết kế schema chuẩn hóa (Normalized) trên PostgreSQL qua Prisma ORM với các ràng buộc quan hệ toàn vẹn.",
            mechanisms: [
              "Thiết lập composite unique constraints trên cặp (bedId, status = 'ACTIVE') để ngăn xếp trùng tại mức database",
              "Tách biệt bảng phân bổ hiện tại (Current Assignment) và bảng lịch sử lưu trú (Accommodation History)",
              "Khai báo Foreign Key cascades có chọn lọc, ngăn chặn việc vô tình xóa phòng khi còn sinh viên đang lưu trú",
            ],
          },
          tradeoffs: {
            benefits: [
              "Bảo đảm tính toàn vẹn dữ liệu tuyệt đối ngay tại tầng database engine",
              "Dễ dàng truy vấn báo cáo phân tích theo từng cấp độ tòa nhà hoặc khóa sinh viên",
            ],
            complexities: [
              "Yêu cầu các câu truy vấn JOIN có cấu trúc chặt chẽ trong Prisma",
              "Lưu vết lịch sử làm tăng số lượng bản ghi cần quản lý và lập chỉ mục",
            ],
            justification:
              "Đối với nghiệp vụ quản lý hành chính cơ sở, tính đúng đắn dữ liệu là ưu tiên số một so với sự linh hoạt lỏng lẻo.",
          },
        },
        {
          id: "challenge-state-transitions",
          title: "Kiểm soát Chuyển đổi Trạng thái Lưu trú & Ranh giới Giao dịch",
          engineeringFocus: [
            "Business Workflow Validation",
            "State Management",
            "Data Consistency",
          ],
          problem: {
            description:
              "Quy trình chuyển phòng hoặc trả phòng tác động đồng thời lên nhiều bản ghi: cập nhật sinh viên, giải phóng giường cũ, đánh dấu nhận giường mới và tạo dòng lịch sử.",
            conditions:
              "Xảy ra khi nhiều thao tác chuyển đổi được thực hiện đồng thời vào các mùa cao điểm đầu năm học.",
            risk:
              "Nếu một thao tác thành phần thất bại giữa chừng (ví dụ: mất kết nối khi vừa giải phóng giường cũ nhưng chưa lưu giường mới), dữ liệu sẽ rơi vào trạng thái mâu thuẫn.",
          },
          approach: {
            description:
              "Đóng gói quy trình chuyển đổi thành một business workflow khép kín được bảo vệ bởi Prisma Interactive Transactions (`$transaction`).",
            mechanisms: [
              "Kiểm tra tiền điều kiện: giường đích phải đang ở trạng thái 'VACANT' và sinh viên không có vi phạm tồn đọng",
              "Thực thi cập nhật trạng thái giường cũ, giường mới và đóng kỳ lưu trú cũ trong một transaction duy nhất",
              "Tự động rollback toàn bộ nếu có bất kỳ lỗi xác thực nào xảy ra trong chuỗi thao tác",
            ],
          },
          tradeoffs: {
            benefits: [
              "Loại bỏ hoàn toàn trạng thái dữ liệu dở dang hoặc mất dấu vết sinh viên",
              "Đảm bảo số đếm số lượng chỗ trống luôn khớp chính xác với thực tế",
            ],
            complexities: [
              "Mã nguồn tầng service phải xử lý nhiều kịch bản validation và exception cụ thể",
              "Cần giữ thời gian thực thi của transaction ngắn để tránh chiếm dụng kết nối database",
            ],
            justification:
              "Sự toàn vẹn của trạng thái phòng ốc là cốt lõi của hoạt động vận hành ký túc xá.",
          },
        },
        {
          id: "challenge-auditability",
          title: "Khả năng Kiểm toán & Truy vết Vận hành (Audit Logging)",
          engineeringFocus: [
            "Audit Logging",
            "Operational Traceability",
            "Data Retention",
          ],
          problem: {
            description:
              "Cán bộ ký túc xá cần tra cứu lại lịch sử ai đã phân bổ phòng, thời điểm điều chuyển, lý do thay đổi và người phê duyệt khi có khiếu nại hoặc kiểm toán.",
            conditions:
              "Diễn ra khi có tranh chấp xếp chỗ hoặc thanh tra cơ sở vật chất từ phía nhà trường.",
            risk:
              "Không có chứng cứ xác định trách nhiệm cá nhân nếu xảy ra sai phạm trong quá trình xếp phòng.",
          },
          approach: {
            description:
              "Xây dựng cơ chế ghi vết hoạt động tự động tại tầng backend NestJS kết hợp bảng lưu trữ lịch sử chuyên biệt.",
            mechanisms: [
              "NestJS Interceptor tự động bắt các request làm thay đổi dữ liệu (POST, PUT, DELETE)",
              "Ghi nhận userId, actionType, timestamp, ipAddress và dữ liệu thay đổi trước/sau",
              "Bảng lịch sử cư trú bất biến (Append-only) không cho phép xóa sửa thủ công",
            ],
          },
          tradeoffs: {
            benefits: [
              "Khả năng truy vết 100% các quyết định xếp chỗ và điều chuyển nhân sự",
              "Minh bạch hóa quá trình vận hành của ban quản lý",
            ],
            complexities: [
              "Gia tăng dung lượng lưu trữ cho bảng audit log",
              "Cần chính sách lọc bỏ dữ liệu nhạy cảm (như mật khẩu) trước khi ghi log",
            ],
            justification:
              "Là yêu cầu bắt buộc đối với các hệ thống quản trị hành chính công và giáo dục.",
          },
        },
        {
          id: "challenge-search-reporting",
          title: "Tối ưu Truy vấn Tìm kiếm Đa tiêu chí & Báo cáo",
          engineeringFocus: ["Query Design", "Filtering", "Indexing", "Reporting"],
          problem: {
            description:
              "Nhu cầu tìm kiếm hồ sơ kết hợp theo khoa, khóa, tòa nhà, trạng thái đóng phí và loại phòng. Tải toàn bộ dữ liệu về trình duyệt để filter sẽ làm chậm giao diện nghiêm trọng.",
            conditions:
              "Phát sinh khi quy mô dữ liệu đạt hàng nghìn sinh viên với hàng chục thuộc tính liên kết.",
            risk:
              "Thời gian phản hồi trang quản trị kéo dài, gây ức chế cho nhân viên vận hành trong đợt cao điểm.",
          },
          approach: {
            description:
              "Thực hiện truy vấn động và phân trang trực tiếp tại database PostgreSQL thông qua Prisma query builder.",
            mechanisms: [
              "Thêm B-Tree Index trên các cột tìm kiếm tần suất cao: studentCode, roomId, status, academicYear",
              "Chuẩn hóa tham số query DTO với class-validator trong NestJS",
              "Hỗ trợ phân trang offset kết hợp trả về metadata tổng số bản ghi phục vụ UI",
            ],
          },
          tradeoffs: {
            benefits: [
              "Thời gian phản hồi tìm kiếm duy trì dưới 100ms trên tập dữ liệu mô phỏng lớn",
              "Giảm thiểu băng thông mạng giữa client và server",
            ],
            complexities: [
              "Index làm tăng nhẹ dung lượng lưu trữ và thời gian thực thi thao tác INSERT/UPDATE",
            ],
            justification:
              "Tần suất tra cứu trong hệ thống quản trị vượt trội so với tần suất tạo mới, do đó indexing là quyết định tối ưu.",
          },
        },
      ],

      architecture: {
        summary:
          "Hệ thống xây dựng theo mô hình Client-Server phân tách. Frontend là ứng dụng React Single Page Application giao tiếp qua RESTful APIs với Backend NestJS cấu trúc module hóa, kết nối PostgreSQL qua Prisma ORM.",
        components: [
          {
            layer: "Frontend Client",
            name: "React + TypeScript SPA",
            description:
              "Giao diện quản trị phát triển với React, Vite, Ant Design và Tailwind CSS. Tối ưu trải nghiệm nhập liệu, quản lý form và bảng dữ liệu.",
            status: "implemented",
          },
          {
            layer: "Backend Application",
            name: "NestJS Modular REST API",
            description:
              "Kiến trúc phân tầng Controller - Service - Repository với TypeScript. Quản lý xác thực JWT, phân quyền Guards và validation Pipes.",
            status: "implemented",
          },
          {
            layer: "Persistence & Data Access",
            name: "PostgreSQL & Prisma ORM",
            description:
              "Cơ sở dữ liệu quan hệ lưu trữ hồ sơ, không gian ký túc xá và bảng vết lịch sử. Quản lý schema migration qua Prisma.",
            status: "implemented",
          },
          {
            layer: "Deployment & Hosting",
            name: "Vercel Platform",
            description:
              "Triển khai ứng dụng client và các serverless API endpoints với quy trình CI/CD tích hợp qua Git.",
            status: "implemented",
          },
        ],
        workflowSteps: [
          {
            step: "01",
            actor: "Quản trị viên",
            action: "Khởi tạo yêu cầu xếp/chuyển phòng",
            detail:
              "Chọn sinh viên và giường đích từ sơ đồ phòng trực quan trên UI",
          },
          {
            step: "02",
            actor: "NestJS Service",
            action: "Kiểm tra tiền điều kiện & Mở Transaction",
            detail:
              "Kiểm tra giường đích có trống và sinh viên có đủ điều kiện lưu trú",
          },
          {
            step: "03",
            actor: "Prisma $transaction",
            action: "Cập nhật nguyên tử 4 thực thể",
            detail:
              "Chuyển trạng thái giường cũ -> Gán giường mới -> Cập nhật sinh viên -> Ghi lịch sử",
          },
          {
            step: "04",
            actor: "Audit Interceptor",
            action: "Ghi nhận vết hoạt động",
            detail:
              "Lưu log sự kiện điều chuyển với timestamp và mã nhân viên thực hiện",
          },
        ],
      },

      techStackDetailed: [
        {
          category: "Frontend & Giao diện",
          items: [
            {
              name: "React 19 & TypeScript",
              purpose: "Xây dựng giao diện ứng dụng quản trị dạng SPA",
            },
            {
              name: "Vite",
              purpose: "Công cụ build siêu tốc và tối ưu asset bundle",
            },
            {
              name: "Ant Design",
              purpose: "Bộ component doanh nghiệp cho bảng dữ liệu, modal, và form",
            },
            {
              name: "Tailwind CSS",
              purpose: "Tùy biến layout, typography và hệ thống màu sắc hiện đại",
            },
          ],
        },
        {
          category: "Backend & Dịch vụ",
          items: [
            {
              name: "NestJS",
              purpose:
                "Framework backend Node.js cấu trúc module hóa, áp dụng Dependency Injection",
            },
            {
              name: "TypeScript",
              purpose:
                "Đảm bảo an toàn kiểu dữ liệu end-to-end từ DTO đến Database model",
            },
            {
              name: "Class-Validator & Transformer",
              purpose: "Xác thực dữ liệu đầu vào tại các HTTP pipes",
            },
          ],
        },
        {
          category: "Cơ sở Dữ liệu & Lưu trữ",
          items: [
            {
              name: "PostgreSQL",
              purpose: "RDBMS đảm bảo tính toàn vẹn quan hệ ACID",
            },
            {
              name: "Prisma ORM",
              purpose:
                "Type-safe database client, schema migration và transaction management",
            },
          ],
        },
        {
          category: "Triển khai & Vận hành",
          items: [
            {
              name: "Vercel",
              purpose: "Nền tảng hosting ứng dụng với quy trình CI tự động",
            },
            {
              name: "Git & GitHub",
              purpose: "Quản lý phiên bản mã nguồn và luồng feature branch",
            },
          ],
        },
      ],

      contribution: {
        roleTitle: "Full-stack Developer (Đảm nhiệm toàn bộ vòng đời phát triển)",
        implementedFeatures: [
          "Thiết kế cấu trúc dữ liệu quan hệ và lược đồ Prisma schema cho toàn bộ các thực thể",
          "Xây dựng trọn bộ RESTful API endpoints cho quản lý sinh viên, tòa nhà, phòng và giường",
          "Cài đặt thuật toán xác thực quy trình chuyển phòng và ghi nhận lịch sử lưu trú tự động",
          "Phát triển giao diện quản trị React với hệ thống bộ lọc đa điều kiện và form nhập liệu",
        ],
        architecturalDecisions: [
          "Lựa chọn NestJS kết hợp Prisma để đảm bảo tính module hóa và type-safety chặt chẽ",
          "Áp dụng nguyên tắc ranh giới giao dịch (Transaction boundary) bảo vệ trạng thái phòng ốc",
          "Tách bạch dữ liệu trạng thái hiện thời và lịch sử cư trú nhằm tối ưu truy vấn",
        ],
        integrationsAndDevOps: [
          "Thiết lập cấu hình triển khai trên nền tảng Vercel",
          "Viết tài liệu kiểm thử và hướng dẫn vận hành hệ thống",
        ],
      },

      outcomes: {
        verificationStatus:
          "Hoàn thành 85–90% chức năng thực tế; nghiệm thu capstone bảo vệ đồ án với kết quả xuất sắc.",
        points: [
          "Hoàn thành đầy đủ các kịch bản kiểm thử điều chuyển phòng và kiểm tra toàn vẹn dữ liệu",
          "Xác thực khả năng chống xung đột giường với các kịch bản thao tác đồng thời",
          "Hệ thống hoạt động ổn định trên môi trường kiểm thử với dữ liệu giả lập tương đương ký túc xá thực tế",
        ],
        confidentialityNote:
          "Không hiển thị bất kỳ thông tin định danh cá nhân (PII) thực tế của sinh viên trong mã nguồn và bản demo công khai.",
      },

      links: {
        githubUrl: "https://github.com/Baodubaiz",
        liveUrl: "https://baodubaiz-resume.vercel.app",
        caseStudyUrl: "#projects",
      },
    },

    {
      id: "novatech-ecommerce-platform",
      slug: "novatech-ecommerce-platform",
      title: "NovaTech — Nền Tảng Thương Mại Điện Tử Laptop & Linh Kiện",
      subtitle:
        "Hệ thống e-commerce chuyên sâu phần cứng với kiến trúc Java Spring Boot, tích hợp PayOS và đồng bộ tồn kho",
      category: "Thương mại Điện tử & Phần cứng",
      categoryKey: "ecommerce",
      status: "Dự án Cá nhân Đang Phát triển (Đã Nghiệm thu Sandbox)",
      featured: true,
      role: "Full-stack Developer (Trọng tâm Kỹ thuật Backend)",

      overviewBrief:
        "Nền tảng thương mại điện tử chuyên biệt cho laptop và linh kiện công nghệ. Tập trung giải quyết bài toán mô hình hóa thông số kỹ thuật đa dạng, kiểm soát tranh chấp tồn kho khi đặt hàng đồng thời, xử lý webhook thanh toán bất đồng bộ và phân phối tài nguyên media qua AWS.",
      keyHighlights: [
        "Mô hình hóa thông số kỹ thuật linh hoạt lấy cảm hứng từ cấu trúc EAV",
        "Kiểm soát tranh chấp tồn kho với ranh giới giao dịch @Transactional",
        "Tích hợp Webhook thanh toán PayOS với xác thực chữ ký và máy trạng thái đơn hàng",
        "Bảo mật Spring Security với JWT và xoay vòng Refresh Token an toàn",
      ],
      engineeringFocusTags: [
        "Concurrency Control",
        "Data Modeling",
        "Payment Integration",
        "Webhook Processing",
        "Session Lifecycle",
        "Cloud Storage",
      ],
      primaryTechStack: [
        "Java 17",
        "Spring Boot",
        "Spring Data JPA",
        "PostgreSQL",
        "Next.js",
        "PayOS",
        "AWS S3 & CloudFront",
      ],

      detailedOverview: {
        systemPurpose:
          "Nền tảng e-commerce chuyên ngành phục vụ nhu cầu tra cứu cấu hình chi tiết, mua sắm laptop, linh kiện máy tính và thanh toán trực tuyến bảo mật.",
        targetUsers:
          "Người dùng mua sắm thiết bị công nghệ, kỹ sư phần cứng cần tra cứu thông số kỹ thuật chính xác, và quản trị viên bán hàng.",
        businessNeed:
          "Yêu cầu quản lý danh mục sản phẩm có cấu hình kỹ thuật biến đổi phức tạp, ngăn chặn triệt để tình trạng bán vượt tồn kho (overselling) và xử lý thanh toán tự động không phụ thuộc can thiệp thủ công.",
        technicalInterest:
          "Xử lý các bài toán kinh điển trong kỹ thuật phần mềm: concurrency control trong e-commerce, thiết kế schema mở rộng linh hoạt, idempotency trong xử lý sự kiện webhook và triển khai hạ tầng cloud.",
      },

      capabilities: [
        {
          id: "catalog-variants",
          title: "Danh mục Sản phẩm & Biến thể Phần cứng",
          description:
            "Quản lý thông tin sản phẩm đa biến thể (RAM, SSD, GPU, màu sắc) và cấu hình thông số kỹ thuật chi tiết.",
          workflows: [
            "Quản lý phân cấp Sản phẩm -> Biến thể (SKU) với mã vạch và giá riêng",
            "Hệ thống thông số kỹ thuật tùy biến theo danh mục (CPU, màn hình, tản nhiệt)",
            "Lọc sản phẩm theo thương hiệu, tầm giá và thông số phần cứng",
            "Trang chi tiết sản phẩm hiển thị thông số dạng bảng kỹ thuật chuẩn hóa",
          ],
        },
        {
          id: "checkout-payment",
          title: "Quy trình Đặt hàng & Tích hợp Thanh toán PayOS",
          description:
            "Điều phối luồng mua hàng trực tuyến, tạo liên kết thanh toán và xác thực giao dịch tự động.",
          workflows: [
            "Giỏ hàng client với lưu trữ trạng thái đồng bộ Zustand",
            "Tạo phiên thanh toán PayOS và chuyển hướng người dùng an toàn",
            "Lắng nghe webhook thanh toán từ PayOS và cập nhật trạng thái đơn hàng tức thời",
            "Theo dõi lịch sử đơn hàng và biên lai giao dịch",
          ],
        },
        {
          id: "inventory-orders",
          title: "Quản lý Tồn kho & Vòng đời Đơn hàng",
          description:
            "Kiểm soát số lượng tồn kho theo thời gian thực và thực thi máy trạng thái đơn hàng.",
          workflows: [
            "Kiểm tra khả dụng tồn kho tại thời điểm checkout",
            "Khấu trừ tồn kho an toàn trước điều kiện tranh chấp đồng thời",
            "Máy trạng thái đơn hàng: Chờ thanh toán -> Đã thanh toán -> Đang giao -> Hoàn tất / Đã hủy",
            "Tự động hoàn trả tồn kho khi đơn hàng bị hủy hoặc quá thời hạn thanh toán",
          ],
        },
        {
          id: "auth-security",
          title: "Xác thực Bảo mật & Quản lý Phiên",
          description:
            "Bảo vệ tài khoản và phân quyền chức năng quản trị với Spring Security và JWT.",
          workflows: [
            "Đăng ký, đăng nhập và phân quyền theo vai trò (Customer, Admin)",
            "Cấp phát Access Token thời hạn ngắn kết hợp Refresh Token an toàn",
            "Cơ chế xoay vòng Refresh Token (Token Rotation) chống tái sử dụng trái phép",
          ],
        },
        {
          id: "media-devops",
          title: "Phân phối Media Đám mây & Tự động hóa Triển khai",
          description:
            "Lưu trữ hình ảnh trên AWS S3, phân phối qua CloudFront CDN và tự động hóa CI/CD.",
          workflows: [
            "Upload hình ảnh sản phẩm lên AWS S3 và phân phối qua CloudFront edge cache",
            "Cấu hình reverse proxy Nginx trên máy chủ EC2 với chứng chỉ bảo mật SSL",
            "Pipeline CI/CD tự động kiểm thử và build ứng dụng qua GitHub Actions & GitLab Runner",
          ],
        },
      ],

      challenges: [
        {
          id: "challenge-eav-modeling",
          title: "Mô hình hóa Thông số Kỹ thuật Linh hoạt (Flexible Product Modeling)",
          engineeringFocus: [
            "Data Modeling",
            "Schema Flexibility",
            "Database Design",
          ],
          problem: {
            description:
              "Các nhóm linh kiện (laptop, card đồ họa, vi xử lý, màn hình) sở hữu bộ thông số kỹ thuật hoàn toàn khác nhau. Một bảng cơ sở dữ liệu cứng với hàng chục cột nullable sẽ nhanh chóng trở nên cồng kềnh, khó bảo trì và dễ lỗi khi thêm danh mục mới.",
            conditions:
              "Mỗi khi mở rộng thêm ngành hàng mới (ví dụ: màn hình tần số quét cao, bàn phím cơ hot-swap) hệ thống buộc phải thay đổi schema nếu dùng bảng tĩnh.",
            risk:
              "Bảng dữ liệu phình to với các giá trị null phân mảnh, migration database phức tạp và tiềm ẩn nguy cơ downtime khi sửa schema.",
          },
          approach: {
            description:
              "Tách biệt thực thể sản phẩm cốt lõi (Core Product) và áp dụng mô hình Entity-Attribute-Value (EAV) có kiểm soát cho thông số kỹ thuật biến động.",
            mechanisms: [
              "Thực thể ProductVariant lưu trữ SKU, giá bán, tồn kho và hình ảnh đại diện",
              "Bảng ProductAttribute và ProductAttributeValue lưu trữ cặp (thuộc tính, giá trị) có liên kết chặt chẽ",
              "Validation schema tại tầng Spring Boot DTO để kiểm tra tính hợp lệ của định dạng thuộc tính trước khi lưu",
            ],
          },
          tradeoffs: {
            benefits: [
              "Khả năng mở rộng thông số cho danh mục mới tức thời mà không cần migrate schema database",
              "Dễ dàng cấu hình hiển thị bảng thông số kỹ thuật động trên giao diện Next.js",
            ],
            complexities: [
              "Truy vấn lọc theo nhiều thông số kỹ thuật cùng lúc đòi hỏi câu lệnh JOIN phức tạp",
              "Cần đánh chỉ mục composite trên cặp (attribute_id, value) để duy trì tốc độ tìm kiếm",
            ],
            justification:
              "Thương mại điện tử phần cứng đòi hỏi tính linh hoạt cao về thông số kỹ thuật mà vẫn đảm bảo cơ sở dữ liệu gọn gàng.",
          },
        },
        {
          id: "challenge-inventory-concurrency",
          title: "Kiểm soát Tranh chấp Tồn kho Đặt hàng Đồng thời (Inventory Concurrency)",
          engineeringFocus: [
            "Concurrency Control",
            "Race Conditions",
            "Transaction Management",
          ],
          problem: {
            description:
              "Khi có nhiều khách hàng cùng checkout một sản phẩm số lượng có hạn tại cùng một thời điểm, các luồng đọc dữ liệu song song có thể cùng thấy tồn kho hợp lệ và tiến hành trừ kho, dẫn đến bán vượt quá số lượng thực có (overselling).",
            conditions:
              "Xảy ra phổ biến trong các đợt flash sale, giảm giá hoặc khi sản phẩm chỉ còn 1-2 chiếc.",
            risk:
              "Khách hàng đã thanh toán nhưng không có hàng để giao, gây tổn hại uy tín thương hiệu và phát sinh chi phí hoàn tiền thủ công.",
          },
          approach: {
            description:
              "Thiết lập ranh giới giao dịch @Transactional nghiêm ngặt trong Spring Data JPA kết hợp cơ chế khóa phù hợp.",
            mechanisms: [
              "Sử dụng khóa bi quan (Pessimistic Write Lock) trên bản ghi kho hàng tại thời điểm xác nhận thanh toán",
              "Tái kiểm tra điều kiện tồn kho ngay sau khi giữ khóa trước khi thực hiện phép trừ số lượng",
              "Xử lý ngoại lệ tranh chấp và thông báo thân thiện cho người dùng nếu sản phẩm đã hết hàng trong quá trình xử lý",
            ],
          },
          tradeoffs: {
            benefits: [
              "Triệt tiêu hoàn toàn khả năng bán vượt tồn kho (Zero Overselling Guarantee)",
              "Dữ liệu tồn kho luôn phản ánh đúng thực tế trong suốt vòng đời đơn hàng",
            ],
            complexities: [
              "Khóa bản ghi làm tăng thời gian chờ của các transaction cạnh tranh",
              "Cần giữ phạm vi và thời gian thực thi của transaction ở mức tối thiểu để duy trì throughput",
            ],
            justification:
              "Trong thương mại bán lẻ thiết bị giá trị cao, tính toàn vẹn tồn kho quan trọng hơn việc tối ưu hóa vi mô thời gian xử lý vài mili-giây.",
          },
        },
        {
          id: "challenge-webhook-processing",
          title: "Xử lý Sự kiện Webhook Thanh toán PayOS An toàn & Nhất quán",
          engineeringFocus: [
            "Payment Integration",
            "Webhook Processing",
            "State Consistency",
          ],
          problem: {
            description:
              "Webhook từ cổng thanh toán bên thứ ba (PayOS) truyền qua mạng công cộng có thể bị chậm trễ, gửi lặp lại nhiều lần (duplicate retries), hoặc bị kẻ xấu cố tình giả mạo dữ liệu gửi lên endpoint.",
            conditions:
              "Mạng chập chờn khiến cổng thanh toán không nhận được phản hồi 200 OK ngay và kích hoạt cơ chế retry tự động.",
            risk:
              "Đơn hàng bị cập nhật sai trạng thái, xử lý cộng điểm/giao hàng trùng lặp, hoặc bị tấn công giả mạo thanh toán thành công.",
          },
          approach: {
            description:
              "Xây dựng pipeline xử lý webhook đa tầng với xác thực chữ ký số và máy trạng thái đơn hàng.",
            mechanisms: [
              "Xác thực chữ ký HMAC checksum của PayOS trước khi đọc payload để ngăn chặn giả mạo",
              "Ánh xạ mã giao dịch với bản ghi Order trong cơ sở dữ liệu và kiểm tra trạng thái hiện thời",
              "Chỉ cho phép chuyển trạng thái theo luồng hợp lệ (ví dụ: chỉ chuyển từ PENDING sang PAID)",
              "Lưu vết mã giao dịch để từ chối xử lý trùng lặp nếu webhook cùng mã được gửi lại",
            ],
          },
          tradeoffs: {
            benefits: [
              "Ngăn chặn 100% các request giả mạo không có chữ ký số hợp lệ từ nhà cung cấp",
              "Đảm bảo tính lũy thừa (Idempotency) khi cổng thanh toán retry sự kiện nhiều lần",
            ],
            complexities: [
              "Đòi hỏi cấu hình an toàn cho secret key và xử lý đúng múi giờ/thời gian hết hạn",
              "Cần có cơ chế log chi tiết payload sự kiện để phục vụ đối soát khi cần thiết",
            ],
            justification:
              "Thanh toán trực tiếp liên quan đến dòng tiền thực tế, đòi hỏi tiêu chuẩn bảo mật và tính toàn vẹn cao nhất.",
          },
        },
        {
          id: "challenge-query-optimization",
          title: "Tối ưu Truy vấn Danh mục Sản phẩm & Kết xuất SSR",
          engineeringFocus: [
            "Query Optimization",
            "Indexing",
            "Pagination",
            "SSR",
          ],
          problem: {
            description:
              "Danh mục thiết bị điện tử có hàng nghìn sản phẩm với nhiều biến thể. Tìm kiếm, lọc nhiều điều kiện kết hợp phân trang nếu không được tối ưu sẽ gây quét toàn bộ bảng (full table scan) làm quá tải database.",
            conditions:
              "Khi người dùng kết hợp lọc nhiều tiêu chí: khoảng giá, thương hiệu và thông số RAM/GPU.",
            risk:
              "Thời gian tải trang danh mục bị kéo dài, điểm Core Web Vitals giảm sút và ảnh hưởng xấu đến tỷ lệ chuyển đổi khách hàng.",
          },
          approach: {
            description:
              "Thực hiện phân trang và lọc dữ liệu trực tiếp tại tầng PostgreSQL thông qua Spring Data JPA Pageable kết hợp SSR Next.js.",
            mechanisms: [
              "Đánh chỉ mục B-tree trên các trường thường xuyên tìm kiếm và sắp xếp: price, brand, categoryId, createdAt",
              "Sử dụng Server-Side Rendering (SSR) trong Next.js cho trang chi tiết sản phẩm để tối ưu SEO và TTFB",
              "Tách biệt DTO tóm tắt cho trang danh mục và DTO chi tiết đầy đủ cho trang sản phẩm",
            ],
          },
          tradeoffs: {
            benefits: [
              "Tốc độ truy vấn danh mục ổn định dưới 60ms ngay cả khi lọc phức tạp",
              "Tối ưu hóa khả năng thu thập dữ liệu của công cụ tìm kiếm (SEO) với SSR",
            ],
            complexities: [
              "Index làm tăng dung lượng lưu trữ trên đĩa và tiêu tốn thêm tài nguyên khi ghi sản phẩm mới",
              "SSR đòi hỏi cấu hình cache phù hợp để tránh tạo tải lặp lại lên backend",
            ],
            justification:
              "Trang danh mục và sản phẩm là mặt tiền của e-commerce, tối ưu tốc độ mang lại giá trị kinh doanh trực tiếp.",
          },
        },
        {
          id: "challenge-auth-token-rotation",
          title: "Xác thực JWT & Cơ chế Xoay vòng Refresh Token An toàn",
          engineeringFocus: [
            "Authentication",
            "Authorization",
            "Session Lifecycle",
          ],
          problem: {
            description:
              "Người dùng cần duy trì đăng nhập liền mạch mà không phải nhập lại mật khẩu thường xuyên. Nếu refresh token có thời hạn dài mà không có cơ chế thu hồi, một khi bị đánh cắp kẻ gian có thể duy trì quyền truy cập vĩnh viễn.",
            conditions:
              "Phát sinh khi người dùng sử dụng ứng dụng trên thiết bị công cộng hoặc kết nối mạng không an toàn.",
            risk:
              "Lộ refresh token dẫn đến chiếm đoạt tài khoản người dùng mà hệ thống không có cách nào phát hiện.",
          },
          approach: {
            description:
              "Áp dụng quy trình Refresh Token Rotation với Spring Security và JWT.",
            mechanisms: [
              "Access Token có thời hạn ngắn (15 phút) nhằm hạn chế tối đa rủi ro khi bị lộ",
              "Mỗi lần cấp mới Access Token, một Refresh Token hoàn toàn mới được sinh ra và token cũ bị hủy ngay lập tức",
              "Lưu vết token cũ trong cơ sở dữ liệu: nếu một refresh token đã hủy được gửi lại, hệ thống lập tức phát hiện nguy cơ và hủy toàn bộ phiên làm việc liên quan",
            ],
          },
          tradeoffs: {
            benefits: [
              "Phát hiện và ngăn chặn lập tức các hành vi tái sử dụng token bị đánh cắp",
              "Cân bằng hoàn hảo giữa tính bảo mật nghiêm ngặt và trải nghiệm người dùng mượt mà",
            ],
            complexities: [
              "Xử lý race condition phía frontend khi nhiều API calls đồng thời cùng kích hoạt refresh token",
              "Yêu cầu lưu trữ trạng thái token phía server thay vì stateless hoàn toàn",
            ],
            justification:
              "Bảo vệ thông tin thanh toán và đơn hàng của khách hàng là ưu tiên tiên quyết trong thương mại điện tử.",
          },
        },
        {
          id: "challenge-cloud-media-delivery",
          title: "Phân phối Tài nguyên Media qua AWS Cloud & Triển khai Tự động",
          engineeringFocus: [
            "Cloud Storage",
            "CDN",
            "Deployment Automation",
            "CI/CD",
          ],
          problem: {
            description:
              "Hình ảnh sản phẩm độ phân giải cao nếu lưu trực tiếp trên máy chủ ứng dụng sẽ làm cạn kiệt dung lượng đĩa và chiếm dụng băng thông server khi nhiều người cùng truy cập.",
            conditions:
              "Hệ thống chứa hàng nghìn ảnh sản phẩm chất lượng cao với nhiều góc chụp và biến thể màu.",
            risk:
              "Tải trang chậm chạp, máy chủ ứng dụng bị quá tải I/O và việc sao lưu dữ liệu trở nên cồng kềnh.",
          },
          approach: {
            description:
              "Tách biệt hoàn toàn tầng lưu trữ tĩnh sang AWS S3 và phân phối qua mạng biên Amazon CloudFront CDN.",
            mechanisms: [
              "Lưu trữ tệp hình ảnh an toàn trên bucket AWS S3 với quyền truy cập private",
              "CloudFront đóng vai trò CDN cache tài nguyên tại các edge location gần người dùng nhất",
              "Triển khai ứng dụng backend Spring Boot trên máy chủ EC2 phía sau reverse proxy Nginx với chứng chỉ SSL",
              "Thiết lập pipeline CI/CD qua GitHub Actions & GitLab Runner để tự động kiểm thử và deploy",
            ],
          },
          tradeoffs: {
            benefits: [
              "Giảm tải 90% băng thông và I/O cho máy chủ ứng dụng chính",
              "Tốc độ tải ảnh siêu tốc cho người dùng từ mọi vị trí địa lý",
            ],
            complexities: [
              "Phát sinh chi phí dịch vụ đám mây AWS và cần quản trị cấu hình phân quyền IAM",
              "Cần cơ chế vô hiệu hóa cache (cache invalidation) khi cập nhật hình ảnh sản phẩm",
            ],
            justification:
              "Kiến trúc đám mây chuẩn mực cho e-commerce giúp hệ thống sẵn sàng mở rộng quy mô mà không phải thay đổi mã nguồn.",
          },
        },
      ],

      architecture: {
        summary:
          "Hệ thống gồm Frontend Next.js tương tác với Backend Spring Boot nguyên khối theo mô hình phân tầng chuẩn. Dữ liệu lưu trữ trên PostgreSQL, hình ảnh phân phối qua AWS S3 + CloudFront, thanh toán xử lý qua PayOS, và toàn bộ hạ tầng được tự động hóa triển khai.",
        components: [
          {
            layer: "Frontend Storefront",
            name: "Next.js App Router (TypeScript)",
            description:
              "Giao diện thương mại điện tử với SSR cho trang sản phẩm, kết hợp Zustand cho quản lý state giỏ hàng và Tailwind CSS.",
            status: "implemented",
          },
          {
            layer: "Backend Application",
            name: "Java 17 & Spring Boot",
            description:
              "Hệ thống backend cung cấp RESTful APIs, Spring Security JWT, quản lý giao dịch và xử lý webhook thanh toán.",
            status: "implemented",
          },
          {
            layer: "Data Persistence",
            name: "PostgreSQL & Spring Data JPA",
            description:
              "Lưu trữ danh mục sản phẩm, biến thể EAV, đơn hàng, người dùng và bản ghi kiểm soát tồn kho.",
            status: "implemented",
          },
          {
            layer: "Payment Gateway",
            name: "PayOS Payment Gateway",
            description:
              "Cổng thanh toán trực tuyến qua mã QR và tài khoản ngân hàng với webhook thông báo trạng thái tức thời.",
            status: "external",
          },
          {
            layer: "Cloud Media & CDN",
            name: "AWS S3 & Amazon CloudFront",
            description:
              "Lưu trữ đối tượng hình ảnh sản phẩm và phân phối qua mạng lưới máy chủ biên CDN toàn cầu.",
            status: "implemented",
          },
          {
            layer: "Infrastructure & CI/CD",
            name: "AWS EC2 + Nginx SSL + GitHub Actions",
            description:
              "Máy chủ ảo EC2 với reverse proxy Nginx, chứng chỉ SSL Let's Encrypt và pipeline tự động hóa CI/CD.",
            status: "implemented",
          },
        ],
        workflowSteps: [
          {
            step: "01",
            actor: "Khách hàng",
            action: "Chọn biến thể & Tiến hành Checkout",
            detail:
              "Khách hàng chọn cấu hình laptop và gửi yêu cầu tạo đơn hàng",
          },
          {
            step: "02",
            actor: "Spring Boot Service",
            action: "Khóa Tồn kho & Tạo Phiên Thanh toán",
            detail:
              "Khóa bản ghi kho hàng, trừ tồn kho tạm giữ và gọi PayOS API tạo link thanh toán",
          },
          {
            step: "03",
            actor: "PayOS Gateway",
            action: "Xác nhận chuyển khoản & Bắn Webhook",
            detail:
              "Khách hàng quét mã QR, PayOS gửi webhook kèm chữ ký HMAC về hệ thống",
          },
          {
            step: "04",
            actor: "Backend Webhook Handler",
            action: "Xác thực Chữ ký & Cập nhật Trạng thái Đơn",
            detail:
              "Kiểm tra checksum, đối chiếu đơn hàng và chuyển trạng thái sang PAID an toàn",
          },
        ],
      },

      techStackDetailed: [
        {
          category: "Frontend & Trải nghiệm Người dùng",
          items: [
            {
              name: "Next.js (App Router)",
              purpose: "SSR cho trang sản phẩm và SEO, Client components cho luồng mua hàng",
            },
            {
              name: "TypeScript",
              purpose: "Đảm bảo tính chặt chẽ của kiểu dữ liệu sản phẩm và giỏ hàng",
            },
            {
              name: "Zustand",
              purpose: "Quản lý state giỏ hàng nhẹ nhàng với tính năng persist vào local storage",
            },
            {
              name: "Tailwind CSS",
              purpose: "Xây dựng hệ thống giao diện dark mode hiện đại, responsive",
            },
          ],
        },
        {
          category: "Backend & Nền tảng Doanh nghiệp",
          items: [
            {
              name: "Java 17 & Spring Boot 3",
              purpose: "Xây dựng hệ thống backend hiệu năng cao, ổn định và an toàn",
            },
            {
              name: "Spring Data JPA & Hibernate",
              purpose: "Mô hình hóa thực thể quan hệ, quản lý giao dịch và truy vấn tối ưu",
            },
            {
              name: "Spring Security",
              purpose: "Hệ thống bảo mật bộ lọc JWT, phân quyền RBAC và quản lý phiên",
            },
          ],
        },
        {
          category: "Cơ sở Dữ liệu & Thanh toán",
          items: [
            {
              name: "PostgreSQL",
              purpose: "Cơ sở dữ liệu chính với hỗ trợ indexing đa dạng và transaction ACID",
            },
            {
              name: "PayOS Gateway",
              purpose: "Cổng thanh toán trực tuyến qua VietQR và chuyển khoản tự động",
            },
          ],
        },
        {
          category: "Đám mây & Vận hành (DevOps)",
          items: [
            {
              name: "AWS S3 & CloudFront",
              purpose: "Lưu trữ hình ảnh sản phẩm và phân phối tốc độ cao qua CDN",
            },
            {
              name: "AWS EC2 & Nginx",
              purpose: "Máy chủ lưu trữ backend, reverse proxy và quản lý chứng chỉ SSL",
            },
            {
              name: "GitHub Actions & GitLab Runner",
              purpose: "Tự động hóa linting, unit test, build Docker và deploy",
            },
          ],
        },
      ],

      contribution: {
        roleTitle: "Full-stack Developer (Trọng tâm Kỹ thuật Backend & Hạ tầng)",
        implementedFeatures: [
          "Thiết kế cấu trúc bảng cơ sở dữ liệu quan hệ và các thực thể JPA cho sản phẩm, biến thể và thuộc tính",
          "Xây dựng dịch vụ quản lý giỏ hàng, đặt hàng và logic khóa trừ tồn kho chống overselling",
          "Tích hợp cổng thanh toán PayOS và xây dựng bộ xử lý webhook an toàn với xác thực chữ ký",
          "Cấu hình Spring Security với filter chain xác thực JWT và cơ chế xoay vòng Refresh Token",
          "Phát triển giao diện storefront Next.js với giỏ hàng Zustand và trang chi tiết sản phẩm",
        ],
        architecturalDecisions: [
          "Áp dụng cấu trúc EAV có chọn lọc để hỗ trợ thông số kỹ thuật đa dạng mà không làm vỡ schema",
          "Sử dụng khóa bi quan có kiểm soát tại ranh giới giao dịch thanh toán để triệt tiêu tranh chấp tồn kho",
          "Tách biệt hoàn toàn tài nguyên media sang AWS S3/CloudFront để giảm tải cho máy chủ chính",
        ],
        integrationsAndDevOps: [
          "Cấu hình máy chủ Ubuntu trên AWS EC2, cài đặt Nginx reverse proxy và chứng chỉ SSL",
          "Thiết lập pipeline CI/CD kiểm thử tự động trên GitHub Actions",
        ],
      },

      outcomes: {
        verificationStatus:
          "Dự án cá nhân đang tiếp tục hoàn thiện; đã kiểm thử xác thực thành công toàn bộ luồng nghiệp vụ trên PayOS Sandbox.",
        points: [
          "Xác thực luồng đặt hàng và thanh toán tự động qua PayOS Sandbox với tỷ lệ thành công 100%",
          "Bộ test case giả lập tranh chấp tồn kho (concurrency simulation) chứng minh không có hiện tượng bán vượt",
          "Quy trình xác thực chữ ký số webhook ngăn chặn thành công các request giả lập không hợp lệ",
          "Quy trình CI/CD hoạt động ổn định, tự động hóa toàn bộ việc build và kiểm tra mã nguồn",
        ],
        confidentialityNote:
          "Là dự án cá nhân kỹ thuật, mọi thông số và kết quả đều dựa trên môi trường thử nghiệm và sandbox xác thực thực tế, không tuyên bố số liệu lưu lượng thương mại giả định.",
      },

      links: {
        githubUrl: "https://github.com/Baodubaiz",
        liveUrl: "https://baodubaiz-resume.vercel.app",
        caseStudyUrl: "#projects",
      },
    },

    {
      id: "datviet-realestate-platform",
      slug: "datviet-realestate-platform",
      title: "Đất Việt Group — Nền Tảng Số Bất Động Sản Doanh Nghiệp",
      subtitle:
        "Nền tảng số hóa quản lý dự án bất động sản, đặt chỗ trực tuyến, trực quan hóa 3D và giao tiếp khách hàng đa kênh",
      category: "Bất động sản & Nền tảng Doanh nghiệp",
      categoryKey: "enterprise",
      status: "Nền tảng Doanh nghiệp Nội bộ (Nghiệm thu Vận hành Thực tế)",
      featured: true,
      role: "Full-stack Software Engineer",

      overviewBrief:
        "Nền tảng số hóa toàn diện dành cho doanh nghiệp bất động sản, kết nối thông tin phân cấp từ dự án, phân khu đến từng căn hộ. Hệ thống tích hợp trực quan hóa không gian Three.js, xem ảnh panorama 360°, khóa phân tán Redis chống tranh chấp đặt chỗ, xoay vòng token nguyên tử qua Lua script, và thông báo thời gian thực đa kênh.",
      keyHighlights: [
        "Khóa phân tán Redis (Distributed Locking) ngăn chặn xung đột đặt chỗ căn hộ",
        "Xoay vòng Refresh Token bằng kịch bản Lua nguyên tử và phát hiện tái sử dụng token",
        "Hệ thống thông báo thời gian thực đa kênh: PostgreSQL persistence, SSE, Firebase FCM và Email",
        "Trực quan hóa không gian 3D tương tác với Three.js, Pannellum 360° và sơ đồ SVG",
        "Khả năng quan sát hệ thống (Observability) với Trace ID gắn MDC và Grafana Loki",
      ],
      engineeringFocusTags: [
        "Concurrency Control",
        "Distributed Locking",
        "Session Security",
        "Real-time Communication",
        "Document Processing",
        "Observability",
        "Rate Limiting",
      ],
      primaryTechStack: [
        "Java 17",
        "Spring Boot (DDD)",
        "PostgreSQL",
        "Redis & Lua",
        "React 19",
        "Three.js",
        "SSE & Firebase",
        "Grafana Loki",
      ],

      detailedOverview: {
        systemPurpose:
          "Nền tảng tập trung hóa dữ liệu dự án bất động sản của tập đoàn, cung cấp cổng thông tin số cho khách hàng khám phá sa bàn số, xem chi tiết căn hộ, đặt chỗ trực tuyến và tương tác với đội ngũ tư vấn.",
        targetUsers:
          "Khách hàng có nhu cầu mua bất động sản, chuyên viên tư vấn bán hàng, bộ phận quản lý rổ hàng và ban lãnh đạo dự án.",
        businessNeed:
          "Giải quyết triệt để rủi ro xung đột đặt cọc cùng một căn hộ giữa các kênh bán hàng, số hóa quy trình xem sa bàn trực quan từ xa, và kiểm soát dữ liệu pháp lý minh bạch.",
        technicalInterest:
          "Hệ thống đòi hỏi sự phối hợp đồng bộ giữa kiến trúc Spring Boot Modular Monolith (hướng Domain-Driven Design), điều phối khóa phân tán với Redis, xử lý đồ họa WebGL trên trình duyệt và giám sát hệ thống production với centralized logging.",
      },

      capabilities: [
        {
          id: "property-discovery",
          title: "Khám phá Dự án & Dữ liệu Bất động sản Phân cấp",
          description:
            "Quản lý và hiển thị thông tin dự án theo cấu trúc phân tầng chặt chẽ với tình trạng rổ hàng thời gian thực.",
          workflows: [
            "Cấu trúc dữ liệu: Dự án -> Phân khu (Zone) -> Tòa nhà / Phố -> Căn hộ / Lô đất",
            "Bảng thông số chi tiết: diện tích tim tường, thông thủy, hướng ban công, pháp lý",
            "Cập nhật trạng thái căn hộ thời gian thực: Khả dụng, Đang giữ chỗ, Đã đặt cọc, Đã bán",
          ],
        },
        {
          id: "spatial-visualization",
          title: "Trực quan hóa Không gian Tương tác & Sa bàn Số",
          description:
            "Ứng dụng công nghệ đồ họa hiện đại mang lại trải nghiệm khám phá không gian sống chân thực.",
          workflows: [
            "Sa bàn 3D tương tác sử dụng Three.js và React Three Fiber",
            "Xem ảnh thực tế ảo toàn cảnh 360° từng căn mẫu qua thư viện Pannellum",
            "Bản đồ tiện ích ngoại khu tương tác sử dụng Leaflet",
            "Sơ đồ mặt bằng căn hộ dạng SVG tương tác, đổi màu theo trạng thái rổ hàng",
          ],
        },
        {
          id: "booking-concurrency",
          title: "Quản lý Đặt chỗ & Kiểm soát Trạng thái Căn",
          description:
            "Quy trình giữ chỗ trực tuyến an toàn với cơ chế khóa phân tán và đếm ngược hết hạn tự động.",
          workflows: [
            "Khóa căn hộ tạm thời khi khách hàng bắt đầu quy trình đặt cọc",
            "Bộ đếm thời gian giữ chỗ (Holding TTL) tự động giải phóng căn nếu không thanh toán",
            "Quy định chặt chẽ về điều kiện hủy đặt cọc và chính sách bảo vệ rổ hàng",
          ],
        },
        {
          id: "auth-messaging",
          title: "Xác thực Bảo mật & Giao tiếp Đa kênh",
          description:
            "Bảo vệ phiên làm việc người dùng và phát thông tin cập nhật qua nhiều kênh liên lạc đồng thời.",
          workflows: [
            "Xác thực qua JWT, tích hợp Google OAuth2 và xác minh mã OTP qua SMS",
            "Đẩy thông báo thời gian thực về trình duyệt qua Server-Sent Events (SSE)",
            "Gửi push notification tới thiết bị di động qua Firebase Cloud Messaging (FCM)",
            "Gửi email xác nhận giao dịch và biên lai cọc qua dịch vụ mail transactional",
          ],
        },
        {
          id: "ai-rag-integration",
          title: "Trợ lý AI Tra cứu Thông tin Dự án & Pháp lý",
          description:
            "Tích hợp dịch vụ RAG chuyên biệt hỗ trợ giải đáp thắc mắc khách hàng với dẫn nguồn minh bạch.",
          workflows: [
            "Kết nối backend Spring Boot với dịch vụ FastAPI RAG thông qua REST API bảo mật",
            "Áp dụng cơ chế Rate Limiting qua Redis kiểm soát số lượng truy vấn AI trên từng user/IP",
            "Trích xuất câu trả lời kèm nguồn tham chiếu tài liệu pháp lý và chính sách bán hàng",
          ],
        },
        {
          id: "media-documents",
          title: "Xử lý Media Dung lượng Lớn & Bản vẽ Kỹ thuật",
          description:
            "Quản lý tài nguyên hình ảnh chất lượng cao và kết xuất tài liệu kiến trúc trực tiếp trên web.",
          workflows: [
            "Tải lên hình ảnh và video dự án lên Cloudinary với cơ chế chunked upload",
            "Xử lý và hiển thị bản vẽ thiết kế CAD/PDF dung lượng lớn bằng PDF.js trong Web Workers",
            "Đọc và bóc tách bảng giá bất động sản hàng nghìn dòng bằng thư viện ExcelJS",
            "Làm sạch mã HTML (sanitization) trước khi lưu nội dung bài viết và chính sách bán hàng",
          ],
        },
        {
          id: "observability-tracing",
          title: "Khả năng Quan sát Hệ thống & Truy vết Sự cố",
          description:
            "Giám sát sức khỏe hệ thống và định danh request xuyên suốt các tiến trình xử lý.",
          workflows: [
            "Tự động sinh mã Trace ID duy nhất cho mỗi request đi vào hệ thống",
            "Đưa Trace ID vào Mapped Diagnostic Context (MDC) và gắn vào response header",
            "Đẩy log có cấu trúc về Grafana Loki phục vụ tra cứu và phát hiện sự cố nhanh chóng",
          ],
        },
      ],

      challenges: [
        {
          id: "challenge-conflicting-reservations",
          title: "Ngăn chặn Đặt chỗ Xung đột Đồng thời (Preventing Conflicting Reservations)",
          engineeringFocus: [
            "Concurrency Control",
            "Distributed Locking",
            "Booking State Management",
          ],
          problem: {
            description:
              "Trong các sự kiện mở bán trực tuyến với hàng nghìn khách hàng theo dõi, nhiều người có thể cùng bấm giữ chỗ một căn hộ đẹp tại cùng một tích tắc. Nếu chỉ kiểm tra trạng thái căn hộ thông thường, cả hai request đều thấy căn hộ khả dụng và cùng được phép tiến hành giữ chỗ, gây tranh chấp pháp lý và bức xúc nghiêm trọng.",
            conditions:
              "Xảy ra trong các đợt mở bán dự án nóng hoặc flash booking trực tuyến.",
            risk:
              "Bán trùng căn hộ (double booking), phát sinh khiếu nại pháp lý, vi phạm quy định sàn giao dịch và tổn hại uy tín thương hiệu chủ đầu tư.",
          },
          approach: {
            description:
              "Ứng dụng cơ chế khóa phân tán (Distributed Locking) dựa trên Redis kết hợp kiểm tra trạng thái nghiêm ngặt trong database.",
            mechanisms: [
              "Tạo khóa phân tán Redis có scope cụ thể theo mã căn hộ: `lock:property:{propertyId}` với TTL tự động giải phóng (ví dụ: 10 giây) để tránh deadlock khi có sự cố mạng",
              "Khi giành được khóa, backend kiểm tra lại trạng thái căn hộ trong PostgreSQL trong một transaction biệt lập",
              "Chuyển trạng thái căn hộ từ 'AVAILABLE' sang 'HOLDING', gán mã khách hàng và thời gian hết hạn giữ chỗ (ví dụ: 15 phút)",
              "Kết hợp tiến trình định kỳ (Scheduled Task) và lazy check khi có truy vấn mới để tự động thu hồi căn nếu hết thời gian holding",
            ],
          },
          tradeoffs: {
            benefits: [
              "Ngăn chặn tuyệt đối việc hai khách hàng cùng giữ chỗ thành công một căn hộ",
              "Cơ chế TTL phòng ngừa nguy cơ căn hộ bị khóa vĩnh viễn nếu máy chủ gặp sự cố",
            ],
            complexities: [
              "Phát sinh sự phụ thuộc vào cụm Redis với độ sẵn sàng cao",
              "Cần cấu hình TTL khóa hợp lý: đủ dài để hoàn tất transaction database nhưng không quá dài gây nghẽn",
            ],
            justification:
              "Trong giao dịch bất động sản giá trị hàng tỷ đồng, tính đúng đắn khi giữ căn là ranh giới sống còn của uy tín doanh nghiệp.",
          },
        },
        {
          id: "challenge-token-rotation-lua",
          title: "Xoay vòng Token Nguyên tử qua Lua Script & Phát hiện Tái sử dụng Trái phép",
          engineeringFocus: [
            "Session Security",
            "Token Rotation",
            "Credential Reuse Detection",
          ],
          problem: {
            description:
              "Hệ thống phục vụ cả nhân viên kinh doanh và khách hàng với các quyền hạn quan trọng. Nếu một refresh token bị lộ và bị kẻ tấn công gửi lại để lấy access token mới, hệ thống nếu xử lý ngây thơ sẽ tiếp tay cho hành vi chiếm đoạt phiên làm việc.",
            conditions:
              "Xảy ra khi token bị rò rỉ qua mạng wifi công cộng hoặc thiết bị của người dùng bị nhiễm mã độc.",
            risk:
              "Kẻ gian đánh cắp phiên đăng nhập, can thiệp vào dữ liệu đặt cọc hoặc chiếm đoạt tài khoản khách hàng.",
          },
          approach: {
            description:
              "Triển khai cơ chế Refresh Token Rotation lưu trữ trong Redis, thực thi nguyên tử qua Redis Lua Script và duy trì token family.",
            mechanisms: [
              "Lưu trữ quan hệ token family trong Redis. Mỗi khi client gửi yêu cầu refresh, một kịch bản Lua Script thực thi nguyên tử (atomic) trên Redis để kiểm tra token hiện tại",
              "Nếu token hợp lệ: kịch bản lập tức vô hiệu hóa token cũ, sinh token mới và cập nhật thời hạn trong một thao tác duy nhất",
              "Nếu token gửi lên là một token ĐÃ BỊ HỦY trước đó (dấu hiệu kẻ gian dùng lại token cũ đã bị rotate): hệ thống kích hoạt cơ chế báo động, thu hồi NGAY LẬP TỨC toàn bộ token family liên quan, buộc mọi phiên liên quan phải đăng nhập lại",
              "Refresh token được lưu trữ an toàn trong HttpOnly Cookie với cờ Secure và SameSite",
            ],
          },
          tradeoffs: {
            benefits: [
              "Phát hiện và ngăn chặn lập tức hành vi đánh cắp phiên mà không cần quét định kỳ",
              "Tính nguyên tử của Lua script ngăn chặn race condition khi nhiều request refresh đồng thời từ cùng client",
            ],
            complexities: [
              "Đòi hỏi quản lý trạng thái phiên trên Redis thay vì hoàn toàn stateless",
              "Trường hợp mạng chập chờn client gửi lại request hợp lệ có thể vô tình làm kích hoạt cơ chế thu hồi family",
            ],
            justification:
              "Bảo vệ tài sản và thông tin giao dịch bất động sản yêu cầu tiêu chuẩn bảo mật phiên cấp doanh nghiệp.",
          },
        },
        {
          id: "challenge-multi-channel-notifications",
          title: "Điều phối Hệ thống Thông báo Đa kênh Thời gian thực",
          engineeringFocus: [
            "Real-time Communication",
            "Notification Persistence",
            "Service Integration",
          ],
          problem: {
            description:
              "Khi một căn hộ thay đổi trạng thái (vừa được giữ chỗ hoặc mở bán), thông tin cần truyền ngay tới trình duyệt của hàng trăm khách hàng đang xem, đồng thời gửi email xác nhận và push notification về ứng dụng di động. Ghép nối đồng bộ các kênh này vào luồng đặt chỗ chính sẽ làm giao dịch bị chậm hoặc fail nếu dịch vụ mail bên thứ ba gặp sự cố.",
            conditions:
              "Phát sinh mỗi khi có biến động về trạng thái căn hộ hoặc giao dịch thanh toán thành công.",
            risk:
              "Giao dịch chính bị treo do chờ gửi email, hoặc khách hàng trên web không cập nhật kịp thời trạng thái căn hộ dẫn đến thao tác thừa.",
          },
          approach: {
            description:
              "Tách biệt hoàn toàn luồng giao dịch nghiệp vụ với luồng thông báo thông qua mô hình Event-driven và đa kênh bất đồng bộ.",
            mechanisms: [
              "Lưu trữ bản ghi thông báo bền vững vào PostgreSQL để người dùng luôn xem lại được trong hòm thư hệ thống",
              "Sử dụng Server-Sent Events (SSE) để truyền sự kiện thời gian thực tới các trình duyệt đang mở mà không cần overhead hai chiều như WebSocket",
              "Đẩy thông báo di động qua Firebase Cloud Messaging (FCM) và email giao dịch qua background thread pool",
              "Xử lý lỗi độc lập: lỗi gửi email hay push notification không ảnh hưởng đến kết quả giao dịch trong database",
            ],
          },
          tradeoffs: {
            benefits: [
              "Thời gian phản hồi giao dịch đặt chỗ duy trì nhanh chóng dưới 150ms",
              "Khách hàng nhận thông tin tức thời trên nhiều nền tảng thiết bị",
            ],
            complexities: [
              "Quản lý vòng đời kết nối SSE (heartbeat, reconnect khi đứt mạng) phía client và server",
              "Cần phân biệt rõ trạng thái 'Đã lưu trữ' (Persisted) và 'Đã gửi thành công' (Delivered)",
            ],
            justification:
              "Trải nghiệm thời gian thực tạo nên sự sống động và tin cậy cho sàn giao dịch bất động sản số.",
          },
        },
        {
          id: "challenge-rag-rate-limiting",
          title: "Bảo vệ Dịch vụ Trợ lý AI RAG với Rate Limiting & Viện dẫn Nguồn",
          engineeringFocus: [
            "Rate Limiting",
            "Service Integration",
            "Retrieval-Augmented Generation",
          ],
          problem: {
            description:
              "Dịch vụ hỏi đáp thông minh (RAG) sử dụng LLM để giải đáp thông tin quy hoạch, pháp lý và chính sách dự án. Mỗi truy vấn tiêu tốn chi phí API và năng lực tính toán vector. Nếu không có lớp phòng vệ, bot hoặc người dùng spam có thể làm cạn kiệt ngân sách hoặc gây treo dịch vụ.",
            conditions:
              "Khi có người dùng gửi liên tiếp hàng chục câu hỏi hoặc thực hiện quét tự động.",
            risk:
              "Chi phí API bên ngoài tăng vọt ngoài tầm kiểm soát và hệ thống AI bị nghẽn không phục vụ được khách hàng tiềm năng.",
          },
          approach: {
            description:
              "Định tuyến mọi yêu cầu AI qua tầng Spring Boot API Gateway trước khi tới FastAPI RAG service, kết hợp bộ giới hạn tần suất dựa trên Redis.",
            mechanisms: [
              "Triển khai thuật toán Sliding Window / Token Bucket trên Redis theo định danh người dùng và IP",
              "Giới hạn tần suất hợp lý (ví dụ: tối đa 10 câu hỏi/phút với người dùng đăng nhập)",
              "Yêu cầu dịch vụ RAG trả kèm siêu dữ liệu trích dẫn (Citations) chỉ rõ văn bản pháp lý hoặc điều khoản tương ứng",
            ],
          },
          tradeoffs: {
            benefits: [
              "Kiểm soát chặt chẽ ngân sách vận hành AI và ngăn chặn triệt để hành vi lạm dụng",
              "Tăng độ tin cậy của thông tin tư vấn nhờ có nguồn trích dẫn pháp lý rõ ràng",
            ],
            complexities: [
              "Cần thông báo trực quan khi người dùng chạm ngưỡng giới hạn tần suất",
              "Chất lượng câu trả lời vẫn phụ thuộc vào chất lượng dữ liệu được indexing trong vector database",
            ],
            justification:
              "Bảo vệ tài nguyên tính toán và chi phí là điều kiện tiên quyết để vận hành tính năng AI bền vững trong sản phẩm doanh nghiệp.",
          },
        },
        {
          id: "challenge-media-resilience",
          title: "Xử lý Lỗi Tải Media & Làm sạch Nội dung (Compensating Cleanup)",
          engineeringFocus: [
            "File Processing",
            "Failure Handling",
            "Data Consistency",
            "Content Security",
          ],
          problem: {
            description:
              "Tải các tệp hình ảnh, video chất lượng cao lên Cloudinary có thể thành công nhưng thao tác lưu URL vào database sau đó có thể gặp lỗi (ví dụ: mất kết nối, vi phạm validation). Hậu quả là các tệp rác (orphaned assets) bị bỏ rơi trên cloud gây tốn dung lượng và chi phí.",
            conditions:
              "Xảy ra khi đường truyền chập chờn hoặc transaction cơ sở dữ liệu bị rollback.",
            risk:
              "Phát sinh tài nguyên rác không thể quản lý trên cloud và nguy cơ lưu trữ nội dung văn bản chứa mã độc XSS.",
          },
          approach: {
            description:
              "Ứng dụng giao thức Chunked Upload kết hợp cơ chế bồi hoàn (Compensating Action) và làm sạch HTML trước khi lưu trữ.",
            mechanisms: [
              "Sử dụng chunked upload cho các tệp media dung lượng lớn để hỗ trợ resume khi đứt mạng",
              "Nếu transaction lưu cơ sở dữ liệu thất bại, bắt exception và kích hoạt ngay lệnh gọi Cloudinary API xóa tệp vừa tải lên",
              "Sử dụng thư viện HTML Sanitizer tại tầng backend để lọc sạch các thẻ nguy hiểm (script, iframe) trong bài viết mô tả dự án",
            ],
          },
          tradeoffs: {
            benefits: [
              "Giữ cho kho lưu trữ cloud luôn sạch sẽ, không có tệp rác vô thừa nhận",
              "Triệt tiêu nguy cơ tấn công XSS từ nội dung biên tập của người quản trị",
            ],
            complexities: [
              "Lệnh bồi hoàn xóa tệp trên Cloudinary cũng có thể gặp lỗi mạng và cần ghi log để dọn dẹp định kỳ",
            ],
            justification:
              "Đảm bảo sự nhất quán hai chiều giữa tài nguyên đám mây và cơ sở dữ liệu quan hệ.",
          },
        },
        {
          id: "challenge-request-tracing",
          title: "Truy vết Request với Trace ID & Khả năng Quan sát qua Grafana Loki",
          engineeringFocus: [
            "Observability",
            "Request Tracing",
            "Production Debugging",
          ],
          problem: {
            description:
              "Khi hệ thống chạy trên môi trường thực tế với hàng nghìn request đồng thời qua nhiều module (đặt chỗ, thanh toán, RAG, thông báo), việc chẩn đoán một lỗi phát sinh từ log rời rạc gần như bất khả thi nếu không có mối liên kết định danh.",
            conditions:
              "Khi khách hàng báo cáo một giao dịch bị lỗi hoặc một sự kiện thông báo không tới được đích.",
            risk:
              "Thời gian điều tra sự cố (MTTR) kéo dài hàng giờ, không xác định được chính xác mắt xích nào bị nghẽn.",
          },
          approach: {
            description:
              "Xây dựng cơ chế tương quan nhật ký (Log Correlation) sử dụng Trace ID gắn vào Logging Context và gom log về Grafana Loki.",
            mechanisms: [
              "Tạo một mã UUID Trace ID duy nhất ngay tại bộ lọc HTTP request đầu vào (hoặc nhận từ header nếu có)",
              "Đưa Trace ID vào Mapped Diagnostic Context (MDC) của Logback để mọi dòng log trong luồng xử lý đều tự động in kèm traceId",
              "Trả Trace ID về client trong response header (`X-Trace-Id`) để người dùng/tester có thể cung cấp khi báo lỗi",
              "Đẩy toàn bộ luồng log có cấu trúc về Grafana Loki phục vụ việc tra cứu và lọc theo Trace ID tức thời",
            ],
          },
          tradeoffs: {
            benefits: [
              "Thời gian truy vết và khoanh vùng nguyên nhân sự cố giảm từ hàng giờ xuống vài giây",
              "Đội ngũ kỹ thuật có bức tranh toàn cảnh về hành trình của từng request xuyên suốt hệ thống",
            ],
            complexities: [
              "Cần quy định nghiêm ngặt việc che giấu thông tin nhạy cảm (mật khẩu, token) trong log",
              "Cần cấu hình chính sách lưu trữ và dọn dẹp log định kỳ trên Loki",
            ],
            justification:
              "Khả năng quan sát (Observability) là tiêu chuẩn bắt buộc cho mọi nền tảng số cấp doanh nghiệp.",
          },
        },
        {
          id: "challenge-document-workers",
          title: "Xử lý Bản vẽ Kiến trúc & Bảng giá Dự án Dung lượng Lớn qua Web Workers",
          engineeringFocus: [
            "Document Processing",
            "Web Workers",
            "Interactive Visualization",
          ],
          problem: {
            description:
              "Bản vẽ kiến trúc kỹ thuật độ phân giải cao và bảng giá bất động sản hàng nghìn dòng nếu giải mã và render trực tiếp trên Main Thread của trình duyệt sẽ làm giao diện bị đơ (freeze), giật lag tụt khung hình.",
            conditions:
              "Khi người dùng mở các file CAD/PDF mặt bằng chi tiết hoặc tải bảng tính giá theo căn hộ.",
            risk:
              "Trình duyệt bị treo hoặc hiện cảnh báo 'Page Unresponsive', phá vỡ hoàn toàn trải nghiệm tương tác của khách hàng.",
          },
          approach: {
            description:
              "Chuyển toàn bộ các tác vụ tính toán nặng sang Web Workers chạy ngầm, kết hợp render ô lưới (Tiled Rendering).",
            mechanisms: [
              "Sử dụng PDF.js chạy trong Web Worker để giải mã và bóc tách các lớp bản vẽ kỹ thuật",
              "Áp dụng kỹ thuật Tiled Rendering: chỉ render phần bản vẽ nằm trong viewport người dùng đang zoom",
              "Sử dụng ExcelJS trong Worker để phân tích tệp bảng giá và chuyển đổi layout căn hộ sang định dạng SVG nhẹ nhàng",
            ],
          },
          tradeoffs: {
            benefits: [
              "Main Thread luôn duy trì phản hồi mượt mà ở mức 60fps trong suốt quá trình xử lý tài liệu lớn",
              "Khách hàng có thể tương tác phóng to thu nhỏ bản vẽ mà không gặp hiện tượng giật cục",
            ],
            complexities: [
              "Đòi hỏi quản lý cơ chế truyền thông điệp bất đồng bộ (postMessage) giữa Worker và UI",
              "Cần theo dõi và giải phóng bộ nhớ của Worker cẩn thận trên các thiết bị di động có RAM thấp",
            ],
            justification:
              "Trực quan hóa tài liệu mượt mà là yếu tố then chốt tạo nên ấn tượng chuyên nghiệp cho nền tảng bất động sản.",
          },
        },
      ],

      architecture: {
        summary:
          "Nền tảng kiến trúc theo mô hình Modular Monolith (hướng Domain-Driven Design) với Backend Spring Boot và Frontend React 19. Hệ thống tích hợp Redis cho khóa phân tán và phiên làm việc, SSE/Firebase cho thông báo, dịch vụ FastAPI RAG độc lập, và giám sát tập trung qua Grafana Loki.",
        components: [
          {
            layer: "Frontend Application",
            name: "React 19, TypeScript & Vite",
            description:
              "Single Page Application tích hợp Tailwind CSS v4, Three.js cho trực quan hóa 3D, Pannellum cho panorama 360°, Leaflet và Web Workers.",
            status: "implemented",
          },
          {
            layer: "Backend Architecture",
            name: "Java 17 & Spring Boot (Modular Monolith / DDD)",
            description:
              "Tổ chức mã nguồn theo các bounded contexts rõ ràng: Property, Reservation, Identity, Notification, Analytics. Spring Security với JWT và HttpOnly cookies.",
            status: "implemented",
          },
          {
            layer: "Distributed Coordination",
            name: "Redis & Lua Scripts",
            description:
              "Đảm nhiệm khóa phân tán chống xung đột đặt chỗ, quản lý phiên refresh token và rate limiting cho các dịch vụ nhạy cảm.",
            status: "implemented",
          },
          {
            layer: "Relational Persistence",
            name: "PostgreSQL & Spring Data JPA",
            description:
              "Lưu trữ quan hệ phân cấp dự án, lịch sử đặt cọc, thông báo và dữ liệu giao dịch.",
            status: "implemented",
          },
          {
            layer: "Real-time Messaging",
            name: "SSE & Firebase Cloud Messaging (FCM)",
            description:
              "Server-Sent Events đẩy cập nhật rổ hàng tức thời về trình duyệt; FCM gửi thông báo đẩy tới thiết bị di động.",
            status: "implemented",
          },
          {
            layer: "AI Advisory Service",
            name: "FastAPI RAG Service",
            description:
              "Dịch vụ hỏi đáp thông minh độc lập tra cứu dữ liệu quy hoạch và pháp lý với nguồn trích dẫn rõ ràng.",
            status: "implemented",
          },
          {
            layer: "Observability",
            name: "MDC Trace ID & Grafana Loki",
            description:
              "Theo dõi và gom nhật ký tập trung phục vụ công tác điều tra sự cố và giám sát hiệu năng sản phẩm.",
            status: "implemented",
          },
        ],
        workflowSteps: [
          {
            step: "01",
            actor: "Khách hàng",
            action: "Xem sơ đồ & Bấm giữ chỗ căn hộ",
            detail:
              "Khách hàng chọn căn hộ trên sơ đồ SVG tương tác và gửi yêu cầu giữ chỗ",
          },
          {
            step: "02",
            actor: "Redis Distributed Lock",
            action: "Giữ khóa phân tán theo mã căn",
            detail:
              "Backend giành khóa `lock:property:{id}` với TTL 10 giây để loại trừ các yêu cầu cạnh tranh",
          },
          {
            step: "03",
            actor: "Spring Boot Transaction",
            action: "Kiểm tra DB & Chuyển trạng thái HOLDING",
            detail:
              "Xác thực căn hộ đang trống, gán mã khách hàng và kích hoạt bộ đếm thời gian 15 phút",
          },
          {
            step: "04",
            actor: "Notification Pipeline",
            action: "Phát sóng SSE & Gửi thông báo xác nhận",
            detail:
              "Bắn sự kiện SSE cập nhật màu căn hộ trên các client khác và gửi push/email xác nhận cho khách",
          },
        ],
      },

      techStackDetailed: [
        {
          category: "Frontend & Trực quan hóa Tương tác",
          items: [
            {
              name: "React 19 & TypeScript",
              purpose: "Nền tảng giao diện người dùng hiện đại, quản lý tương tác phức tạp",
            },
            {
              name: "Three.js & React Three Fiber",
              purpose: "Kết xuất mô hình 3D sa bàn dự án và căn hộ tương tác",
            },
            {
              name: "Pannellum",
              purpose: "Trình xem ảnh thực tế ảo toàn cảnh 360° các căn hộ mẫu",
            },
            {
              name: "Leaflet",
              purpose: "Bản đồ số tương tác tra cứu tiện ích và vị trí dự án",
            },
            {
              name: "PDF.js & Web Workers",
              purpose: "Xử lý và render bản vẽ kỹ thuật CAD/PDF ngoài Main Thread",
            },
          ],
        },
        {
          category: "Backend & Kiến trúc Hệ thống",
          items: [
            {
              name: "Java 17 & Spring Boot",
              purpose: "Kiến trúc Modular Monolith hướng Domain-Driven Design (DDD)",
            },
            {
              name: "Spring Data JPA & Hibernate",
              purpose: "Quản lý truy vấn dữ liệu quan hệ và ranh giới giao dịch",
            },
            {
              name: "Spring Security & Google OAuth2",
              purpose: "Bảo mật xác thực đa kênh, phân quyền vai trò và quản lý phiên",
            },
          ],
        },
        {
          category: "Điều phối Phân tán & Dữ liệu",
          items: [
            {
              name: "Redis & Lua Scripts",
              purpose: "Khóa phân tán, xoay vòng refresh token và bộ giới hạn tần suất",
            },
            {
              name: "PostgreSQL",
              purpose: "Cơ sở dữ liệu lưu trữ quan hệ phân cấp và lịch sử giao dịch",
            },
          ],
        },
        {
          category: "Thời gian thực, AI & Vận hành",
          items: [
            {
              name: "Server-Sent Events (SSE)",
              purpose: "Đẩy dữ liệu thay đổi trạng thái căn hộ thời gian thực về trình duyệt",
            },
            {
              name: "Firebase Cloud Messaging & SMTP",
              purpose: "Gửi thông báo đẩy di động và email xác nhận giao dịch",
            },
            {
              name: "FastAPI RAG Service",
              purpose: "Dịch vụ AI tra cứu thông tin quy hoạch và tài liệu pháp lý",
            },
            {
              name: "MDC & Grafana Loki",
              purpose: "Gắn Trace ID tương quan và gom log có cấu trúc tập trung",
            },
          ],
        },
      ],

      contribution: {
        roleTitle: "Full-stack Software Engineer",
        implementedFeatures: [
          "Thiết kế và cài đặt cơ chế khóa phân tán Redis phòng ngừa xung đột đặt chỗ căn hộ",
          "Xây dựng quy trình xoay vòng Refresh Token bằng kịch bản Lua và phát hiện tái sử dụng trái phép",
          "Phát triển module thông báo Server-Sent Events (SSE) thời gian thực và tích hợp Firebase FCM",
          "Cấu hình middleware gắn Trace ID vào Logging MDC và chuẩn hóa log cho Grafana Loki",
          "Tích hợp các thành phần trực quan hóa sơ đồ mặt bằng SVG và Web Worker xử lý tài liệu lớn",
        ],
        architecturalDecisions: [
          "Lựa chọn mô hình Modular Monolith (DDD) để duy trì sự mạch lạc giữa các domain bất động sản",
          "Phân định rõ rệt giữa khóa phân tán Redis (điều phối cạnh tranh) và database validation (chốt chặn đúng đắn cuối cùng)",
          "Tách biệt hoàn toàn luồng giao dịch nghiệp vụ cốt lõi khỏi luồng gửi thông báo đa kênh",
        ],
        integrationsAndDevOps: [
          "Tích hợp Cloudinary chunked upload và cơ chế dọn dẹp bồi hoàn khi transaction lỗi",
          "Kết nối Spring Boot gateway với dịch vụ AI RAG và thiết lập bộ rate limiting qua Redis",
        ],
      },

      outcomes: {
        verificationStatus:
          "Nền tảng doanh nghiệp nội bộ hoàn thành bàn giao và triển khai phục vụ quy trình nghiệp vụ thực tế.",
        points: [
          "Kiểm chứng thành công qua các đợt kiểm thử tải giả lập hàng nghìn request cạnh tranh giữ căn mà không xảy ra trùng lặp",
          "Cơ chế xoay vòng token nguyên tử ngăn chặn thành công các kịch bản cố tình tái sử dụng token cũ",
          "Toàn bộ các sự kiện đặt chỗ và biến động rổ hàng được cập nhật thời gian thực tới người dùng với độ trễ dưới 200ms",
        ],
        confidentialityNote:
          "Tuân thủ nghiêm ngặt quy định bảo mật doanh nghiệp: không công khai mã nguồn riêng tư, dữ liệu khách hàng hay thông tin mật nội bộ.",
      },

      links: {
        caseStudyUrl: "#projects",
        isPrivateRepo: true,
      },
    },
  ],

  en: [
    {
      id: "qlktx-dormitory-system",
      slug: "qlktx-dormitory-system",
      title: "QLKTX — Student Dormitory Management System",
      subtitle:
        "Digitalized accommodation operations, room assignment workflows, and residency history traceability platform",
      category: "Education / Accommodation Management",
      categoryKey: "education",
      status: "85–90% Complete (Academic Capstone / Verified Core Delivery)",
      featured: true,
      role: "Full-stack Developer",

      overviewBrief:
        "Comprehensive operational platform digitizing student accommodation lifecycles, enforcing hierarchical spatial modeling from buildings to individual beds, and securing room allocation, transfer, and checkout workflows with immutable audit traceability.",
      keyHighlights: [
        "Multi-tier relational data modeling: Managing Unit -> Building -> Floor -> Room -> Bed",
        "Strict transaction boundaries preventing double-booking and orphaned occupancy",
        "Automated administrative audit logging and operational history tracking",
        "Multi-parameter administrative queries and structured reporting exports",
      ],
      engineeringFocusTags: [
        "Relational Data Modeling",
        "Data Integrity",
        "Business Workflow Validation",
        "State Management",
        "Audit Logging",
      ],
      primaryTechStack: [
        "NestJS",
        "TypeScript",
        "React",
        "PostgreSQL",
        "Prisma ORM",
        "Ant Design",
      ],

      detailedOverview: {
        systemPurpose:
          "Centralized dormitory administration platform resolving operational inefficiencies in student room placements, asset tracking, and multi-semester residency records.",
        targetUsers:
          "Dormitory administrative officers, student affairs coordinators, facility management teams, and resident students.",
        businessNeed:
          "Eliminate conflicting bed assignments, prevent lost residency history during mid-semester transfers, and provide reliable occupancy analytics for institutional reporting.",
        technicalInterest:
          "Hierarchical relational data modeling, enforcing transactional integrity during multi-entity state transitions, and designing tamper-evident audit trails without operational overhead.",
      },

      capabilities: [
        {
          id: "student-org-management",
          title: "Student & Academic Organization Management",
          description:
            "Manages comprehensive student profiles linked with academic departments, cohorts, and residency eligibility.",
          workflows: [
            "Unique student profiles with academic status and contact records",
            "Classification by priority policy tiers for quota-based bed allocations",
            "Fast multi-attribute student search and status filtering",
          ],
        },
        {
          id: "accommodation-management",
          title: "Accommodation & Placement Lifecycle",
          description:
            "Manages spatial dormitory hierarchies and orchestrates student placement lifecycles.",
          workflows: [
            "Spatial hierarchy: Buildings -> Floors -> Rooms -> Individual Beds",
            "Check-in workflow allocating eligible students into verified vacant beds",
            "Atomic room transfer and checkout workflows preventing ghost occupancy",
            "Immutable chronological residency history logging for every student",
          ],
        },
        {
          id: "facility-asset-management",
          title: "Facility & In-Room Asset Tracking",
          description:
            "Tracks physical assets assigned to specific rooms and logs handover conditions.",
          workflows: [
            "Per-room equipment inventories (beds, study desks, lighting, keys)",
            "Maintenance request logging and asset condition updates",
            "Handover checklist verification during check-in and check-out",
          ],
        },
        {
          id: "reporting-administration",
          title: "Administrative Reporting & Role-Based Access",
          description:
            "Delivers operational occupancy analytics and enforces fine-grained authorization.",
          workflows: [
            "Occupancy rate reporting grouped by building, floor, and room category",
            "Administrative spreadsheet export for institutional compliance",
            "Role-Based Access Control (RBAC) separating administrative privileges",
            "System-wide operational activity audit logs for administrative accountability",
          ],
        },
      ],

      challenges: [
        {
          id: "challenge-relational-modeling",
          title: "Relational Data Modeling for Multi-Tier Hierarchies",
          engineeringFocus: [
            "Relational Data Modeling",
            "Data Integrity",
            "Database Constraints",
          ],
          problem: {
            description:
              "Dormitory records exhibit strict multi-tiered dependencies between students, academic departments, buildings, floors, rooms, and individual beds. A loose relational schema causes anomalies, duplicate bed assignments, and broken links when student statuses mutate.",
            conditions:
              "Occurs when students transfer rooms across semesters while preserving continuous academic accountability.",
            risk:
              "Multiple students assigned to the same physical bed, or beds remaining locked as occupied after checkout, corrupting occupancy analytics.",
          },
          approach: {
            description:
              "Architected a normalized PostgreSQL relational schema via Prisma ORM with strict referential integrity rules.",
            mechanisms: [
              "Configured composite unique constraints on `(bedId, status = 'ACTIVE')` to prevent double-booking at the database engine level",
              "Segregated active occupancy records from chronological residency history tables",
              "Applied selective foreign key constraints preventing accidental deletion of rooms with active occupant records",
            ],
          },
          tradeoffs: {
            benefits: [
              "Guarantees referential integrity directly at the database engine level",
              "Enables structured, high-performance JOIN queries across the spatial hierarchy",
            ],
            complexities: [
              "Demands disciplined Prisma query composition and relationship handling",
              "Historical append-only records require deliberate indexing and storage planning",
            ],
            justification:
              "In administrative institutional management, relational correctness is non-negotiable over loose document flexibility.",
          },
        },
        {
          id: "challenge-state-transitions",
          title: "Accommodation State Transitions & Transaction Boundaries",
          engineeringFocus: [
            "Business Workflow Validation",
            "State Management",
            "Data Consistency",
          ],
          problem: {
            description:
              "A student transfer or checkout mutates multiple tables concurrently: updating student residency, releasing the prior bed, reserving the target bed, and appending a historical record.",
            conditions:
              "High-frequency execution during peak admission and semester-transition periods.",
            risk:
              "Partial execution failures (e.g., releasing the old bed but failing to lock the target bed) leave records in mutually contradictory states.",
          },
          approach: {
            description:
              "Encapsulated state transition lifecycles within atomic Prisma Interactive Transactions (`$transaction`).",
            mechanisms: [
              "Evaluated pre-conditions: verified target bed availability (`VACANT`) and student eligibility prior to mutations",
              "Coordinated old bed release, new bed assignment, and historical record creation within a single atomic boundary",
              "Enforced automatic rollbacks upon any validation exception within the transaction sequence",
            ],
          },
          tradeoffs: {
            benefits: [
              "Completely eliminates orphaned occupancy and contradictory state anomalies",
              "Ensures vacant bed counts correspond accurately to physical reality",
            ],
            complexities: [
              "Requires detailed exception branching and validation logic in backend services",
              "Transaction scope must remain concise to prevent database connection exhaustion",
            ],
            justification:
              "Transactional integrity of room occupancy is the core business requirement of dormitory operations.",
          },
        },
        {
          id: "challenge-auditability",
          title: "Operational Audit Logging & Traceability",
          engineeringFocus: [
            "Audit Logging",
            "Operational Traceability",
            "Data Retention",
          ],
          problem: {
            description:
              "Dormitory directors need clear visibility into who initiated reassignments, exact modification timestamps, and operational rationales when disputes arise.",
            conditions:
              "Occurs during room dispute adjudications or institutional compliance reviews.",
            risk:
              "Lack of accountability if irregular bed allocations occur without an identifiable author.",
          },
          approach: {
            description:
              "Built an automated backend audit logging mechanism in NestJS backed by dedicated append-only history tables.",
            mechanisms: [
              "Implemented NestJS interceptors intercepting mutating HTTP requests (POST, PUT, DELETE)",
              "Captured caller userId, action type, timestamp, IP address, and before/after state snapshots",
              "Enforced append-only permissions on historical residency logs preventing tampering",
            ],
          },
          tradeoffs: {
            benefits: [
              "100% auditability for placement decisions and administrative actions",
              "Ensures full compliance with institutional governance standards",
            ],
            complexities: [
              "Increases database storage growth for audit trail tables",
              "Requires filtering policies to prevent logging sensitive user credentials",
            ],
            justification:
              "Auditability is an essential governance requirement for public educational management systems.",
          },
        },
        {
          id: "challenge-search-reporting",
          title: "Multi-Facet Administrative Query Performance & Reporting",
          engineeringFocus: ["Query Design", "Filtering", "Indexing", "Reporting"],
          problem: {
            description:
              "Administrative workflows require complex queries filtering across academic departments, cohorts, buildings, fee statuses, and bed availability. In-memory client-side filtering degrades UI performance rapidly.",
            conditions:
              "Occurs when dataset scales to thousands of student records across multiple academic years.",
            risk:
              "Protracted dashboard response times and UI freezing during intensive operational periods.",
          },
          approach: {
            description:
              "Structured dynamic database-level filtering and pagination via Prisma query builders in NestJS.",
            mechanisms: [
              "Introduced B-Tree indexes on high-cardinality search columns: studentCode, roomId, status, academicYear",
              "Validated incoming filter parameters using NestJS class-validator DTOs",
              "Implemented standard offset pagination delivering metadata for client data tables",
            ],
          },
          tradeoffs: {
            benefits: [
              "Maintained search response latencies under 100ms on simulated full-scale datasets",
              "Drastically reduced network bandwidth by returning only paginated records",
            ],
            complexities: [
              "Indexes marginally increase disk utilization and write latency during batch imports",
            ],
            justification:
              "Read and search query frequencies significantly outweigh batch insertions in administrative workflows.",
          },
        },
      ],

      architecture: {
        summary:
          "Decoupled Client-Server architecture. The frontend is a React Single Page Application communicating over typed RESTful APIs with a modular NestJS backend connected to PostgreSQL via Prisma ORM.",
        components: [
          {
            layer: "Frontend Client",
            name: "React + TypeScript SPA",
            description:
              "Administrative SPA built with React, Vite, Ant Design, and Tailwind CSS. Tailored for complex data tables and form workflows.",
            status: "implemented",
          },
          {
            layer: "Backend Application",
            name: "NestJS Modular REST API",
            description:
              "Layered Controller-Service-Repository architecture in TypeScript. Manages JWT auth, RBAC guards, and DTO validation.",
            status: "implemented",
          },
          {
            layer: "Persistence Layer",
            name: "PostgreSQL & Prisma ORM",
            description:
              "Relational database preserving student records, room hierarchies, and audit history with type-safe Prisma migrations.",
            status: "implemented",
          },
          {
            layer: "Deployment & Hosting",
            name: "Vercel Platform",
            description:
              "Hosting client assets and serverless API functions with integrated Git CI/CD deployments.",
            status: "implemented",
          },
        ],
        workflowSteps: [
          {
            step: "01",
            actor: "Administrator",
            action: "Initiate Room Placement / Transfer",
            detail:
              "Selects student profile and target bed from visual room layout",
          },
          {
            step: "02",
            actor: "NestJS Service",
            action: "Evaluate Pre-conditions & Open Transaction",
            detail:
              "Verifies target bed vacancy and student residency clearance",
          },
          {
            step: "03",
            actor: "Prisma $transaction",
            action: "Atomic Multi-Entity Mutation",
            detail:
              "Release old bed -> Allocate new bed -> Update student -> Append history log",
          },
          {
            step: "04",
            actor: "Audit Interceptor",
            action: "Capture Immutable Audit Log",
            detail:
              "Persists event payload, timestamp, and administrative user ID",
          },
        ],
      },

      techStackDetailed: [
        {
          category: "Frontend & UI",
          items: [
            {
              name: "React 19 & TypeScript",
              purpose: "Administrative single-page application development",
            },
            {
              name: "Vite",
              purpose: "High-performance build tooling and fast bundle optimization",
            },
            {
              name: "Ant Design",
              purpose: "Enterprise component library for data tables, modals, and forms",
            },
            {
              name: "Tailwind CSS",
              purpose: "Custom styling, layout utilities, and modern color palette",
            },
          ],
        },
        {
          category: "Backend & Services",
          items: [
            {
              name: "NestJS",
              purpose:
                "Modular Node.js framework providing structured Dependency Injection",
            },
            {
              name: "TypeScript",
              purpose: "End-to-end type safety spanning DTOs to database models",
            },
            {
              name: "Class-Validator",
              purpose: "Runtime validation pipes safeguarding API boundaries",
            },
          ],
        },
        {
          category: "Database & Storage",
          items: [
            {
              name: "PostgreSQL",
              purpose: "Primary relational database providing ACID transactional guarantees",
            },
            {
              name: "Prisma ORM",
              purpose:
                "Type-safe database client, schema migrations, and transaction management",
            },
          ],
        },
        {
          category: "DevOps & Deployment",
          items: [
            {
              name: "Vercel",
              purpose: "Cloud hosting platform with integrated continuous deployment",
            },
            {
              name: "Git & GitHub",
              purpose: "Version control and collaborative branch management",
            },
          ],
        },
      ],

      contribution: {
        roleTitle: "Full-stack Developer (Complete Development Lifecycle)",
        implementedFeatures: [
          "Designed the relational database schema and Prisma models for all core domain entities",
          "Engineered RESTful API endpoints for student records, spatial structures, and bed assignments",
          "Implemented state transition validation algorithms and automated residency history logging",
          "Developed the React administrative interface featuring multi-criteria filter tables and forms",
        ],
        architecturalDecisions: [
          "Selected NestJS paired with Prisma to guarantee modular architecture and end-to-end type safety",
          "Applied strict interactive transaction boundaries safeguarding occupancy states against anomalies",
          "Segregated active residency records from historical append-only logs to optimize query performance",
        ],
        integrationsAndDevOps: [
          "Configured deployment environments on Vercel platform",
          "Authored integration test suites and operational administrative documentation",
        ],
      },

      outcomes: {
        verificationStatus:
          "85–90% verified functional completion; received top academic capstone acceptance evaluation.",
        points: [
          "Validated concurrent transfer and check-out workflows against operational test datasets",
          "Demonstrated zero double-booking anomalies under competing simulation requests",
          "System operates stably on staging environments populated with realistic dormitory data",
        ],
        confidentialityNote:
          "Zero personally identifiable student records (PII) are published in public code repositories or demonstrations.",
      },

      links: {
        githubUrl: "https://github.com/Baodubaiz",
        liveUrl: "https://baodubaiz-resume.vercel.app",
        caseStudyUrl: "#projects",
      },
    },

    {
      id: "novatech-ecommerce-platform",
      slug: "novatech-ecommerce-platform",
      title: "NovaTech — Laptop & Components E-Commerce Platform",
      subtitle:
        "Specialized computer hardware e-commerce system with Java Spring Boot architecture, PayOS integration, and inventory synchronization",
      category: "E-Commerce / Computer Hardware",
      categoryKey: "ecommerce",
      status: "Active Personal Project (Sandbox Verified)",
      featured: true,
      role: "Full-stack Developer (Backend Engineering Emphasis)",

      overviewBrief:
        "Full-stack e-commerce platform tailored for laptops and hardware components, solving flexible technical specification modeling, checkout inventory concurrency, asynchronous payment webhook processing, and cloud media delivery via AWS.",
      keyHighlights: [
        "Flexible hardware specification modeling inspired by controlled EAV patterns",
        "Inventory concurrency protection using transactional locking boundaries",
        "PayOS payment webhook processing with checksum verification and order state machines",
        "Spring Security with JWT and secure Refresh Token Rotation",
      ],
      engineeringFocusTags: [
        "Concurrency Control",
        "Data Modeling",
        "Payment Integration",
        "Webhook Processing",
        "Session Lifecycle",
        "Cloud Storage",
      ],
      primaryTechStack: [
        "Java 17",
        "Spring Boot",
        "Spring Data JPA",
        "PostgreSQL",
        "Next.js",
        "PayOS",
        "AWS S3 & CloudFront",
      ],

      detailedOverview: {
        systemPurpose:
          "Specialized computer hardware e-commerce platform providing granular specification lookups, laptop customization, and secure payment processing.",
        targetUsers:
          "Tech enthusiasts, hardware engineers seeking precise component specifications, and online retail shoppers.",
        businessNeed:
          "Handle diverse, polymorphic technical specifications without schema chaos, prevent overselling during checkout spikes, and process automated payment settlements reliably.",
        technicalInterest:
          "Classic distributed engineering challenges: concurrency control in online checkouts, extensible schema design, webhook idempotency, and cloud media distribution.",
      },

      capabilities: [
        {
          id: "catalog-variants",
          title: "Product Catalog & Hardware Variants",
          description:
            "Manages multi-variant products (RAM, SSD, GPU, color) and flexible technical specifications.",
          workflows: [
            "Hierarchy: Base Product -> Product Variants (SKU) with independent pricing and inventory",
            "Polymorphic specification attributes organized by category (CPU sockets, display refresh rates)",
            "Multi-attribute catalog filtering by brand, price range, and technical specifications",
            "Product detail pages featuring standardized technical specification matrices",
          ],
        },
        {
          id: "checkout-payment",
          title: "Checkout Orchestration & PayOS Integration",
          description:
            "Coordinates online checkout workflows, payment gateway sessions, and webhook processing.",
          workflows: [
            "Client-side cart state management synchronized via Zustand",
            "Generation of secure PayOS checkout sessions and QR payment redirects",
            "Asynchronous PayOS webhook ingestion updating order statuses in real time",
            "Order history tracking and downloadable transaction receipts",
          ],
        },
        {
          id: "inventory-orders",
          title: "Inventory Control & Order State Machine",
          description:
            "Enforces real-time inventory deduction and deterministic order state transitions.",
          workflows: [
            "Real-time stock availability verification during cart checkout",
            "Concurrency-safe inventory decrement preventing race conditions",
            "Order state machine: Pending Payment -> Paid -> Processing -> Shipped / Cancelled",
            "Automatic stock restocking upon payment expiry or customer cancellation",
          ],
        },
        {
          id: "auth-security",
          title: "Authentication, Authorization & Session Security",
          description:
            "Protects user accounts and administrative portals with Spring Security and JWT.",
          workflows: [
            "Customer registration, login, and Role-Based Access Control (Customer, Admin)",
            "Short-lived Access Tokens paired with rotating Refresh Tokens",
            "Refresh Token Rotation mechanism mitigating stolen token replay attacks",
          ],
        },
        {
          id: "media-devops",
          title: "Cloud Media Delivery & CI/CD Automation",
          description:
            "Stores high-resolution assets in AWS S3, distributes via CloudFront CDN, and automates builds.",
          workflows: [
            "Product image uploads offloaded to AWS S3 and cached globally via CloudFront",
            "EC2 backend deployment behind Nginx reverse proxy with automated SSL",
            "Continuous Integration and Continuous Deployment pipelines via GitHub Actions and GitLab Runner",
          ],
        },
      ],

      challenges: [
        {
          id: "challenge-eav-modeling",
          title: "Flexible Hardware Specification Modeling",
          engineeringFocus: [
            "Data Modeling",
            "Schema Flexibility",
            "Database Design",
          ],
          problem: {
            description:
              "Disparate computer hardware categories (laptops, CPUs, GPUs, motherboards) feature completely distinct attribute sets. A rigid SQL table with dozens of nullable columns quickly becomes unwieldy, brittle, and unmaintainable.",
            conditions:
              "Introducing new hardware categories necessitates schema alterations if relying on static wide tables.",
            risk:
              "Database bloat with sparse null values, complex migrations, and potential operational downtime during schema alterations.",
          },
          approach: {
            description:
              "Segregated core product entities from polymorphic attributes using a controlled Entity-Attribute-Value (EAV) structure.",
            mechanisms: [
              "ProductVariant entity captures common SKU, price, stock, and thumbnail attributes",
              "ProductAttribute and ProductAttributeValue tables record strongly-typed polymorphic key-value pairs",
              "Spring Boot validation layer verifies attribute data types and required fields prior to persistence",
            ],
          },
          tradeoffs: {
            benefits: [
              "Enables dynamic attribute addition for new hardware lines without database schema migrations",
              "Facilitates dynamic rendering of comprehensive specification tables in Next.js",
            ],
            complexities: [
              "Complex multi-attribute filtering queries require multi-table JOINs",
              "Demands composite indexing on `(attribute_id, value)` to maintain query efficiency",
            ],
            justification:
              "Hardware e-commerce demands deep technical specification flexibility while keeping database schemas clean.",
          },
        },
        {
          id: "challenge-inventory-concurrency",
          title: "Inventory Concurrency & Race Condition Prevention",
          engineeringFocus: [
            "Concurrency Control",
            "Race Conditions",
            "Transaction Management",
          ],
          problem: {
            description:
              "During high-demand flash sales or low-stock situations, multiple shoppers may attempt to checkout the same hardware unit simultaneously. Uncoordinated concurrent reads perceive stock as available, resulting in overselling beyond physical inventory.",
            conditions:
              "Frequently occurs during promotional campaigns or when high-value inventory counts drop to 1-2 units.",
            risk:
              "Customers charged for unavailable items, triggering dispute charges, operational strain, and brand damage.",
          },
          approach: {
            description:
              "Enforced strict `@Transactional` boundaries in Spring Data JPA coupled with targeted database locking.",
            mechanisms: [
              "Applied Pessimistic Write Locks (`PESSIMISTIC_WRITE`) on inventory records during payment checkout confirmation",
              "Re-verified available quantity immediately inside the lock boundary prior to decrementing stock",
              "Handled lock acquisition failures gracefully with user-friendly out-of-stock messaging",
            ],
          },
          tradeoffs: {
            benefits: [
              "Completely eliminates overselling risks (Zero Overselling Guarantee)",
              "Ensures stock values accurately mirror physical inventory throughout the checkout lifecycle",
            ],
            complexities: [
              "Row-level locking increases wait time for competing threads on the same SKU",
              "Transaction scope and execution duration must be minimized to maintain throughput",
            ],
            justification:
              "In high-value hardware retail, inventory correctness strictly supersedes microsecond throughput optimizations.",
          },
        },
        {
          id: "challenge-webhook-processing",
          title: "Resilient Asynchronous PayOS Webhook Processing",
          engineeringFocus: [
            "Payment Integration",
            "Webhook Processing",
            "State Consistency",
          ],
          problem: {
            description:
              "External payment webhooks delivered over public networks may suffer network latency, duplicate retries, or spoofed malicious payloads sent to the endpoint.",
            conditions:
              "Transient network blips prevent payment providers from receiving 200 OK immediately, triggering automated retry cycles.",
            risk:
              "Duplicate order fulfillments, corrupted status transitions, or unauthorized fraudulent order confirmation.",
          },
          approach: {
            description:
              "Engineered a multi-layered webhook processing pipeline featuring cryptographic signature verification and state machines.",
            mechanisms: [
              "Validated incoming PayOS HMAC checksum signatures prior to parsing payload contents",
              "Mapped external transaction identifiers to internal Order entities and verified current states",
              "Enforced monotonic state machine transitions (only transitioning from PENDING to PAID)",
              "Logged processed transaction hashes to reject duplicate replay events idempotently",
            ],
          },
          tradeoffs: {
            benefits: [
              "100% rejection of spoofed requests lacking valid provider cryptographic signatures",
              "Guarantees idempotent execution when webhooks are retried multiple times",
            ],
            complexities: [
              "Requires secure secret management and careful timestamp synchronization",
              "Demands granular webhook event logging for accounting reconciliation",
            ],
            justification:
              "Direct monetary transactions necessitate uncompromising security and idempotency standards.",
          },
        },
        {
          id: "challenge-query-optimization",
          title: "Catalog Query Optimization & SSR Rendering",
          engineeringFocus: [
            "Query Optimization",
            "Indexing",
            "Pagination",
            "SSR",
          ],
          problem: {
            description:
              "Hardware catalogs feature thousands of SKUs with diverse filters. Unindexed multi-parameter queries trigger full table scans, overloading database resources and degrading user experiences.",
            conditions:
              "Users filtering across price ranges, manufacturers, and hardware specifications simultaneously.",
            risk:
              "Sluggish page loads, degraded Core Web Vitals, and decreased e-commerce conversion rates.",
          },
          approach: {
            description:
              "Executed filtering and pagination directly within PostgreSQL via Spring Data JPA Pageable paired with Next.js SSR.",
            mechanisms: [
              "Introduced B-Tree indexes on high-frequency search columns: price, brand, categoryId, createdAt",
              "Employed Server-Side Rendering (SSR) in Next.js for product detail pages to optimize SEO and TTFB",
              "Segregated lightweight summary DTOs for catalog grids from heavyweight detailed product views",
            ],
          },
          tradeoffs: {
            benefits: [
              "Maintained sub-60ms catalog query latencies even under multi-faceted filter combinations",
              "Optimized search engine crawling and indexing through server-side rendered markup",
            ],
            complexities: [
              "Secondary indexes consume additional disk space and slightly increase write latency during inventory updates",
              "SSR demands deliberate caching policies to prevent repeated load on backend APIs",
            ],
            justification:
              "Catalog exploration speed directly impacts customer retention and purchase conversion.",
          },
        },
        {
          id: "challenge-auth-token-rotation",
          title: "JWT Authentication & Secure Refresh Token Rotation",
          engineeringFocus: [
            "Authentication",
            "Authorization",
            "Session Lifecycle",
          ],
          problem: {
            description:
              "Users expect persistent sessions without re-authenticating repeatedly. However, long-lived refresh tokens without invalidation capabilities leave accounts vulnerable if tokens are intercepted.",
            conditions:
              "Clients connecting from unmanaged public networks or shared workstations.",
            risk:
              "Stolen refresh tokens grant unauthorized account takeover without administrative detection mechanisms.",
          },
          approach: {
            description:
              "Configured Spring Security with stateless JWT filters and automated Refresh Token Rotation.",
            mechanisms: [
              "Issued short-lived Access Tokens (15 minutes) limiting the exposure window if intercepted",
              "Upon every token renewal, a fresh Refresh Token is issued and the predecessor is invalidated immediately",
              "Tracked invalidated tokens: if a previously revoked token is presented, the system flags potential theft and terminates all associated sessions",
            ],
          },
          tradeoffs: {
            benefits: [
              "Instantly detects and neutralizes credential replay attacks",
              "Achieves optimal balance between tight session security and smooth user experiences",
            ],
            complexities: [
              "Requires handling concurrent frontend refresh calls without prematurely triggering reuse invalidation",
              "Demands server-side tracking of invalidated token families",
            ],
            justification:
              "Protecting user payment details and order records is an essential duty of modern retail software.",
          },
        },
        {
          id: "challenge-cloud-media-delivery",
          title: "Cloud Media Storage & Automated Deployment Pipelines",
          engineeringFocus: [
            "Cloud Storage",
            "CDN",
            "Deployment Automation",
            "CI/CD",
          ],
          problem: {
            description:
              "High-resolution product photography stored on the application compute server consumes disk space and saturates bandwidth during traffic peaks.",
            conditions:
              "Catalog housing thousands of high-resolution component photos with multiple viewing angles.",
            risk:
              "Slow asset loading, compute host I/O saturation, and cumbersome data backup routines.",
          },
          approach: {
            description:
              "Offloaded media storage to AWS S3 and distributed static assets via Amazon CloudFront CDN edge caching.",
            mechanisms: [
              "Uploaded product imagery directly to private AWS S3 object buckets",
              "Configured CloudFront edge distribution delivering cached assets globally with minimal latency",
              "Deployed Spring Boot backend onto AWS EC2 behind an Nginx reverse proxy with automated SSL certificates",
              "Configured GitHub Actions and GitLab Runner CI/CD pipelines automating linting, testing, and deployment",
            ],
          },
          tradeoffs: {
            benefits: [
              "Reduced application compute server bandwidth and disk I/O by over 90%",
              "Ultra-fast image delivery to visitors worldwide regardless of geography",
            ],
            complexities: [
              "Incurs cloud operational expenses and requires secure IAM policy management",
              "Requires cache invalidation policies when modifying existing product images",
            ],
            justification:
              "Cloud-native asset architecture ensures horizontal scalability as product catalogs grow.",
          },
        },
      ],

      architecture: {
        summary:
          "Full-stack architecture featuring a Next.js App Router storefront communicating with a Spring Boot layered backend. PostgreSQL persists relational data, AWS S3/CloudFront distributes media, PayOS handles payments, and CI/CD pipelines automate testing and deployment.",
        components: [
          {
            layer: "Frontend Storefront",
            name: "Next.js App Router (TypeScript)",
            description:
              "Storefront interface with SSR for product pages, Zustand for synchronized cart state, and Tailwind CSS.",
            status: "implemented",
          },
          {
            layer: "Backend Application",
            name: "Java 17 & Spring Boot",
            description:
              "Backend system delivering RESTful APIs, Spring Security JWT, transaction coordination, and webhook listeners.",
            status: "implemented",
          },
          {
            layer: "Data Persistence",
            name: "PostgreSQL & Spring Data JPA",
            description:
              "Stores product entities, polymorphic EAV attributes, orders, user accounts, and inventory records.",
            status: "implemented",
          },
          {
            layer: "Payment Gateway",
            name: "PayOS Payment Gateway",
            description:
              "Online payment settlement via VietQR and bank transfer with asynchronous webhook notifications.",
            status: "external",
          },
          {
            layer: "Cloud Media & CDN",
            name: "AWS S3 & Amazon CloudFront",
            description:
              "Product image object storage and edge caching delivery network.",
            status: "implemented",
          },
          {
            layer: "Infrastructure & CI/CD",
            name: "AWS EC2 + Nginx SSL + GitHub Actions",
            description:
              "EC2 compute host with Nginx reverse proxy, Let's Encrypt SSL, and automated CI/CD pipelines.",
            status: "implemented",
          },
        ],
        workflowSteps: [
          {
            step: "01",
            actor: "Customer",
            action: "Select Variant & Proceed to Checkout",
            detail:
              "Chooses hardware specifications and submits order checkout request",
          },
          {
            step: "02",
            actor: "Spring Boot Service",
            action: "Lock Inventory & Generate Payment Link",
            detail:
              "Locks stock record, reserves units, and calls PayOS to initiate payment session",
          },
          {
            step: "03",
            actor: "PayOS Gateway",
            action: "Settle Payment & Dispatch Webhook",
            detail:
              "Customer scans VietQR, PayOS verifies settlement and sends signed webhook",
          },
          {
            step: "04",
            actor: "Backend Webhook Handler",
            action: "Verify Signature & Transition Order",
            detail:
              "Validates checksum, confirms order state machine, and marks order as PAID",
          },
        ],
      },

      techStackDetailed: [
        {
          category: "Frontend & User Experience",
          items: [
            {
              name: "Next.js (App Router)",
              purpose: "SSR for product discovery and SEO, client components for cart interactions",
            },
            {
              name: "TypeScript",
              purpose: "Strict typing for hardware specifications and order payloads",
            },
            {
              name: "Zustand",
              purpose: "Lightweight cart state management with local storage persistence",
            },
            {
              name: "Tailwind CSS",
              purpose: "Sleek dark mode design system and responsive hardware layout utilities",
            },
          ],
        },
        {
          category: "Backend & Enterprise Platform",
          items: [
            {
              name: "Java 17 & Spring Boot 3",
              purpose: "High-performance enterprise backend architecture and service layer",
            },
            {
              name: "Spring Data JPA & Hibernate",
              purpose: "Relational mapping, transaction boundary enforcement, and query optimization",
            },
            {
              name: "Spring Security",
              purpose: "Stateless JWT filter chains, RBAC guards, and session security",
            },
          ],
        },
        {
          category: "Database & Payments",
          items: [
            {
              name: "PostgreSQL",
              purpose: "Primary relational database providing ACID transactions and indexing",
            },
            {
              name: "PayOS Gateway",
              purpose: "Online payment gateway providing QR payments and signed webhooks",
            },
          ],
        },
        {
          category: "Cloud & DevOps",
          items: [
            {
              name: "AWS S3 & CloudFront",
              purpose: "Object storage for media assets and low-latency global CDN edge delivery",
            },
            {
              name: "AWS EC2 & Nginx",
              purpose: "Cloud compute host, reverse proxying, and automated SSL termination",
            },
            {
              name: "GitHub Actions & GitLab Runner",
              purpose: "Automated linting, unit testing, Docker builds, and deployment workflows",
            },
          ],
        },
      ],

      contribution: {
        roleTitle: "Full-stack Developer (Backend Engineering Emphasis)",
        implementedFeatures: [
          "Designed relational database schemas and JPA entities for products, variants, and polymorphic attributes",
          "Engineered checkout workflows, cart validation, and pessimistic locking to prevent overselling",
          "Integrated PayOS payment APIs and developed the cryptographic webhook listener",
          "Configured Spring Security JWT filter chains with automated Refresh Token Rotation",
          "Developed Next.js storefront pages with Zustand cart persistence and specification matrices",
        ],
        architecturalDecisions: [
          "Applied controlled EAV attribute structures to accommodate polymorphic specs without schema churn",
          "Used row-level pessimistic locking within transactional boundaries to eliminate checkout race conditions",
          "Offloaded static media storage to AWS S3 and CloudFront CDN to isolate compute server loads",
        ],
        integrationsAndDevOps: [
          "Provisioned AWS EC2 compute instances, configured Nginx reverse proxy and SSL certificates",
          "Created continuous integration and deployment pipelines using GitHub Actions",
        ],
      },

      outcomes: {
        verificationStatus:
          "Active personal project; successfully verified end-to-end checkout and payment flows in PayOS Sandbox.",
        points: [
          "100% verified checkout settlement flows within the PayOS Sandbox testing environment",
          "Automated concurrency simulation test suite confirming zero overselling under race conditions",
          "Cryptographic webhook signature verification successfully repels counterfeit event injections",
          "Operational CI/CD pipelines automate testing, linting, and build verification on push",
        ],
        confidentialityNote:
          "As an active engineering project, metrics reflect verified sandbox tests and architecture implementations rather than simulated commercial production traffic.",
      },

      links: {
        githubUrl: "https://github.com/Baodubaiz",
        liveUrl: "https://baodubaiz-resume.vercel.app",
        caseStudyUrl: "#projects",
      },
    },

    {
      id: "datviet-realestate-platform",
      slug: "datviet-realestate-platform",
      title: "Đất Việt Group — Real Estate Digital Platform",
      subtitle:
        "Enterprise platform for real estate project exploration, concurrent reservation management, 3D visualization, and multi-channel customer communications",
      category: "Real Estate / Enterprise Platform",
      categoryKey: "enterprise",
      status: "In-House Enterprise Platform (Verified Operational Delivery)",
      featured: true,
      role: "Full-stack Software Engineer",

      overviewBrief:
        "Enterprise digital platform unifying multi-tier property hierarchies from projects down to individual residential units. Features Three.js spatial modeling, 360° Pannellum panoramas, Redis distributed locking preventing reservation conflicts, atomic Lua token rotation, and multi-channel real-time notifications.",
      keyHighlights: [
        "Redis-based distributed locking preventing conflicting property reservations",
        "Atomic Lua script refresh token rotation with credential reuse detection",
        "Multi-channel real-time notification pipeline: PostgreSQL, SSE, Firebase FCM, and Email",
        "Interactive 3D visualization via Three.js, 360° panoramas, and dynamic SVG floorplans",
        "Enterprise observability with MDC Trace ID propagation and Grafana Loki aggregation",
      ],
      engineeringFocusTags: [
        "Concurrency Control",
        "Distributed Locking",
        "Session Security",
        "Real-time Communication",
        "Document Processing",
        "Observability",
        "Rate Limiting",
      ],
      primaryTechStack: [
        "Java 17",
        "Spring Boot (DDD)",
        "PostgreSQL",
        "Redis & Lua",
        "React 19",
        "Three.js",
        "SSE & Firebase",
        "Grafana Loki",
      ],

      detailedOverview: {
        systemPurpose:
          "Enterprise digital hub centralizing property inventory, enabling prospective home buyers to explore digital twins, review architectural specifications, reserve units online, and connect with sales advisors.",
        targetUsers:
          "Prospective property buyers, real estate sales agents, inventory management officers, and executive project directors.",
        businessNeed:
          "Eliminate double-booking conflicts across disparate sales channels, digitalize remote property exploration, and maintain transparent, auditable legal documentation.",
        technicalInterest:
          "Spring Boot Modular Monolith adhering to Domain-Driven Design principles, distributed locking via Redis, client-side WebGL acceleration, and production observability with centralized structured logging.",
      },

      capabilities: [
        {
          id: "property-discovery",
          title: "Project Discovery & Hierarchical Inventory",
          description:
            "Manages and showcases property data across multi-tier architectural hierarchies with real-time inventory indicators.",
          workflows: [
            "Data hierarchy: Projects -> Zones -> Towers / Streets -> Units / Land Lots",
            "Comprehensive specification sheets: gross area, net usable area, orientation, legal status",
            "Real-time inventory indicators: Available, Holding, Reserved, Sold",
          ],
        },
        {
          id: "spatial-visualization",
          title: "Interactive Spatial Visualization & Digital Twins",
          description:
            "Utilizes modern WebGL graphics technologies to deliver immersive property exploration.",
          workflows: [
            "Interactive 3D master plans using Three.js and React Three Fiber",
            "360° virtual reality panorama tours of show units via Pannellum",
            "Interactive neighborhood amenity and geospatial mapping using Leaflet",
            "Responsive SVG architectural floor plans dynamically color-coded by unit status",
          ],
        },
        {
          id: "booking-concurrency",
          title: "Unit Reservation & Concurrency Control",
          description:
            "Secures online unit reservations through distributed locking and automated TTL expiries.",
          workflows: [
            "Temporary unit reservation locking when customer initiates reservation workflows",
            "Holding TTL countdown timer automatically releasing units if checkout is abandoned",
            "Strict cancellation rules and inventory protection policies",
          ],
        },
        {
          id: "auth-messaging",
          title: "Secure Authentication & Multi-Channel Messaging",
          description:
            "Protects user sessions and coordinates real-time updates across multiple delivery channels.",
          workflows: [
            "JWT authentication, Google OAuth2 integration, and SMS OTP verification",
            "Real-time browser notifications dispatched via Server-Sent Events (SSE)",
            "Mobile push notifications delivered through Firebase Cloud Messaging (FCM)",
            "Transactional email confirmations for reservations and financial receipts",
          ],
        },
        {
          id: "ai-rag-integration",
          title: "AI Property Advisory & Legal Retrieval",
          description:
            "Integrates a dedicated RAG service answering customer inquiries with cited documentation.",
          workflows: [
            "Secure REST communication between Spring Boot and dedicated FastAPI RAG services",
            "Redis-backed rate limiting safeguarding AI endpoints from abuse per user and IP",
            "Generated responses bundled with verified source references from legal documents",
          ],
        },
        {
          id: "media-documents",
          title: "High-Volume Media & Heavy Document Processing",
          description:
            "Manages high-resolution imagery and renders complex architectural blueprints in the browser.",
          workflows: [
            "Chunked upload pipelines for large media assets offloaded to Cloudinary",
            "Architectural CAD/PDF decoding executed inside Web Workers via PDF.js",
            "Spreadsheet parsing of multi-thousand-row price lists via ExcelJS",
            "Strict HTML sanitization filtering dangerous markup before database persistence",
          ],
        },
        {
          id: "observability-tracing",
          title: "System Observability & Incident Tracing",
          description:
            "Monitors system health and correlates requests across concurrent backend execution paths.",
          workflows: [
            "Automatic Trace ID generation for every inbound HTTP request",
            "Trace ID injection into Logback Mapped Diagnostic Context (MDC) and response headers",
            "Centralized structured log streaming into Grafana Loki for rapid incident diagnosis",
          ],
        },
      ],

      challenges: [
        {
          id: "challenge-conflicting-reservations",
          title: "Preventing Conflicting Concurrent Unit Reservations",
          engineeringFocus: [
            "Concurrency Control",
            "Distributed Locking",
            "Booking State Management",
          ],
          problem: {
            description:
              "During high-profile digital launch events with thousands of concurrent buyers, multiple users may click to reserve the exact same prime unit at the exact same millisecond. Simple database reads perceive the unit as available for all requests, leading to catastrophic double-booking anomalies.",
            conditions:
              "Frequently occurs during project launch events and promotional flash sales.",
            risk:
              "Double-booking property units, triggering severe legal disputes, regulatory sanctions, and customer trust destruction.",
          },
          approach: {
            description:
              "Implemented Redis-based distributed locking keyed by property identifier coupled with transactional database verification.",
            mechanisms: [
              "Acquired distributed lock with fine-grained key: `lock:property:{propertyId}` with automated TTL release (e.g., 10 seconds) preventing deadlocks upon process crash",
              "Upon acquiring lock, backend immediately re-verifies unit status in PostgreSQL within an isolated transaction boundary",
              "Transitions unit state from 'AVAILABLE' to 'HOLDING', binding the user ID and setting a 15-minute holding TTL",
              "Employed scheduled background tasks and lazy on-demand evaluations to release expired holdings automatically",
            ],
          },
          tradeoffs: {
            benefits: [
              "Completely prevents two customers from successfully reserving the same unit",
              "Lock TTL guarantees units are never permanently locked if servers experience unexpected crashes",
            ],
            complexities: [
              "Introduces operational dependence on a highly-available Redis cluster",
              "Lock TTL must be calibrated carefully: long enough to cover DB transactions, but short enough to avoid lock contention",
            ],
            justification:
              "In multi-billion VND real estate transactions, booking correctness is an existential business prerequisite.",
          },
        },
        {
          id: "challenge-token-rotation-lua",
          title: "Atomic Token Rotation via Lua Scripts & Credential Reuse Detection",
          engineeringFocus: [
            "Session Security",
            "Token Rotation",
            "Credential Reuse Detection",
          ],
          problem: {
            description:
              "The platform serves sales agents and prospective buyers with sensitive financial privileges. If a refresh token is intercepted and presented by an attacker to obtain new access tokens, naive systems perpetuate the compromised session indefinitely.",
            conditions:
              "Occurs when tokens leak over unsecured networks or malware-infected client machines.",
            risk:
              "Attacker hijacks sessions, tampers with booking agreements, or compromises customer accounts.",
          },
          approach: {
            description:
              "Engineered Refresh Token Rotation stored in Redis, executed atomically via Redis Lua scripts, and tracking cryptographic token families.",
            mechanisms: [
              "Maintained token family relationships in Redis; executed an atomic Lua script upon renewal checking current token validity",
              "If valid: the Lua script revokes the prior token and generates a new token within an indivisible atomic operation",
              "If the submitted token was ALREADY REVOKED (indicating replay of an intercepted token): the script flags a security breach and IMMEDIATELY revokes the entire token family, forcing re-authentication across all sessions",
              "Refresh tokens stored securely in HttpOnly cookies with Secure and SameSite flags",
            ],
          },
          tradeoffs: {
            benefits: [
              "Instantly detects and neutralizes token replay theft without periodic scanning",
              "Atomic Lua script execution prevents race conditions when simultaneous refresh calls originate from the same client",
            ],
            complexities: [
              "Demands centralized session state in Redis rather than pure statelessness",
              "Network jitter causing client-side request retries could inadvertently trigger family revocation",
            ],
            justification:
              "Protecting high-value real estate financial operations demands enterprise-grade session lifecycle security.",
          },
        },
        {
          id: "challenge-multi-channel-notifications",
          title: "Multi-Channel Real-Time Notification Pipeline Orchestration",
          engineeringFocus: [
            "Real-time Communication",
            "Notification Persistence",
            "Service Integration",
          ],
          problem: {
            description:
              "When unit availability changes, updates must immediately broadcast to active browser sessions, while sending push notifications and transactional confirmation emails. Synchronously coupling these disparate channels risks timing out core booking transactions if third-party providers stall.",
            conditions:
              "Triggered on property state mutations or confirmed booking deposits.",
            risk:
              "Core transactions hung awaiting email SMTP acknowledgements, or buyers viewing stale inventory statuses.",
          },
          approach: {
            description:
              "Decoupled core transactional workflows from the notification pipeline using asynchronous event-driven dispatches.",
            mechanisms: [
              "Persisted notification records into PostgreSQL guaranteeing a permanent in-app notification history",
              "Dispatched real-time browser updates via Server-Sent Events (SSE) avoiding WebSocket bi-directional connection overhead",
              "Offloaded mobile push notifications via Firebase Cloud Messaging and transactional emails to background thread pools",
              "Isolated failure boundaries: third-party push or email failures never rollback primary database transactions",
            ],
          },
          tradeoffs: {
            benefits: [
              "Maintained booking transaction response times under 150ms",
              "Delivered immediate, synchronized updates across desktop and mobile devices",
            ],
            complexities: [
              "Managing SSE connection lifecycles (heartbeats, reconnect logic) on both client and server",
              "Explicitly segregating 'Persisted' state from 'Delivered' delivery receipts",
            ],
            justification:
              "Real-time reactivity fosters high customer engagement and confidence during competitive property launches.",
          },
        },
        {
          id: "challenge-rag-rate-limiting",
          title: "Safeguarding AI RAG Advisory with Rate Limiting & Citations",
          engineeringFocus: [
            "Rate Limiting",
            "Service Integration",
            "Retrieval-Augmented Generation",
          ],
          problem: {
            description:
              "The conversational AI advisory service retrieves zoning regulations and legal policies using vector embeddings and LLMs. Unrestricted public access risks rapid API quota exhaustion and denial-of-service from automated scrapers.",
            conditions:
              "Users or automated crawlers submitting dozens of rapid consecutive queries.",
            risk:
              "Skyrocketing external API bills and backend service degradation for genuine prospective home buyers.",
          },
          approach: {
            description:
              "Routed all AI inquiries through the Spring Boot API Gateway before calling FastAPI RAG, enforced by Redis rate limiters.",
            mechanisms: [
              "Enforced Sliding Window / Token Bucket algorithms on Redis tracking requests per user and IP address",
              "Calibrated fair-use limits (e.g., maximum 10 inquiries per minute for authenticated users)",
              "Mandated that RAG responses return structured metadata citations referencing verified legal documents",
            ],
          },
          tradeoffs: {
            benefits: [
              "Strictly caps operational AI compute expenses and repels automated scraping",
              "Elevates advisory credibility by anchoring responses to official legal references",
            ],
            complexities: [
              "Requires clear UI messaging when users encounter rate limit thresholds",
              "Response quality remains contingent upon vector database index recency and coverage",
            ],
            justification:
              "Cost controls and abuse prevention are prerequisites for sustainable AI feature deployment in enterprise products.",
          },
        },
        {
          id: "challenge-media-resilience",
          title: "Media Upload Resilience, Compensating Cleanup & Content Security",
          engineeringFocus: [
            "File Processing",
            "Failure Handling",
            "Data Consistency",
            "Content Security",
          ],
          problem: {
            description:
              "High-resolution media uploads to Cloudinary may succeed while subsequent database insertion fails due to constraint violations or network interruptions. This creates orphaned cloud assets that incur ongoing storage fees.",
            conditions:
              "Unstable network connectivity or transactional database rollbacks.",
            risk:
              "Accumulation of unreferenced orphaned cloud assets and vulnerability to stored XSS in rich-text descriptions.",
          },
          approach: {
            description:
              "Applied chunked upload protocols, automated transactional compensating cleanup, and server-side HTML sanitization.",
            mechanisms: [
              "Employed chunked uploads for heavy media files to support resumable transfers over flaky connections",
              "If the database transaction fails, caught exceptions trigger compensating API calls to Cloudinary deleting the uploaded asset",
              "Enforced strict HTML sanitization on rich-text project descriptions stripping dangerous script and iframe elements",
            ],
          },
          tradeoffs: {
            benefits: [
              "Maintains clean, cost-effective cloud storage devoid of unreferenced orphan assets",
              "Neutralizes Cross-Site Scripting (XSS) vectors within administrative CMS inputs",
            ],
            complexities: [
              "Compensating deletion calls may themselves face network partitions, requiring dead-letter logging",
            ],
            justification:
              "Ensures bi-directional consistency between external cloud asset providers and core relational databases.",
          },
        },
        {
          id: "challenge-request-tracing",
          title: "Request Tracing with Trace IDs & Centralized Loki Observability",
          engineeringFocus: [
            "Observability",
            "Request Tracing",
            "Production Debugging",
          ],
          problem: {
            description:
              "In a high-concurrency production environment spanning reservation locks, payment gateways, and asynchronous notification workers, debugging sporadic errors from disconnected log files is nearly impossible without correlation IDs.",
            conditions:
              "Customers reporting anomalous booking failures or missing notification receipts.",
            risk:
              "Prolonged Mean Time to Resolution (MTTR) and inability to pinpoint which internal component failed.",
          },
          approach: {
            description:
              "Implemented end-to-end log correlation by generating unique Trace IDs injected into Logback MDC and streaming to Grafana Loki.",
            mechanisms: [
              "Generated a unique UUID Trace ID at the HTTP ingress filter boundary",
              "Injected the Trace ID into Logback's Mapped Diagnostic Context (MDC) ensuring every log line carries the correlation tag",
              "Returned the Trace ID in response headers (`X-Trace-Id`) for client-side support correlation",
              "Streamed structured JSON log events into Grafana Loki enabling instant querying by Trace ID",
            ],
          },
          tradeoffs: {
            benefits: [
              "Drastically reduced incident diagnosis time from hours down to seconds",
              "Delivered end-to-end operational visibility across asynchronous thread executions",
            ],
            complexities: [
              "Requires strict masking rules to prevent logging sensitive user credentials or tokens",
              "Demands defined log retention and compaction policies in Grafana Loki",
            ],
            justification:
              "Centralized observability is an indispensable operational foundation for mission-critical enterprise platforms.",
          },
        },
        {
          id: "challenge-document-workers",
          title: "Heavy Architectural CAD/PDF & Pricing Processing in Web Workers",
          engineeringFocus: [
            "Document Processing",
            "Web Workers",
            "Interactive Visualization",
          ],
          problem: {
            description:
              "High-resolution architectural CAD/PDF blueprints and sprawling price catalogs freeze the browser main UI thread if parsed and rendered naively, causing severe frame drops and jank.",
            conditions:
              "Users viewing detailed multi-megabyte floor plan blueprints or sorting multi-thousand-row price lists.",
            risk:
              "Browser UI freezes with 'Page Unresponsive' dialogs, destroying user experience.",
          },
          approach: {
            description:
              "Offloaded heavy computational document processing to background Web Workers coupled with tiled rendering.",
            mechanisms: [
              "Executed PDF.js inside dedicated Web Workers to parse and decode architectural drawing vectors off the main thread",
              "Applied viewport-aware tiled rendering only rasterizing blueprint segments currently visible to the user",
              "Processed large Excel price sheets using ExcelJS in worker threads, translating floor layouts into lightweight SVG elements",
            ],
          },
          tradeoffs: {
            benefits: [
              "Maintained smooth 60fps main thread responsiveness during heavy document parsing",
              "Users smoothly zoom and pan architectural drawings without UI freezing",
            ],
            complexities: [
              "Requires managing asynchronous message passing (`postMessage`) between workers and the main thread",
              "Demands active worker memory cleanup on memory-constrained mobile devices",
            ],
            justification:
              "Fluid visual performance is critical to projecting high digital craftsmanship for luxury real estate.",
          },
        },
      ],

      architecture: {
        summary:
          "Modular Monolith architecture (Domain-Driven Design) featuring a Java Spring Boot backend and React 19 frontend. Redis coordinates distributed locks, session rotation, and rate limiting; SSE and FCM deliver multi-channel messaging; FastAPI hosts AI advisory; and Grafana Loki provides centralized observability.",
        components: [
          {
            layer: "Frontend Application",
            name: "React 19, TypeScript & Vite",
            description:
              "Single Page Application with Tailwind CSS v4, Three.js 3D visualization, Pannellum 360° panoramas, Leaflet, and Web Workers.",
            status: "implemented",
          },
          {
            layer: "Backend Architecture",
            name: "Java 17 & Spring Boot (Modular Monolith / DDD)",
            description:
              "Bounded contexts: Property, Reservation, Identity, Notification, and Analytics. Spring Security with JWT and HttpOnly cookies.",
            status: "implemented",
          },
          {
            layer: "Distributed Coordination",
            name: "Redis & Lua Scripts",
            description:
              "Executes distributed locks preventing booking collisions, session token rotation, and rate limiting.",
            status: "implemented",
          },
          {
            layer: "Relational Persistence",
            name: "PostgreSQL & Spring Data JPA",
            description:
              "Stores multi-tier property hierarchies, reservation ledgers, notifications, and transactions.",
            status: "implemented",
          },
          {
            layer: "Real-Time Messaging",
            name: "SSE & Firebase Cloud Messaging (FCM)",
            description:
              "Server-Sent Events for real-time inventory updates; FCM for mobile push notifications.",
            status: "implemented",
          },
          {
            layer: "AI Advisory Service",
            name: "FastAPI RAG Service",
            description:
              "Independent generative advisory service querying regulatory and property documentation with source citations.",
            status: "implemented",
          },
          {
            layer: "Observability Layer",
            name: "MDC Trace ID & Grafana Loki",
            description:
              "Centralized log stream aggregation and distributed request tracing for operational diagnostics.",
            status: "implemented",
          },
        ],
        workflowSteps: [
          {
            step: "01",
            actor: "Customer",
            action: "Select Unit on Svg Floorplan",
            detail:
              "Picks preferred property unit and clicks to place temporary holding reservation",
          },
          {
            step: "02",
            actor: "Redis Distributed Lock",
            action: "Acquire Mutex on Property Key",
            detail:
              "Backend locks `lock:property:{id}` with 10s TTL to serialize competing attempts",
          },
          {
            step: "03",
            actor: "Spring Boot Transaction",
            action: "Verify DB State & Transition to HOLDING",
            detail:
              "Confirms vacancy, associates customer ID, and activates 15-minute countdown timer",
          },
          {
            step: "04",
            actor: "Notification Pipeline",
            action: "Broadcast SSE & Dispatch Confirmation",
            detail:
              "Emits SSE event updating floorplan colors for other users and sends push confirmation",
          },
        ],
      },

      techStackDetailed: [
        {
          category: "Frontend & Interactive Visualization",
          items: [
            {
              name: "React 19 & TypeScript",
              purpose: "Modern reactive user interface with strict component typing",
            },
            {
              name: "Three.js & React Three Fiber",
              purpose: "Interactive 3D digital twins and spatial project master plans",
            },
            {
              name: "Pannellum",
              purpose: "360° virtual reality interior panorama viewer for show units",
            },
            {
              name: "Leaflet",
              purpose: "Interactive geospatial mapping for regional amenities",
            },
            {
              name: "PDF.js & Web Workers",
              purpose: "Off-thread architectural CAD and blueprint rendering",
            },
          ],
        },
        {
          category: "Backend & Enterprise Architecture",
          items: [
            {
              name: "Java 17 & Spring Boot",
              purpose: "Modular Monolith structured around Domain-Driven Design principles",
            },
            {
              name: "Spring Data JPA & Hibernate",
              purpose: "Relational persistence and transactional boundary enforcement",
            },
            {
              name: "Spring Security & Google OAuth2",
              purpose: "Role-based authentication, social login, and session lifecycle guards",
            },
          ],
        },
        {
          category: "Distributed Coordination & Data",
          items: [
            {
              name: "Redis & Lua Scripts",
              purpose: "Distributed locking, atomic token rotation, and rate limiters",
            },
            {
              name: "PostgreSQL",
              purpose: "Relational persistence for multi-tier property hierarchies and transactions",
            },
          ],
        },
        {
          category: "Real-Time, AI & Observability",
          items: [
            {
              name: "Server-Sent Events (SSE)",
              purpose: "Real-time uni-directional inventory status updates streamed to browsers",
            },
            {
              name: "Firebase Cloud Messaging & SMTP",
              purpose: "Mobile push alerts and transactional email confirmations",
            },
            {
              name: "FastAPI RAG Service",
              purpose: "AI generative retrieval for legal and project documentation",
            },
            {
              name: "Logback MDC & Grafana Loki",
              purpose: "End-to-end Trace ID correlation and centralized log analytics",
            },
          ],
        },
      ],

      contribution: {
        roleTitle: "Full-stack Software Engineer",
        implementedFeatures: [
          "Designed and implemented Redis distributed locking preventing conflicting property reservations",
          "Engineered atomic Lua token rotation scripts with credential reuse detection",
          "Developed Server-Sent Events (SSE) real-time inventory broadcast listeners and Firebase push integration",
          "Configured Trace ID middleware and Logback MDC logging integrated with Grafana Loki",
          "Integrated interactive SVG floorplan components and Web Worker document parsing routines",
        ],
        architecturalDecisions: [
          "Adopted Modular Monolith (DDD) principles to maintain clean domain boundaries across property modules",
          "Differentiated Redis distributed locks (concurrency arbitration) from DB validation (final correctness anchor)",
          "Decoupled core transactional operations from multi-channel notification pipelines",
        ],
        integrationsAndDevOps: [
          "Integrated Cloudinary chunked uploads with transactional compensating cleanup routines",
          "Connected Spring Boot gateway with FastAPI RAG services protected by Redis rate limiters",
        ],
      },

      outcomes: {
        verificationStatus:
          "In-house enterprise platform delivered and deployed for operational business workflows.",
        points: [
          "Validated under load testing with simulated concurrent booking requests confirming zero duplicate assignments",
          "Atomic Lua token rotation successfully repels simulated token replay attacks",
          "Real-time inventory changes broadcast to connected client browsers with sub-200ms latency",
        ],
        confidentialityNote:
          "Strict adherence to enterprise non-disclosure policies: zero proprietary source code, private customer records, or confidential financial metrics are exposed.",
      },

      links: {
        caseStudyUrl: "#projects",
        isPrivateRepo: true,
      },
    },
  ],
};
