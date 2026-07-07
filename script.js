const editAccessEnabled = new URLSearchParams(window.location.search).get("edit") === "1" || window.location.hash === "#edit";

if (editAccessEnabled) {
  document.documentElement.classList.add("portfolio-edit-enabled");
}

const works = {};

const eventFieldLabels = {
  product: "Event Purpose",
  concept: "Concept",
  project: "Project",
  target: "Target"
};

const brandFieldLabels = {
  product: "Brand",
  concept: "Concept",
  project: "Project",
  target: "Target"
};

const visualFieldLabels = {
  product: "Tool",
  concept: "Purpose",
  project: "Direction",
  target: "Process"
};

Object.assign(works, {
  toothbrushGlobal: {
    category: "상세페이지",
    title: "Tooth Brush",
    image: "assets/detail_01_toothbrush.webp",
    alt: "Dencle toothbrush detail page",
    summary: "기존 칫솔과 차별화된 구조 및 특허 기술을 인포그래픽과 다이어그램으로 정리해, 해외 소비자가 제품의 기능과 양치 효과를 빠르게 이해하도록 구성한 상세페이지입니다.",
    product: "덴클 잇몸 케어 칫솔",
    concept: "치과의사와 공동 개발한 특허 디자인 제품으로, 전문성과 칫솔 고유의 구조적 특징을 강조",
    project: "1인 100% (텍스트 제외)",
    target: "브랜드 충성 고객 / 프리미엄 제품을 찾는 소비자"
  },
  granuleOfficial: {
    category: "상세페이지",
    title: "Tooth Granule (가루치약)",
    image: "assets/detail_02_toothgranule_official.webp",
    alt: "Dencle tooth granule official detail page",
    summary: "특허받은 그래뉼 치약의 제형과 무수분·무방부제 제품력을 전문적이고 신뢰감 있게 전달하며, 브랜드 공식 홈페이지에 맞춰 풍부한 정보와 긴 호흡의 콘텐츠로 구성한 상세페이지입니다.",
    product: "덴클 그래뉼치약",
    concept: "브랜드 아이덴티티와 전문성, 신뢰감을 바탕으로 그래뉼 치약만의 특허 기술과 차별점을 강조",
    project: "1인 100% (텍스트 제외)",
    target: "브랜드 충성 고객 / 프리미엄 제품을 찾는 소비자"
  },
  granule: {
    category: "상세페이지",
    title: "Tooth Granule (가루치약)",
    image: "assets/detail_03_toothgranule_kakao.webp",
    alt: "Dencle tooth granule gift detail page",
    summary: "특허받은 그래뉼 치약의 제형과 무수분·무방부제 제품력을 감각적인 비주얼로 표현하고, 카카오톡 선물하기 플랫폼에 맞춰 트렌디하면서도 직관적으로 구성한 상세페이지입니다.",
    product: "덴클 그래뉼치약",
    concept: "감성적이고 트렌디한 무드 안에서 그래뉼 치약만의 특허 기술과 차별점을 강조",
    project: "1인 100% (텍스트 제외)",
    target: "2030 젊은 소비층 / 선물 구매자"
  },
  connectKinloch: {
    category: "패션 브랜드 상세페이지 개선",
    title: "커넥트킨록",
    image: "assets/detail_04_connect_kinloch.webp",
    beforeImage: "assets/detail_04_connect_kinloch_before.png",
    alt: "Connect Kinloch menswear detail page",
    summary: "<p class='summary-section'><span class='summary-label'>[기존 문제]</span>분절된 레이아웃으로 인해 제품의 실루엣 인지 및 텍스처 전달력이 낮음. 다소 좁은 여백으로 텍스트 가독성이 떨어짐.</p><p class='summary-section'><span class='summary-label'>[디자인 솔루션]</span>미니멀 톤앤무드 확립, 모델 착용 컷 중심 배치,  재촬영 디테일 컷으로 제품 소재와 착용 컷에 온전히 집중하도록 유도.</p><p class='summary-section'><span class='summary-label'>[결과]</span>유입량 및 판매량이 동기간 대비 가시적으로 증가</p>",
    product: "(주)원풍물산 커넥트킨록",
    concept: "스웨이드와 레더 디테일이 주는 빈티지한 남성미와 실용적인 구조를 강조한 모던 캐주얼 무드",
    project: "기획 분석 & 레이아웃 리디자인 100%",
    target: "모바일 가독성을 중요시하며 제품 소재의 본질적 가치를 탐색하는 2030 컨템포러리 남성복 소비자"
  },
  edinburghClub: {
    category: "상세페이지",
    title: "브랜드 : 에든버러클럽",
    image: "assets/detail_05_edinburgh_club.webp",
    alt: "Edinburgh Club menswear detail page",
    summary: "브리티시 클래식 무드의 니트웨어를 촬영 이미지와 소재 디테일 중심으로 풀어내고, 컬러·사이즈·케어 정보를 차분하게 정리하여 프리미엄 소재감과 브랜드 감성을 전달한 남성복 상세페이지입니다.",
    product: "(주)원풍물산 에든버러클럽",
    concept: "브리티시 헤리티지와 클래식한 니트 조직감을 강조한 차분하고 고급스러운 프리미엄 캐주얼 무드",
    project: "1인 100% (텍스트 제외)",
    target: "프리미엄 소재 및 디테일 중시 소비자 / 무신사&29cm 이용 고객"
  },
  productIntro: {
    category: "홍보 자료 / 인쇄물",
    title: "치약소개서",
    image: "assets/print_03_toothgranule_deck.webp",
    alt: "Dencle tooth granule product introduction deck",
    summary: "덴클 그래뉼 치약을 소개하는 제품소개서로, 브랜드 소개에서 특허 기술, 세부 제품군까지 이어지는 정보 흐름을 설계했습니다. 인포그래픽과 아이콘을 활용해 그래뉼 공법과 컬러체인지 기술의 차별점을 직관적으로 보여주고, 처음 접하는 거래처도 제품력을 쉽게 이해하도록 구성했습니다.",
    product: "덴클 가루 치약",
    concept: "브랜드 신뢰도와 제품 기술력을 단계적으로 이해시키는 세일즈형 제품소개서",
    project: "1인 100% (텍스트 제외)",
    target: "바이어 / 거래처 / 제품을 처음 접하는 파트너사"
  },
  brochureGranule: {
    category: "홍보 자료 / 인쇄물",
    title: "특허기술 브로슈어",
    image: "assets/print_01_patent_tech_brochure.webp",
    alt: "Dencle patented technology brochure",
    summary: "덴클의 특허 기술인 그래뉼 공법과 컬러체인지 기술의 차별점을 직관적으로 전달하기 위해 클린하고 모던한 톤을 적용한 브로슈어입니다. 그린 컬러와 인포그래픽을 활용해 기술적 신뢰성과 혁신성을 강조하고, 화이트 기반 섹션 분리로 가독성을 높였습니다.",
    product: "덴클 그래뉼치약",
    concept: "특허 기술의 신뢰성과 혁신성을 강조한 클린 & 프로페셔널 디자인",
    project: "1인 100% (텍스트 제외)",
    target: "그래뉼 공법을 처음 접하는 소비자 및 바이어"
  },
  edinburghCompanyDeck: {
    category: "홍보 자료 / 인쇄물",
    title: "킨록앤더슨 에든버러 회사소개서",
    image: "assets/print_04_edinburgh_company_deck.webp",
    alt: "Kinloch Anderson Edinburgh company introduction deck",
    summary: "킨록앤더슨 에든버러클럽의 브리티시 헤리티지와 클래식한 브랜드 정체성을 전달하기 위해, 아카이브 이미지와 타탄 패턴, 빈티지한 종이 질감을 활용한 회사소개서입니다. 브랜드의 역사와 제품 디테일이 함께 읽히도록 구성해 바이어가 브랜드의 무드와 상품성을 동시에 이해할 수 있도록 설계했습니다.",
    product: "킨록앤더슨 에든버러클럽",
    concept: "브리티시 아카이브와 클래식 헤리티지를 강조한 프리미엄 브랜드 소개서",
    project: "1인 100% (텍스트 제외)",
    target: "바이어 / 거래처 / 클래식 남성복 브랜드를 검토하는 파트너사",
    labels: brandFieldLabels
  },
  connectKinlochProposal: {
    category: "홍보 자료 / 인쇄물",
    title: "커넥트킨록 회사소개서",
    image: "assets/print_05_connect_kinloch_proposal.webp",
    alt: "Connect Kinloch company proposal deck",
    summary: "커넥트킨록의 성장 지표, 룩북 이미지, 핵심 상품군, 브랜드 포지셔닝을 한눈에 보여주기 위해 제작한 사업제안서형 회사소개서입니다. 플랫폼 MD와 바이어가 브랜드의 현재 성과와 판매 가능성을 빠르게 판단할 수 있도록 그래프, 룩북, 상품 정보를 명확한 구조로 정리했습니다.",
    product: "커넥트킨록",
    concept: "컨템포러리 남성복 브랜드의 성장성과 상품 경쟁력을 설득하는 플랫폼 제안형 디자인",
    project: "1인 100% (텍스트 제외)",
    target: "플랫폼 MD / 바이어 / 입점 및 협업을 검토하는 비즈니스 파트너",
    labels: brandFieldLabels
  },
  summerEvent: {
    category: "프로모션 / 이벤트",
    title: "Summer Promotion Page",
    image: "assets/event_02_summer_page.webp",
    alt: "Summer event page",
    summary: "덴클 여름 프로모션 이벤트 페이지는 수영장 패턴과 모래사장 그래픽을 활용해 계절감을 직관적으로 전달하고, 할인 혜택과 신규 가입 혜택이 단계적으로 읽히도록 구성한 모바일 중심 이벤트 페이지입니다.",
    product: "여름철 특별 혜택 제공을 통해 브랜드 친밀도와 신규 유입을 높이는 프로모션",
    concept: "여름 바캉스의 시원한 무드 / 블루 톤과 해변 요소를 활용한 청량감 강조",
    project: "1인 100% (텍스트 제외)",
    target: "덴클 기존 고객 / 신규 유입 고객",
    labels: eventFieldLabels
  },
  summerBanner: {
    category: "프로모션 / 이벤트",
    title: "Summer Promotion Banner",
    image: "assets/event_03_summer_banner.webp",
    alt: "Edinburgh Club summer promotion official mall banner",
    summary: "에든버러클럽의 차분한 촬영 이미지와 공식몰 UI 흐름을 유지하면서, 여름 시즌 할인 메시지가 메인 화면에서 자연스럽게 보이도록 구성한 빅배너 디자인입니다.",
    product: "공식몰 메인 영역에서 시즌 프로모션과 신상품 유입을 동시에 유도",
    concept: "클래식하고 담백한 브랜드 무드에 여름 할인 메시지를 얹은 룩북형 배너 구성",
    project: "1인 100%",
    target: "에든버러클럽 공식몰 방문자 / 클래식 캐주얼 관심 소비자",
    labels: eventFieldLabels
  },
  seasonOffBanner: {
    category: "프로모션 / 이벤트",
    title: "Season Off Banner",
    image: "assets/event_04_season_off_banner.webp",
    alt: "Edinburgh Club season off official mall banner",
    summary: "간절기 무드가 느껴지는 어두운 톤의 룩북 이미지를 중심으로, 시즌오프 세일 메시지가 과하게 튀지 않으면서도 즉시 인지되도록 설계한 공식몰 빅배너입니다.",
    product: "시즌 전환 시점의 세일 주목도와 상품 유입을 높이는 프로모션 배너",
    concept: "남성복 브랜드의 클래식한 분위기를 유지한 절제된 톤 / 계절 전환감을 담은 이미지 중심 구성",
    project: "1인 100%",
    target: "에든버러클럽 공식몰 방문자 / 시즌오프 혜택을 찾는 남성복 소비자",
    labels: eventFieldLabels
  },
  chuseokBigSale: {
    category: "프로모션 / 이벤트",
    title: "Chuseok Big Sale Banner",
    image: "assets/event_05_chuseok_big_sale.webp",
    alt: "Kinloch by Kinloch Anderson Chuseok big sale banner",
    summary: "킨록 바이 킨록앤더슨의 안정적인 남성복 이미지를 유지하면서, 추석 시즌의 따뜻한 색감과 낙엽 그래픽을 더해 명절 프로모션임을 직관적으로 전달한 빅세일 배너입니다.",
    product: "추석 시즌 매출 증대와 네이버 스토어 프로모션 유입 강화",
    concept: "중장년 남성 고객도 빠르게 이해할 수 있는 명확한 행사명 / 따뜻한 베이지 톤과 시즌 그래픽을 활용한 실속형 프로모션 무드",
    project: "1인 100%",
    target: "킨록 바이 킨록앤더슨의 클래식 남성복을 찾는 3040-50대 남성 고객 / 명절 선물 및 실속 구매층",
    labels: eventFieldLabels
  },
  instagramFeed: {
    category: "SNS / 디지털 콘텐츠",
    title: "Instagram Feed",
    image: "assets/sns_01_dencle_moodboard.webp",
    alt: "Dencle Instagram feed mood board",
    summary: "화이트 배경을 중심으로 깔끔한 레이아웃을 구성하고, 제품 컬러를 포인트로 사용해 SNS 환경에서도 기능과 인증 정보가 빠르게 전달되도록 정리한 피드 디자인입니다.",
    product: "덴클 칫솔, 혀클리너",
    concept: "화이트 톤과 미니멀한 구성으로 위생 제품의 청결함과 신뢰감을 강조",
    project: "1인 100%",
    target: "2030 실용 소비자층"
  },
  kinlochMoodBoard: {
    category: "SNS / 디지털 콘텐츠",
    title: "Connect Kinloch Mood Board",
    image: "assets/sns_02_kinloch_moodboard.webp",
    alt: "Connect Kinloch Instagram mood board",
    summary: "커넥트킨록의 컨템포러리 캐주얼 무드를 시각적으로 정리하기 위해 그린, 레드, 뉴트럴 톤의 레퍼런스를 조합하고, 룩과 소재감이 함께 보이도록 구성한 인스타그램 무드보드입니다.",
    product: "(주)원풍물산 커넥트킨록",
    concept: "컨템포러리 캐주얼 & 깔끔한 브랜드 무드",
    project: "1인 100%",
    target: "2030 남성복 관심층 / 브랜드 무드를 빠르게 확인하는 SNS 유저"
  },
  edinburghCardNews: {
    category: "SNS / 디지털 콘텐츠",
    title: "Winter Office Styling Cards",
    image: "assets/sns_03_edinburgh_cardnews.webp",
    alt: "Edinburgh Club fashion card news",
    summary: "에든버러클럽의 클래식한 겨울 오피스룩을 셔츠, 니트, 수트 조합 중심으로 풀어내고, 스타일링 팁을 함께 배치해 SNS 안에서도 정보성과 브랜드 무드가 동시에 전달되도록 구성한 카드뉴스입니다.",
    product: "(주)원풍물산 에든버러클럽",
    concept: "클래식 오피스웨어와 브리티시 헤리티지를 기반으로 한 실용적인 스타일링 제안",
    project: "1인 100%",
    target: "스타일링 정보를 원하는 SNS 유저 / 클래식 캐주얼 관심 소비자"
  },
  edinburghSaleInfo: {
    category: "SNS / 디지털 콘텐츠",
    title: "Edinburgh Club Sale Picks",
    image: "assets/sns_04_edinburgh_sale.webp",
    alt: "Edinburgh Club sale information feed",
    summary: "브랜드의 차분한 촬영 이미지를 유지하면서 제품명, 할인율, 가격 정보를 직접적으로 배치해 SNS 피드 안에서 프로모션 정보를 빠르게 확인할 수 있도록 구성한 할인 정보 콘텐츠입니다.",
    product: "(주)원풍물산 에든버러클럽",
    concept: "깔끔한 그리드와 절제된 타이포그래피로 제품 이미지와 할인 정보를 명확하게 전달",
    project: "1인 100%",
    target: "2030 젊은 소비층 / SNS에서 구매 정보를 탐색하는 유저"
  },
  edinburghEventInfo: {
    category: "SNS / 디지털 콘텐츠",
    title: "Musinsa Clearance Sale",
    image: "assets/sns_05_edinburgh_event.webp",
    alt: "Edinburgh Club Musinsa clearance sale content",
    summary: "무신사 클리어런스 세일 정보를 제품 카드 형태로 정리하고, 메모지와 클립 요소를 활용해 행사성을 더하면서도 에든버러클럽의 클래식한 제품 이미지가 깔끔하게 보이도록 구성한 이벤트 콘텐츠입니다.",
    product: "(주)원풍물산 에든버러클럽",
    concept: "화이트 카드 레이아웃과 제품 중심 구성으로 세일 정보를 직관적으로 전달하는 깔끔한 이벤트 무드",
    project: "1인 100%",
    target: "2030 젊은 소비층 / SNS에서 행사 정보를 확인하는 유저"
  },
  youtuberPpl: {
    category: "SNS / 디지털 콘텐츠",
    title: "유튜버 콜라보 PPL",
    image: "assets/sns_06_youtuber_ppl.webp",
    alt: "Connect Kinloch youtuber collaboration PPL content",
    summary: "유튜버 협업 콘텐츠와 한정 쿠폰 혜택을 함께 구성해 제품 착용 컷과 세일즈 포인트가 SNS 안에서 빠르게 읽히도록 정리한 디지털 콘텐츠입니다.",
    product: "(주)원풍물산 커넥트킨록",
    concept: "콜라보레이션 신뢰도와 쿠폰 혜택을 연결해 정보 전달과 구매 전환을 동시에 유도",
    project: "1인 100%",
    target: "2030 유튜버 구독자 및 SNS 이용자"
  },
  influencerSponsorship: {
    category: "SNS / 디지털 콘텐츠",
    title: "인플루언서 협찬",
    image: "assets/sns_07_influencer_sponsorship.webp",
    alt: "Connect Kinloch influencer sponsorship styling content",
    summary: "인플루언서 착용 이미지를 활용해 실제 코디 흐름과 제품 스타일링 포인트를 보여주는 SNS 콘텐츠입니다. 일상 사진 안에서 아이템의 핏과 무드를 자연스럽게 전달하도록 구성했습니다.",
    product: "(주)원풍물산 커넥트킨록",
    concept: "실착 기반의 다양한 코디법 전달 / 자연스러운 착용 무드와 스타일링 정보 제공",
    project: "1인 100%",
    target: "SNS 이용자 / 실착 스타일링을 참고하는 2030 소비자"
  },
  onairDisplay: {
    category: "Offline",
    title: "On-air Display",
    image: "assets/onair_display.jpg",
    alt: "Home shopping on-air display",
    summary: "홈쇼핑 방송 환경에서 제품과 브랜드가 즉시 인지되도록 구성한 오프라인 디스플레이입니다.",
    purpose: "방송 화면과 현장 동선에서 제품 존재감 강화",
    point: "제품 스케일, 패키지 컬러, 브랜드 로고 노출을 고려한 공간 비주얼",
    role: "Visual direction / print and production support"
  },
  hostPanel: {
    category: "Offline",
    title: "Host Panel",
    image: "assets/host_panels.jpg",
    alt: "Home shopping host panels",
    summary: "쇼호스트가 방송 중 핵심 혜택과 제품 정보를 빠르게 전달할 수 있도록 만든 핸드 패널입니다.",
    purpose: "혜택, 가격, 제품 특징을 방송 화면에서 즉시 읽히게 구성",
    point: "강한 대비, 짧은 문장, 화면 노출을 고려한 글자 크기와 정보 밀도",
    role: "Visual design 100% / text planning with MD direction"
  },
  menuBanner: {
    category: "Offline",
    title: "Cafe Menu Banner",
    image: "assets/menu_banner.jpg",
    alt: "Cafe menu banner",
    summary: "매장 안에서 메뉴와 제품 이미지를 자연스럽게 연결해 보여주는 배너 디자인입니다.",
    purpose: "방문 고객이 메뉴 정보를 빠르게 인지하도록 돕는 현장용 비주얼 제작",
    point: "제품 컷, 메뉴 정보, 공간 톤을 맞춘 차분한 배치",
    role: "Visual design 100%"
  },
  birthdayEvent: {
    category: "프로모션 / 이벤트",
    title: "10th Birthday Event Page",
    image: "assets/event_01_birthday_10th.webp",
    alt: "10th birthday event page",
    summary: "덴클 10주년을 맞아 브랜드 스토리와 고객 감사 혜택을 모바일 스크롤 흐름에 맞춰 구성한 이벤트 페이지입니다. 럭키박스와 100원딜, 쿠폰 혜택을 그래픽 요소와 명확한 CTA로 연결해 참여 기대감을 높였습니다.",
    product: "브랜드 10주년 기념 및 고객 감사 프로모션",
    concept: "축제 분위기를 강조한 직관적 디자인 / 구강케어 브랜드에 맞는 청결한 블루·화이트 컬러 톤",
    project: "1인 100% (텍스트 제외)",
    target: "덴클 기존 고객 / 신규 유입 고객",
    labels: eventFieldLabels
  },
  brochureToothbrush: {
    category: "홍보 자료 / 인쇄물",
    title: "칫솔3종 브로슈어",
    image: "assets/print_02_toothbrush_brochure.webp",
    alt: "Dencle three toothbrush line brochure",
    summary: "덴클 칫솔 프리미엄 라인의 기능적 차별성과 구조적 특장점을 전달하기 위해 모노톤 기반의 전문적인 톤앤매너로 구성한 브로슈어입니다. 특허 구조, 항균 테스트, FDA 승인, 수상 이력 등을 함께 배치해 글로벌 시장에서도 제품 신뢰도가 느껴지도록 설계했습니다.",
    product: "덴클 칫솔 프리미엄 라인",
    concept: "글로벌 바이어를 위한 전문성과 제품력 시각화 / 덴클 전용 특허 칫솔 구조의 직관적 전달",
    project: "1인 100% (텍스트 제외)",
    target: "외국 기업 바이어 / 제품 검토 담당자"
  },
  visualAi01: {
    category: "패션 브랜드 AI 생성 룩북",
    title: "Editorial Campaign Direction",
    image: "assets/visual_ai_01.webp",
    alt: "AI generated soft editorial fashion campaign visual",
    summary: "자연광과 화이트 아웃핏, 스트라이프 패턴의 조화를 통해 클래식한 시즌 캠페인을 연출한 100% AI 생성 비주얼입니다. 억지스러운 연출을 배제하고 인물 중심의 내추럴한 에디토리얼 룩북 감성을 강조했습니다.",
    product: "ChatGPT image generation",
    concept: "시즌 캠페인 에디토리얼 비주얼 제안",
    project: "크림 화이트 톤, 자연광, 데일리 럭셔리, 빈티지 필름 질감",
    target: "프롬프트 기획 > 이미지 생성 > 후보정",
    labels: visualFieldLabels
  },

  visualAi02: {
    category: "패션 브랜드 AI 생성 룩북",
    title: "Dreamy Portrait Visual",
    image: "assets/visual_ai_02.webp",
    alt: "AI generated dreamy fashion portrait visual",
    summary: "레이스 디테일과 파스텔 코발트 블루, 실내 온카메라 플래시 스냅의 질감을 결합한 100% AI 생성 포트레이트입니다. 페미닌하면서도 몽환적인 무드를 연출하여 브랜드 아카이브 및 SNS 티저 비주얼로 기획했습니다.",
    product: "ChatGPT image generation",
    concept: "브랜드 아이덴티티 및 SNS 아카이브 티저 비주얼 제안",
    project: "파스텔 블루, 레이스 텍스처, 플래시 스냅, 몽환적인 페미닌 무드",
    target: "프롬프트 기획 > 이미지 생성 > 후보정",
    labels: visualFieldLabels
  },
  visualAi03: {
    category: "패션 브랜드 AI 생성 룩북",
    title: "Pastel Product Moodboard",
    image: "assets/visual_ai_03.webp",
    alt: "AI generated pastel fashion product styling image",
    summary: "의류, 슈즈, 가방을 파스텔 톤의 여백 속에 감각적으로 정돈한 100% AI 생성 스타일링 컷입니다. 제품 간의 조화로운 컬러 매칭과 구조적인 레이아웃 구성을 통해 미니멀한 룩북 무드보드를 시각화했습니다.",
    product: "ChatGPT image generation",
    concept: "컬렉션 제품 큐레이션 및 룩북 스타일링 무드보드 시각화",
    project: "파스텔 그린 & 샌드 베이지, 룩북형 콜라주, 미니멀 레이아웃",
    target: "프롬프트 기획 > 이미지 생성 > 후보정",
    labels: visualFieldLabels
  },
  visualAi04: {
    category: "패션 브랜드 AI 생성 룩북",
    title: "Vintage Lookbook Direction",
    image: "assets/visual_ai_04.webp",
    alt: "AI generated vintage lookbook fashion visual",
    summary: "폴라로이드 프레임과 테이핑 디테일, 거친 페이퍼 텍스처를 콜라주하여 빈티지 아카이브 룩북을 재현한 100% AI 생성 작업입니다. 클래식하고 단정한 스타일링 위에 아날로그 질감을 덧대어 차별화된 비주얼을 구성했습니다.",
    product: "ChatGPT image generation",
    concept: "브랜드 아카이브 컬렉션 및 아날로그 룩북 방향성 제안",
    project: "폴라로이드 콜라주, 테이프 텍스처, 소프트 클래식 스타일",
    target: "프롬프트 기획 > 이미지 생성 > 후보정",
    labels: visualFieldLabels
  },
  visualAi05: {
    category: "패션 브랜드 AI 생성 룩북",
    title: "City Chic Campaign Visual",
    image: "assets/visual_ai_05.webp",
    alt: "AI generated city chic fashion campaign visual",
    summary: "모던한 도심 속 거리 배경과 시크한 포즈, 선글라스 및 숄더백의 액세서리 매치를 세련되게 담아낸 100% AI 생성 캠페인 비주얼입니다. 현장감 있는 스냅 촬영 톤으로 컨템포러리 브랜드의 룩북 감성을 극대화했습니다.",
    product: "ChatGPT image generation",
    concept: "컨템포러리 브랜드 도심형 룩북 및 캠페인 비주얼 제안",
    project: "뉴트럴 톤 아웃핏, 모던 시티 스냅, 브라운 레더 매칭",
    target: "프롬프트 기획 > 이미지 생성 > 후보정",
    labels: visualFieldLabels
  },
  visualAi06: {
    category: "패션 브랜드 AI 생성 룩북",
    title: "Beauty Lifestyle Direction",
    image: "assets/visual_ai_06.webp",
    alt: "AI generated beauty lifestyle fashion image",
    summary: "차분한 카페 공간과 내추럴한 아이보리 톤 스타일링을 매치해 뷰티·패션 브랜드의 감도 높은 무드를 보여주는 100% AI 생성 라이프스타일 시안입니다. 상업적인 광고 느낌을 덜어내고 감성적인 일상의 순간을 연출했습니다.",
    product: "ChatGPT image generation",
    concept: "감성 라이프스타일 중심의 브랜드 룩북 및 SNS 비주얼 제안",
    project: "아이보리 & 뉴트럴 컬러, 내추럴 채광, 차분한 데일리 무드",
    target: "프롬프트 기획 > 이미지 생성 > 후보정",
    labels: visualFieldLabels
  },
  visualAi08: {
    category: "패션 브랜드 AI 생성 룩북",
    title: "Menswear Street Styling",
    image: "assets/visual_ai_08.webp",
    alt: "AI generated minimal menswear street campaign image",
    summary: "그레이 티셔츠와 데님 매치, 도심 속 보행 실루엣을 포착해 남성 캐주얼의 정석을 표현한 100% AI 생성 비주얼입니다. 자연스러운 파리 거리 배경을 조화시켜 미니멀 룩북과 SNS 소스 등 폭넓은 확장이 가능하도록 설계했습니다.",
    product: "Gemini image generation",
    concept: "남성 캐주얼 브랜드 미니멀 스트리트 룩북 비주얼 제안",
    project: "미니멀 캐주얼웨어, 유럽 도시 배경, 자연스러운 캔디드 톤",
    target: "프롬프트 기획 > 이미지 생성 > 후보정",
    labels: visualFieldLabels
  },
  visualAi09: {
    category: "패션 브랜드 AI 생성 룩북",
    title: "Relaxed Editorial Direction",
    image: "assets/visual_ai_09.webp",
    alt: "AI generated relaxed menswear editorial visual",
    summary: "오픈 칼라 리넨 셔츠와 와이드 데님을 활용하여 자연스럽고 여유로운 정서의 남성 에디토리얼 룩을 연출한 100% AI 생성 작업입니다. 밝고 모던한 건축 미감을 지닌 배경 위에 포스터 레이아웃을 접목하여 세련된 여백을 구성했습니다.",
    product: "Gemini image generation",
    concept: "남성 캐주얼 브랜드의 릴랙스드 에디토리얼 룩북 제안",
    project: "리넨 셔츠 코디, 화이트 아키텍처 배경, 포스터 레이아웃 여백",
    target: "프롬프트 기획 > 이미지 생성 > 후보정",
    labels: visualFieldLabels
  },
  visualAi10: {
    category: "패션 브랜드 AI 생성 룩북",
    title: "Avant Casual Styling Study",
    image: "assets/visual_ai_10.webp",
    alt: "AI generated avant casual menswear styling visual",
    summary: "볼륨감 있는 블랙 슬리브리스와 브라운 하프 턱 팬츠, 레더 부츠 코디를 통해 독창적인 남성 실루엣을 제안하는 100% AI 생성 스타일 시안입니다. 구조적이고 예술적인 룩북 포즈와 트렌디한 편집숍 무드를 정교하게 조합했습니다.",
    product: "Gemini image generation",
    concept: "아방가르드 무드의 남성 실루엣 스타일링 룩북 제안",
    project: "아방가르드 실루엣, 브라운 하프 팬츠 & 부츠 매칭, 모던 스튜디오",
    target: "프롬프트 기획 > 이미지 생성 > 후보정",
    labels: visualFieldLabels
  },
  visualAi11: {
    category: "생성형 AI 활용 광고 이미지",
    title: "Beauty UGC Mask Visual",
    image: "assets/visual_ai_11.webp",
    alt: "AI generated beauty sheet mask selfie visual",
    summary: "투명한 하이드로겔 시트 마스크와 욕실 거울 셀피 구도를 활용하여 소비자의 내추럴한 사용 컷을 시각화한 100% AI 생성 비주얼입니다. 정제된 스튜디오 컷 대신 친근한 후기 무드로 스킨케어 브랜드의 친밀감을 한층 높였습니다.",
    product: "ChatGPT image generation",
    concept: "스킨케어 브랜드의 친근한 리얼 사용 컷 및 UGC 무드 제안",
    project: "하이드로겔 마스크 팩, 욕실 셀피 스냅, 내추럴 글로우 스킨",
    target: "프롬프트 기획 > 이미지 생성 > 후보정",
    labels: visualFieldLabels
  },
  visualAi12: {
    category: "생성형 AI 활용 광고 이미지",
    title: "Pore Pad Campaign Visual",
    image: "assets/visual_ai_12.webp",
    alt: "AI generated beauty pore pad product visual",
    summary: "강렬한 토너 패드의 디테일을 부드러운 스킨 텍스처와 함께 매칭한 100% AI 생성 뷰티 캠페인 시안입니다. 세련된 상업 조명 아래 수분감 있는 피부 결을 연출하여 효능과 미감을 세련되게 전달합니다.",
    product: "ChatGPT image generation",
    concept: "스킨케어 브랜드 제품 패키지 및 텍스처 강조용 캠페인 시안",
    project: "레드 브랜드 컬러 패키징, 스킨 토너 패드, 맑은 수분 텍스처",
    target: "프롬프트 기획 > 이미지 생성 > 후보정",
    labels: visualFieldLabels
  },
  visualAi13: {
    category: "생성형 AI 활용 광고 이미지",
    title: "Hydration Ampoule Ad Design",
    image: "assets/visual_ai_13.jpg",
    alt: "Medipeel hydration ampoule beauty advertisement design using AI generated background",
    summary: "수분감 넘치는 신비로운 블루 톤의 AI 생성 배경 위에 실물 화장품 앰플의 3D 렌더를 매칭하고 광고 타이포그래피 및 레이아웃을 직접 디자인한 배너 시안입니다. 브랜드 마케팅 소스나 상세페이지 키 비주얼로 활용 가능합니다. (배경: AI 생성 / 레이아웃 및 텍스트: 직접 작업)",
    product: "ChatGPT image generation + Adobe layout design",
    concept: "AI 배경 소스와 그래픽 디자인의 융합을 통한 코스메틱 배너 제안",
    project: "블루 톤 수분 텍스처 배경, 하이알루론산 앰플, 3포인트 마케팅 카피 레이아웃",
    target: "배경 프롬프트 기획 > 이미지 생성 > 광고 레이아웃 디자인 > 후보정",
    labels: visualFieldLabels
  }
});

const modal = document.getElementById("workModal");
const closeButton = document.querySelector(".close");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalSummary = document.getElementById("modalSummary");
const modalProduct = document.getElementById("modalProduct");
const modalConcept = document.getElementById("modalConcept");
const modalProject = document.getElementById("modalProject");
const modalTarget = document.getElementById("modalTarget");
const modalProductLabel = document.getElementById("modalProductLabel");
const modalConceptLabel = document.getElementById("modalConceptLabel");
const modalProjectLabel = document.getElementById("modalProjectLabel");
const modalTargetLabel = document.getElementById("modalTargetLabel");
const workButtons = document.querySelectorAll(".work");
const indexRows = document.querySelectorAll(".index-row");
const filters = document.querySelectorAll(".filter");

// Before/After comparison controller
const beforeAfterTabs = document.getElementById("beforeAfterTabs");
const btnBefore = document.getElementById("btnBefore");
const btnAfter = document.getElementById("btnAfter");
let currentWorkKey = null;

if (btnBefore && btnAfter) {
  btnBefore.addEventListener("click", () => {
    if (currentWorkKey && works[currentWorkKey]) {
      modalImage.src = works[currentWorkKey].beforeImage;
      btnBefore.classList.add("active");
      btnAfter.classList.remove("active");
    }
  });

  btnAfter.addEventListener("click", () => {
    if (currentWorkKey && works[currentWorkKey]) {
      modalImage.src = works[currentWorkKey].image;
      btnAfter.classList.add("active");
      btnBefore.classList.remove("active");
    }
  });
}

function openWork(key) {
  const work = works[key];
  if (!work) return;

  currentWorkKey = key;

  modalCategory.textContent = work.category;
  modalTitle.textContent = work.title;
  modalImage.src = work.image;
  modalImage.alt = work.alt;
  modalSummary.innerHTML = work.summary;

  // Show or hide Before/After toggle tabs
  if (beforeAfterTabs) {
    if (work.beforeImage) {
      beforeAfterTabs.style.display = "flex";
      if (btnAfter) btnAfter.classList.add("active");
      if (btnBefore) btnBefore.classList.remove("active");
    } else {
      beforeAfterTabs.style.display = "none";
    }
  }

  const labels = work.labels || {};
  if (modalProductLabel) modalProductLabel.textContent = labels.product || "Product";
  if (modalConceptLabel) modalConceptLabel.textContent = labels.concept || "Concept";
  if (modalProjectLabel) modalProjectLabel.textContent = labels.project || "Project";
  if (modalTargetLabel) modalTargetLabel.textContent = labels.target || "Target";
  modalProduct.textContent = work.product || work.title || "";
  modalConcept.textContent = work.concept || work.summary || "";
  modalProject.textContent = work.project || work.point || work.purpose || "";
  modalTarget.textContent = work.target || work.role || "";
  modal.showModal();
}

const foldersWrapper = document.querySelector(".folders-wrapper");
const folderContentsView = document.querySelector(".folder-contents-view");
const folderItems = document.querySelectorAll(".folder-item");
const backToFoldersBtn = document.querySelector(".back-to-folders-btn");
const currentFolderIcon = document.querySelector(".current-folder-icon");
const currentFolderTitle = document.querySelector(".current-folder-title");
const currentFolderCount = document.querySelector(".current-folder-count");
const emptyFolderMessage = document.querySelector(".empty-folder-message");
const projectIndexWrapper = document.querySelector(".project-index-wrapper");

const categoryTypes = ["detail", "sns", "visual", "event", "print"];
const folderMetadata = {
  detail: { icon: "📄", title: "01 상세페이지", countText: "5 Works" },
  sns: { icon: "📱", title: "02 SNS / 디지털 콘텐츠", countText: "7 Works" },
  visual: { icon: "✨", title: "03 AI 비주얼 활용 룩북 / 광고", countText: "12 Works" },
  event: { icon: "🎟️", title: "04 프로모션 / 이벤트", countText: "5 Works" },
  print: { icon: "🧾", title: "05 홍보 자료 / 인쇄물", countText: "5 Works" },
  offline: { icon: "🧱", title: "06 오프라인 디자인 / VMD", countText: "3 Works" },
  package: { icon: "📦", title: "07 패키지 / 제품 그래픽", countText: "0 Works" }
};

function syncFolderCounts() {
  folderItems.forEach((folder) => {
    const folderId = folder.dataset.folder;
    if (!folderId || folderId === "all") return;

    const count = document.querySelectorAll(`.work[data-type="${folderId}"]`).length;
    const countText = `${count} ${count === 1 ? "Work" : "Works"}`;
    const countEl = folder.querySelector(".folder-count");

    if (countEl) countEl.textContent = countText;
    if (folderMetadata[folderId]) folderMetadata[folderId].countText = countText;
  });
}

syncFolderCounts();

function setFilter(filter) {
  filters.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === filter);
  });

  const activeTypes = filter === "all" ? categoryTypes : [filter];
  const hasWorks = filter === "all" || Array.from(workButtons).some((button) => activeTypes.includes(button.dataset.type));

  workButtons.forEach((button) => {
    const shouldShow = activeTypes.includes(button.dataset.type);
    button.classList.toggle("is-hidden", !shouldShow);
  });

  indexRows.forEach((row) => {
    const shouldShow = activeTypes.includes(row.dataset.type);
    row.classList.toggle("is-hidden", !shouldShow);
  });

  if (emptyFolderMessage) {
    emptyFolderMessage.hidden = hasWorks;
  }

  if (projectIndexWrapper) {
    projectIndexWrapper.hidden = !hasWorks;
  }
}

function openFolder(folderId) {
  if (folderId === "all") {
    closeFolder();
    return;
  }

  const meta = folderMetadata[folderId];
  if (!meta) return;

  currentFolderIcon.textContent = meta.icon;
  currentFolderTitle.textContent = meta.title;
  currentFolderCount.textContent = meta.countText;

  foldersWrapper.style.display = "none";
  folderContentsView.style.display = "flex";
  folderContentsView.style.flexDirection = "column";

  setFilter(folderId);
}

function closeFolder() {
  folderContentsView.style.display = "none";
  foldersWrapper.style.display = "block";
  setFilter("all");
}

folderItems.forEach((item) => {
  item.addEventListener("click", () => {
    openFolder(item.dataset.folder);
  });
});

if (backToFoldersBtn) {
  backToFoldersBtn.addEventListener("click", closeFolder);
}

workButtons.forEach((button) => {
  button.addEventListener("click", () => openWork(button.dataset.work));
});

indexRows.forEach((row) => {
  row.addEventListener("click", () => openWork(row.dataset.work));
});

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const filterType = button.dataset.filter;
    if (filterType === "all") {
      closeFolder();
    } else {
      openFolder(filterType);
    }
  });
});

const experienceItems = document.querySelectorAll(".timeline-item[data-accordion]");

function closeExperienceItems() {
  experienceItems.forEach((item) => {
    const trigger = item.querySelector(".timeline-trigger");
    const panel = trigger ? document.getElementById(trigger.getAttribute("aria-controls")) : null;

    item.classList.remove("is-open");
    if (trigger) trigger.setAttribute("aria-expanded", "false");
    if (panel) panel.hidden = true;
  });
}

function openExperienceItem(activeItem) {
  experienceItems.forEach((item) => {
    const isActive = item === activeItem;
    const trigger = item.querySelector(".timeline-trigger");
    const panel = trigger ? document.getElementById(trigger.getAttribute("aria-controls")) : null;

    item.classList.toggle("is-open", isActive);
    if (trigger) trigger.setAttribute("aria-expanded", String(isActive));
    if (panel) panel.hidden = !isActive;
  });
}

experienceItems.forEach((item) => {
  const trigger = item.querySelector(".timeline-trigger");
  if (!trigger) return;

  trigger.addEventListener("click", () => {
    if (item.classList.contains("is-open")) {
      closeExperienceItems();
      return;
    }

    openExperienceItem(item);
  });
});

if (experienceItems.length) {
  closeExperienceItems();
}

closeButton.addEventListener("click", () => modal.close());

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.close();
  }
});

const textEditor = document.getElementById("textEditor");
const editToggle = document.querySelector(".edit-toggle");
const resetText = document.getElementById("resetText");
const editableFields = document.querySelectorAll("[data-edit]");
const storageKey = "hyejiPortfolioText";
const cleanDefaultText = {
  heroTitle: "안녕하세요 와인같은 디자이너 권혜지 입니다.",
  heroSubtitle: "Introduction",
  profileText: "1997.09.25 / 8403ss@naver.com / 010.8863.8403",
  introText: "와인은 오픈 직후부터 중간, 그리고 마지막까지 향과 맛이 변화하며, 한 병을 즐기는 동안 다양한 매력을 선사합니다. 저는 이러한 와인처럼, 마케팅과 디자인을 아우르는 경험을 통해 다채로운 시각과 인사이트를 갖춘 디자이너입니다. 약 3년간의 디자인 경력과 이전 마케팅 회사에서의 실무 경험을 바탕으로, 단순히 보기 좋은 디자인을 넘어, 전략적으로 브랜드 가치를 극대화하는 디자인을 만들어낼 수 있습니다. 다양한 경험에서 나오는 통찰력과 유연한 사고를 강점으로, 디자인 이상의 시너지를 만들어가는 디자이너가 되고자 합니다.",
  introNote: "",
  folderLabel1: "상세페이지",
  folderLabel2: "SNS / 디지털 콘텐츠",
  folderLabel3: "AI 비주얼 활용 룩북 / 광고",
  folderLabel4: "프로모션 / 이벤트",
  folderLabel5: "홍보 자료 / 인쇄물",
  folderLabel6: "오프라인 디자인 / VMD",
  folderLabel7: "패키지 / 제품 그래픽",
  exp0Title: "(주) 원풍물산",
  exp0Date: "2025.05.26 - 재직중",
  exp0Text: [
    "웹 콘텐츠 및 상세페이지 디자인",
    "- 시즌 신상품 상세페이지 기획 및 에디토리얼 레이아웃 디자인",
    "- 자사몰 및 유통 채널별 프로모션 메인 배너·팝업 디자인",
    "- 브랜드 가이드라인 수립 및 1,015개 상품 상세페이지 전수 검수·고도화",
    "- 썸네일 A/B 테스트 및 데이터 기반 유입 효율 최적화",
    "비주얼 디렉팅 및 촬영 서포트",
    "- 시즌 룩북 촬영 현장 서포트 및 스태프 조율",
    "- 상세페이지 및 마케팅 소스용 서브 스냅 이미지 촬영",
    "- 촬영본 정밀 리터칭 및 그래픽 합성 총괄",
    "브랜드 브랜딩 및 디자인 운영",
    "- 인스타그램 무드보드 기획 및 피드 가이드라인 수립·운영",
    "- 기업 홈페이지 리뉴얼 주도 및 UI/UX 디자인",
    "- B2B 제안 및 내부 PT용 브랜드 소개서·브로슈어 리뉴얼"
  ].join("\n"),
  exp1Title: "(주) 덴클",
  exp1Date: "2022.12.5 - 2024.06.01",
  exp1Text: [
    "웹 콘텐츠 및 온라인 커머스 디자인",
    "- 신제품 출시 상세페이지 기획 및 디자인 제작",
    "- 매월 브랜드 프로모션 메인 배너 및 홈페이지 팝업 기획·제작",
    "비주얼 디렉팅 및 SNS 브랜딩",
    "- 신상품 촬영 운영 참여 및 모델 섭외 등 전반적인 이미지 준비",
    "- 브랜드 인스타그램 무드보드 기획 및 피드 디자인 완성",
    "오프라인 VMD 및 유통 채널 디자인",
    "- 오프라인 행사 VMD 기획 및 제작",
    "- 홈쇼핑 방송 관련 판넬 및 매대 시안 디자인",
    "- 제품 및 해외 수출용 패키지 디자인",
    "브랜드 에셋(B2B) 기획 및 제작",
    "- 대내외용 회사 및 제품 소개서, 브랜드 브로슈어 디자인"
  ].join("\n"),
  exp2Title: "(주) CJ 올리브영",
  exp2Date: "2021.01 - 2021.08",
  exp2Text: [
    "마케팅 기획 및 프로모션 운영",
    "- 행사 운영 가능 여부 검토 및 진행 상품 선정",
    "- 앱 내 프로모션 기획 구조 구성 및 행사 세팅 관리",
    "- 전시 세팅 및 프로모션 진행 관리",
    "상품 검수 및 브랜드 커뮤니케이션",
    "- 상품 검수 및 상세페이지 가이드 미준수 영역 수정",
    "- 브랜드 일관성 유지를 위한 상세페이지 품질 관리",
    "- 디자인팀 주 1회 미팅을 통한 소구 포인트 및 기획 의도 전달",
    "기획 의도 정리 및 협업 조율",
    "- 마케팅 계획에 맞춘 강조 포인트 정리",
    "- 디자인팀과의 협업을 통한 프로모션 방향 조율"
  ].join("\n"),
  exp3Title: "패션디자인 전공 졸업",
  exp3Date: "2021.02"
};

const defaultText = {};

applyTextValues(cleanDefaultText);

editableFields.forEach((field) => {
  const target = document.getElementById(field.dataset.edit);
  if (!target) return;
  if (field.dataset.edit === "profileText") {
    defaultText[field.dataset.edit] = cleanDefaultText.profileText;
    field.value = cleanDefaultText.profileText;
    return;
  }
  defaultText[field.dataset.edit] = target.textContent.trim();
});

function parseProfileText(value = "") {
  const text = String(value);
  const birth = text.match(/\d{4}[./-]\d{2}[./-]\d{2}/)?.[0] || "1997.09.25";
  const email = text.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i)?.[0] || "8403ss@naver.com";
  const phone = text.match(/01[016789][\s.-]?\d{3,4}[\s.-]?\d{4}/)?.[0] || "010.8863.8403";
  return { birth, email, phone };
}

function renderProfileText(value) {
  const profile = document.getElementById("profileText");
  if (!profile) return;

  const parts = parseProfileText(value);
  Object.entries(parts).forEach(([key, text]) => {
    const target = profile.querySelector(`[data-profile-value="${key}"]`);
    if (target) target.textContent = text;
  });
}

function renderHeroTitle(value) {
  const target = document.getElementById("heroTitle");
  if (!target) return;
  const name = "권혜지";
  const highlightTerm = "와인같은 디자이너";
  const text = String(value).trim();
  
  if (text.includes(name)) {
    const parts = text.split(name);
    let before = (parts[0] || "").trim();
    const after = (parts.slice(1).join(name) || "").trim();
    
    // '와인같은 디자이너'가 이름 앞에 포함되어 있다면 형광펜(highlight-marker) 적용
    if (before.includes(highlightTerm)) {
      const subParts = before.split(highlightTerm);
      const greeting = (subParts[0] || "").trim();
      const extra = (subParts[1] || "").trim();
      // '안녕하세요'는 일반 텍스트로, '와인같은 디자이너'에만 마커 처리
      before = `${greeting} <span class="highlight-marker">${highlightTerm}</span>${extra}`;
    } else {
      // 텍스트가 다를 경우도 대비하여 마커 처리
      before = `<span class="highlight-marker">${before}</span>`;
    }
    
    target.innerHTML = `${before} <strong>${name}</strong>${after}`;
  } else {
    target.textContent = text;
  }
}

function renderExperienceList(targetId, value) {
  const target = document.getElementById(targetId);
  if (!target) return;

  const rawText = String(value || "").trim();
  target.dataset.rawText = rawText;
  target.innerHTML = "";

  const lines = rawText.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  if (!lines.length) return;

  const firstLine = lines[0];
  const hasRoleLabel = /^\[.+\]$/.test(firstLine);
  if (hasRoleLabel) {
    const label = document.createElement("p");
    label.className = "experience-role-label";
    label.textContent = firstLine;
    target.appendChild(label);
    lines.shift();
  }

  let currentList = null;
  const createGroup = (title) => {
    const group = document.createElement("section");
    group.className = "experience-duty-group";

    const heading = document.createElement("h4");
    heading.className = "experience-duty-title";
    heading.textContent = title;

    currentList = document.createElement("ul");
    currentList.className = "experience-duty-items";

    group.append(heading, currentList);
    target.appendChild(group);
  };

  lines.forEach((line) => {
    const isBullet = /^[-•ㆍ·ㅇo○]\s*/i.test(line);
    if (!isBullet) {
      createGroup(line);
      return;
    }

    if (!currentList) createGroup("주요 업무");
    const item = document.createElement("li");
    item.textContent = line.replace(/^[-•ㆍ·ㅇo○]\s*/i, "").trim();
    currentList.appendChild(item);
  });
}

function applyTextValues(values) {
  Object.entries(values).forEach(([id, value]) => {
    const target = document.getElementById(id);
    const field = document.querySelector(`[data-edit="${id}"]`);
    if (!target || value == null) return;
    if (id === "profileText") {
      renderProfileText(value);
      if (field) field.value = value;
      return;
    }
    if (id === "heroTitle") {
      renderHeroTitle(value);
      if (field) field.value = value;
      return;
    }
    if (id === "exp0Text" || id === "exp1Text" || id === "exp2Text") {
      renderExperienceList(id, value);
      if (field) field.value = value;
      return;
    }
    target.textContent = value;
    if (field) field.value = value;
  });
}

function getSavedText() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey)) || {};
    // 이전 텍스트가 저장되어 있는 경우 자동으로 '안녕하세요' 포함 신버전으로 마이그레이션
    if (saved.heroTitle === "와인같은 디자이너 권혜지 입니다." || saved.heroTitle === "와인같은 디자이너 권혜지입니다") {
      saved.heroTitle = cleanDefaultText.heroTitle;
    }
    if (saved.folderLabel2 === "캠페인 / SNS") {
      saved.folderLabel2 = cleanDefaultText.folderLabel2;
    }
    if (saved.folderLabel3 === "브랜드 자료 / 오프라인") {
      saved.folderLabel3 = cleanDefaultText.folderLabel3;
    }
    ["folderLabel4", "folderLabel5", "folderLabel6", "folderLabel7"].forEach((key) => {
      if (!saved[key]) saved[key] = cleanDefaultText[key];
    });
    if (saved.categoryOrderVersion !== "2026-07-07-ai-ad-design-v2") {
      [
        "folderLabel1",
        "folderLabel2",
        "folderLabel3",
        "folderLabel4",
        "folderLabel5",
        "folderLabel6",
        "folderLabel7"
      ].forEach((key) => {
        saved[key] = cleanDefaultText[key];
      });
      saved.categoryOrderVersion = "2026-07-07-ai-ad-design-v2";
      localStorage.setItem(storageKey, JSON.stringify(saved));
    }
    if (saved.introCopyVersion !== "2026-07-06-about-3-years") {
      saved.introText = cleanDefaultText.introText;
      saved.introCopyVersion = "2026-07-06-about-3-years";
      localStorage.setItem(storageKey, JSON.stringify(saved));
    }
    if (saved.experienceLayoutVersion !== "2026-06-29-experience-accordion-olive-list") {
      saved.exp0Title = cleanDefaultText.exp0Title;
      saved.exp0Date = cleanDefaultText.exp0Date;
      saved.exp0Text = cleanDefaultText.exp0Text;
      saved.exp1Title = cleanDefaultText.exp1Title;
      saved.exp1Date = cleanDefaultText.exp1Date;
      saved.exp1Text = cleanDefaultText.exp1Text;
      saved.exp2Title = cleanDefaultText.exp2Title;
      saved.exp2Date = cleanDefaultText.exp2Date;
      saved.exp2Text = cleanDefaultText.exp2Text;
      saved.experienceLayoutVersion = "2026-06-29-experience-accordion-olive-list";
      localStorage.setItem(storageKey, JSON.stringify(saved));
    }
    if (saved.detailContentVersion !== "2026-06-26-detail-5works") {
      ["toothbrushGlobal", "granuleOfficial", "granule", "connectKinloch", "edinburghClub"].forEach((key) => {
        if (saved.works?.[key]) delete saved.works[key];
      });
      saved.detailContentVersion = "2026-06-26-detail-5works";
      localStorage.setItem(storageKey, JSON.stringify(saved));
    }
    if (saved.snsContentVersion !== "2026-06-29-sns-7works") {
      ["instagramFeed", "kinlochMoodBoard", "edinburghCardNews", "edinburghSaleInfo", "edinburghEventInfo", "youtuberPpl", "influencerSponsorship"].forEach((key) => {
        if (saved.works?.[key]) delete saved.works[key];
      });
      saved.snsContentVersion = "2026-06-29-sns-7works";
      localStorage.setItem(storageKey, JSON.stringify(saved));
    }
    if (saved.eventContentVersion !== "2026-06-29-event-5works") {
      ["birthdayEvent", "summerEvent", "summerBanner", "seasonOffBanner", "chuseokBigSale"].forEach((key) => {
        if (saved.works?.[key]) delete saved.works[key];
      });
      saved.eventContentVersion = "2026-06-29-event-5works";
      localStorage.setItem(storageKey, JSON.stringify(saved));
    }
    if (saved.printContentVersion !== "2026-06-29-print-5works") {
      ["brochureGranule", "brochureToothbrush", "productIntro", "edinburghCompanyDeck", "connectKinlochProposal"].forEach((key) => {
        if (saved.works?.[key]) delete saved.works[key];
      });
      saved.printContentVersion = "2026-06-29-print-5works";
      localStorage.setItem(storageKey, JSON.stringify(saved));
    }
    if (saved.visualContentVersion !== "2026-07-07-ai-visual-ad-design-v2") {
      ["visualAi01", "visualAi02", "visualAi03", "visualAi04", "visualAi05", "visualAi06", "visualAi08", "visualAi09", "visualAi10", "visualAi11", "visualAi12", "visualAi13"].forEach((key) => {
        if (saved.works?.[key]) delete saved.works[key];
      });
      saved.visualContentVersion = "2026-07-07-ai-visual-ad-design-v2";
      localStorage.setItem(storageKey, JSON.stringify(saved));
    }
    return saved;
  } catch {
    return {};
  }
}

function saveCurrentText() {
  const values = {};
  editableFields.forEach((field) => {
    values[field.dataset.edit] = field.value;
  });
  localStorage.setItem(storageKey, JSON.stringify(values));
}

applyTextValues({ ...defaultText, ...getSavedText() });

// 초기 로드 시 localStorage에 저장된 각 작품(works) 데이터 병합 및 카드 타이틀에 실시간 반영
const savedDataForWorks = getSavedText();
if (savedDataForWorks.works) {
  Object.entries(savedDataForWorks.works).forEach(([workKey, props]) => {
    if (works[workKey]) {
      Object.assign(works[workKey], props);
    }
    // 카드 및 인덱스 리스트에 텍스트 반영
    if (props.title) {
      const workBtn = document.querySelector(`.work[data-work="${workKey}"]`);
      if (workBtn) {
        const spanEl = workBtn.querySelector("span");
        if (spanEl) {
          const numPrefix = spanEl.textContent.match(/^\d+\.\s*/)?.[0] || "";
          spanEl.textContent = numPrefix + props.title;
        }
      }
      const indexRow = document.querySelector(`.index-row[data-work="${workKey}"]`);
      if (indexRow) {
        const titleEl = indexRow.querySelector(".title");
        if (titleEl) titleEl.textContent = props.title;
      }
    }
  });
}

function renderDynamicEditor() {
  const fieldsContainer = document.getElementById("dynamicEditorFields");
  const helpText = document.getElementById("editorHelpText");
  const title = document.getElementById("editorTitle");
  if (!fieldsContainer) return;
  fieldsContainer.innerHTML = ""; // 초기화

  const saved = getSavedText();

  if (currentPageIndex === 0) {
    title.textContent = "소개 페이지 편집";
    helpText.textContent = "1페이지의 제목, 프로필 연락처, 자기소개 및 경력을 수정합니다.";

    const fields = [
      { label: "메인 제목", key: "heroTitle", type: "textarea", value: document.getElementById("heroTitle")?.textContent.trim() || "" },
      { label: "프로필 정보", key: "profileText", type: "text", value: cleanDefaultText.profileText },
      { label: "자기소개 본문", key: "introText", type: "textarea", value: document.getElementById("introText")?.textContent.trim() || "" },
      { label: "Introduction Note", key: "introNote", type: "text", value: document.getElementById("introNote")?.textContent.trim() || "" },
      { label: "경력 1 회사명", key: "exp0Title", type: "text", value: document.getElementById("exp0Title")?.textContent.trim() || cleanDefaultText.exp0Title },
      { label: "경력 1 기간", key: "exp0Date", type: "text", value: document.getElementById("exp0Date")?.textContent.trim() || cleanDefaultText.exp0Date },
      { label: "경력 1 (원풍물산 설명)", key: "exp0Text", type: "textarea", value: document.getElementById("exp0Text")?.dataset.rawText || cleanDefaultText.exp0Text },
      { label: "경력 2 회사명", key: "exp1Title", type: "text", value: document.getElementById("exp1Title")?.textContent.trim() || cleanDefaultText.exp1Title },
      { label: "경력 2 기간", key: "exp1Date", type: "text", value: document.getElementById("exp1Date")?.textContent.trim() || cleanDefaultText.exp1Date },
      { label: "경력 2 (덴클 설명)", key: "exp1Text", type: "textarea", value: document.getElementById("exp1Text")?.dataset.rawText || cleanDefaultText.exp1Text },
      { label: "경력 3 회사명", key: "exp2Title", type: "text", value: document.getElementById("exp2Title")?.textContent.trim() || cleanDefaultText.exp2Title },
      { label: "경력 3 기간", key: "exp2Date", type: "text", value: document.getElementById("exp2Date")?.textContent.trim() || cleanDefaultText.exp2Date },
      { label: "경력 3 (올리브영 설명)", key: "exp2Text", type: "textarea", value: document.getElementById("exp2Text")?.dataset.rawText || cleanDefaultText.exp2Text }
    ];

    const profileField = fields.find(f => f.key === "profileText");
    if (profileField && saved.profileText) {
      profileField.value = saved.profileText;
    }

    fields.forEach(f => {
      const labelEl = document.createElement("label");
      labelEl.style.display = "flex";
      labelEl.style.flexDirection = "column";
      labelEl.style.gap = "6px";
      labelEl.style.color = "var(--accent)";
      labelEl.style.fontSize = "11.5px";
      labelEl.style.fontWeight = "700";
      labelEl.style.textTransform = "uppercase";
      labelEl.innerHTML = `${f.label}`;

      let inputEl;
      if (f.type === "textarea") {
        inputEl = document.createElement("textarea");
        inputEl.style.minHeight = "80px";
        inputEl.style.resize = "vertical";
      } else {
        inputEl = document.createElement("input");
        inputEl.type = "text";
      }
      inputEl.style.width = "100%";
      inputEl.style.padding = "10px";
      inputEl.style.border = "1px solid var(--line)";
      inputEl.style.borderRadius = "8px";
      inputEl.style.background = "var(--bg)";
      inputEl.style.color = "var(--ink)";
      inputEl.style.fontSize = "13.5px";
      inputEl.style.lineHeight = "1.5";
      inputEl.dataset.edit = f.key;
      inputEl.value = f.value;

      labelEl.appendChild(inputEl);
      fieldsContainer.appendChild(labelEl);
    });

  } else if (currentPageIndex === 1 && foldersWrapper.style.display !== "none") {
    title.textContent = "아카이브 카테고리 편집";
    helpText.textContent = "2페이지 폴더 밑에 표시되는 카테고리 이름을 수정합니다.";

    const fields = [
      { label: "카테고리 1 (상세페이지)", key: "folderLabel1", value: document.getElementById("folderLabel1")?.textContent.trim() || "" },
      { label: "카테고리 2 (SNS / 디지털 콘텐츠)", key: "folderLabel2", value: document.getElementById("folderLabel2")?.textContent.trim() || "" },
      { label: "카테고리 3 (AI 비주얼 활용 룩북 / 광고)", key: "folderLabel3", value: document.getElementById("folderLabel3")?.textContent.trim() || "" },
      { label: "카테고리 4 (프로모션 / 이벤트)", key: "folderLabel4", value: document.getElementById("folderLabel4")?.textContent.trim() || "" },
      { label: "카테고리 5 (홍보 자료 / 인쇄물)", key: "folderLabel5", value: document.getElementById("folderLabel5")?.textContent.trim() || "" },
      { label: "카테고리 6 (오프라인 디자인 / VMD)", key: "folderLabel6", value: document.getElementById("folderLabel6")?.textContent.trim() || "" },
      { label: "카테고리 7 (패키지 / 제품 그래픽)", key: "folderLabel7", value: document.getElementById("folderLabel7")?.textContent.trim() || "" }
    ];

    fields.forEach(f => {
      const labelEl = document.createElement("label");
      labelEl.style.display = "flex";
      labelEl.style.flexDirection = "column";
      labelEl.style.gap = "6px";
      labelEl.style.color = "var(--accent)";
      labelEl.style.fontSize = "11.5px";
      labelEl.style.fontWeight = "700";
      labelEl.style.textTransform = "uppercase";
      labelEl.innerHTML = `${f.label}`;

      const inputEl = document.createElement("input");
      inputEl.type = "text";
      inputEl.style.width = "100%";
      inputEl.style.padding = "10px";
      inputEl.style.border = "1px solid var(--line)";
      inputEl.style.borderRadius = "8px";
      inputEl.style.background = "var(--bg)";
      inputEl.style.color = "var(--ink)";
      inputEl.style.fontSize = "13.5px";
      inputEl.dataset.edit = f.key;
      inputEl.value = f.value;

      labelEl.appendChild(inputEl);
      fieldsContainer.appendChild(labelEl);
    });

  } else if (currentPageIndex === 1 && folderContentsView.style.display !== "none") {
    const activeWorks = Array.from(workButtons)
      .filter(btn => !btn.classList.contains("is-hidden"))
      .map(btn => btn.dataset.work);

    title.textContent = `현재 폴더 작품 편집 (${currentFolderTitle.textContent})`;
    helpText.textContent = "이 폴더 내에 포함된 작품들의 타이틀과 상세 설명을 수정합니다. 클릭 시 상세 팝업에 바로 반영됩니다.";

    if (activeWorks.length === 0) {
      const noWorkMsg = document.createElement("p");
      noWorkMsg.textContent = "수정할 작품이 존재하지 않습니다.";
      fieldsContainer.appendChild(noWorkMsg);
      return;
    }

    activeWorks.forEach(workKey => {
      const work = works[workKey];
      if (!work) return;

      const groupDiv = document.createElement("div");
      groupDiv.style.border = "1px solid var(--line)";
      groupDiv.style.borderRadius = "12px";
      groupDiv.style.padding = "16px";
      groupDiv.style.background = "var(--panel)";
      groupDiv.style.display = "flex";
      groupDiv.style.flexDirection = "column";
      groupDiv.style.gap = "10px";

      const groupTitle = document.createElement("h4");
      groupTitle.style.margin = "0 0 4px 0";
      groupTitle.style.fontSize = "14px";
      groupTitle.style.fontWeight = "700";
      groupTitle.style.color = "var(--accent)";
      groupTitle.textContent = `${work.title} 상세 편집`;
      groupDiv.appendChild(groupTitle);

      const labels = work.labels || {};
      const fields = [
        { label: "작품 제목 (Title)", prop: "title", type: "text", value: work.title },
        { label: "한 줄 설명 (Summary)", prop: "summary", type: "textarea", value: work.summary },
        { label: labels.product || "Product", prop: "product", type: "text", value: work.product || work.title || "" },
        { label: labels.concept || "Concept", prop: "concept", type: "text", value: work.concept || work.summary || "" },
        { label: labels.project || "Project", prop: "project", type: "text", value: work.project || work.point || work.purpose || "" },
        { label: labels.target || "Target", prop: "target", type: "text", value: work.target || work.role || "" }
      ];

      fields.forEach(f => {
        const labelEl = document.createElement("label");
        labelEl.style.display = "flex";
        labelEl.style.flexDirection = "column";
        labelEl.style.gap = "4px";
        labelEl.style.fontSize = "11px";
        labelEl.style.fontWeight = "600";
        labelEl.style.color = "var(--muted)";
        labelEl.innerHTML = `${f.label}`;

        let inputEl;
        if (f.type === "textarea") {
          inputEl = document.createElement("textarea");
          inputEl.style.minHeight = "50px";
          inputEl.style.resize = "vertical";
        } else {
          inputEl = document.createElement("input");
          inputEl.type = "text";
        }
        inputEl.style.width = "100%";
        inputEl.style.padding = "8px";
        inputEl.style.border = "1px solid var(--line)";
        inputEl.style.borderRadius = "6px";
        inputEl.style.background = "var(--bg)";
        inputEl.style.color = "var(--ink)";
        inputEl.style.fontSize = "12.5px";
        inputEl.dataset.workKey = workKey;
        inputEl.dataset.workProp = f.prop;
        inputEl.value = f.value;

        labelEl.appendChild(inputEl);
        groupDiv.appendChild(labelEl);
      });

      fieldsContainer.appendChild(groupDiv);
    });
  }
}

document.getElementById("dynamicEditorFields").addEventListener("input", (event) => {
  const field = event.target;
  const saved = getSavedText();

  if (field.dataset.edit) {
    const targetId = field.dataset.edit;
    const value = field.value;

    const target = document.getElementById(targetId);
    if (target) {
      if (targetId === "profileText") {
        renderProfileText(value);
      } else if (targetId === "heroTitle") {
        renderHeroTitle(value);
      } else if (targetId === "exp0Text" || targetId === "exp1Text" || targetId === "exp2Text") {
        renderExperienceList(targetId, value);
      } else {
        target.textContent = value;
      }
    }

    saved[targetId] = value;
    localStorage.setItem(storageKey, JSON.stringify(saved));
  } else if (field.dataset.workKey) {
    const workKey = field.dataset.workKey;
    const prop = field.dataset.workProp;
    const value = field.value;

    if (works[workKey]) {
      works[workKey][prop] = value;
    }

    if (prop === "title") {
      const workBtn = document.querySelector(`.work[data-work="${workKey}"]`);
      if (workBtn) {
        const spanEl = workBtn.querySelector("span");
        if (spanEl) {
          const numPrefix = spanEl.textContent.match(/^\d+\.\s*/)?.[0] || "";
          spanEl.textContent = numPrefix + value;
        }
      }
      const indexRow = document.querySelector(`.index-row[data-work="${workKey}"]`);
      if (indexRow) {
        const titleEl = indexRow.querySelector(".title");
        if (titleEl) titleEl.textContent = value;
      }
    }

    if (!saved.works) saved.works = {};
    if (!saved.works[workKey]) saved.works[workKey] = {};
    saved.works[workKey][prop] = value;
    localStorage.setItem(storageKey, JSON.stringify(saved));
  }
});

editToggle.addEventListener("click", () => {
  renderDynamicEditor();
  textEditor.showModal();
});

resetText.addEventListener("click", () => {
  localStorage.removeItem(storageKey);
  window.location.reload();
});

const designToggle = document.querySelector(".design-toggle");
const resetLayout = document.getElementById("resetLayout");
const draggableBlocks = document.querySelectorAll("[data-drag]");
const layoutStorageKey = "hyejiPortfolioLayout_v2";

let isDesignMode = false;
let activeDrag = null;

function getSavedLayout() {
  try {
    return JSON.parse(localStorage.getItem(layoutStorageKey)) || {};
  } catch {
    return {};
  }
}

function saveLayout(layout) {
  localStorage.setItem(layoutStorageKey, JSON.stringify(layout));
}

function applyLayout(layout) {
  draggableBlocks.forEach((block) => {
    const key = block.dataset.drag;
    const value = layout[key] || { x: 0, y: 0 };
    block.style.setProperty("--drag-x", `${value.x}px`);
    block.style.setProperty("--drag-y", `${value.y}px`);
  });
}

function readBlockPosition(block) {
  const x = parseFloat(block.style.getPropertyValue("--drag-x")) || 0;
  const y = parseFloat(block.style.getPropertyValue("--drag-y")) || 0;
  return { x, y };
}

applyLayout(getSavedLayout());

designToggle.addEventListener("click", () => {
  isDesignMode = !isDesignMode;
  document.body.classList.toggle("design-mode", isDesignMode);
  designToggle.setAttribute("aria-pressed", String(isDesignMode));
});

draggableBlocks.forEach((block) => {
  block.addEventListener("pointerdown", (event) => {
    if (!isDesignMode) return;
    event.preventDefault();

    const start = readBlockPosition(block);
    activeDrag = {
      block,
      key: block.dataset.drag,
      startX: event.clientX,
      startY: event.clientY,
      x: start.x,
      y: start.y
    };

    block.setPointerCapture(event.pointerId);
  });

  block.addEventListener("pointermove", (event) => {
    if (!activeDrag || activeDrag.block !== block) return;
    const nextX = activeDrag.x + event.clientX - activeDrag.startX;
    const nextY = activeDrag.y + event.clientY - activeDrag.startY;
    block.style.setProperty("--drag-x", `${Math.round(nextX)}px`);
    block.style.setProperty("--drag-y", `${Math.round(nextY)}px`);
  });

  block.addEventListener("pointerup", () => {
    if (!activeDrag || activeDrag.block !== block) return;
    const layout = getSavedLayout();
    layout[activeDrag.key] = readBlockPosition(block);
    saveLayout(layout);
    activeDrag = null;
  });
});

resetLayout.addEventListener("click", () => {
  localStorage.removeItem(layoutStorageKey);
  applyLayout({});
});

const pageSections = Array.from(document.querySelectorAll(".snap-section"));
let currentPageIndex = 0;
let isPageMoving = false;

function getNearestPageIndex() {
  if (!pageSections.length) return 0;
  const viewportTop = window.scrollY;
  return pageSections.reduce((nearestIndex, section, index) => {
    const nearestDistance = Math.abs(pageSections[nearestIndex].offsetTop - viewportTop);
    const nextDistance = Math.abs(section.offsetTop - viewportTop);
    return nextDistance < nearestDistance ? index : nearestIndex;
  }, 0);
}

function goToPage(index, behavior = "smooth") {
  if (!pageSections.length) return;
  const nextIndex = Math.max(0, Math.min(index, pageSections.length - 1));
  
  // 이미 목표 페이지에 위치한 경우 불필요한 스크롤 트리거 방지
  if (nextIndex === currentPageIndex && behavior === "smooth") return;
  
  currentPageIndex = nextIndex;
  isPageMoving = true;
  window.scrollTo({
    top: pageSections[nextIndex].offsetTop,
    behavior
  });
  window.setTimeout(() => {
    isPageMoving = false;
  }, 820);
}

function shouldUseNativeScroll(event) {
  if (!window.matchMedia("(min-width: 1181px)").matches) return true;
  if (event.ctrlKey) return true;
  if (document.querySelector("dialog[open]")) return true;
  if (event.target.closest("input, textarea, select, dialog")) return true;

  // 우측 포트폴리오 캔버스 영역 내의 스크롤 처리
  const canvas = event.target.closest(".canvas");
  if (canvas) {
    const isScrollUp = event.deltaY < 0;
    const isScrollDown = event.deltaY > 0;

    // 위로 스크롤할 때 이미 맨 위(scrollTop <= 0)라면 1페이지로 스냅 업
    if (isScrollUp && canvas.scrollTop <= 0) {
      return false;
    }

    // 아래로 스크롤할 때 이미 맨 아래(끝지점)에 도달했다면 스냅 다운 방지 (더 갈 페이지가 없으므로 가만히 있음)
    const isAtBottom = canvas.scrollTop + canvas.clientHeight >= canvas.scrollHeight - 1;
    if (isScrollDown && isAtBottom) {
      return false;
    }

    // 그 외에는 우측 영역 내부에서 기본 마우스 휠 스크롤이 작동하도록 허용
    return true;
  }

  return false;
}

window.addEventListener("wheel", (event) => {
  if (shouldUseNativeScroll(event)) return;
  
  // 만약 2페이지(.canvas 내부)에서 끝 지점 도달 시 불필요하게 preventDefault를 호출하면 전체 화면 스크롤 먹통 현상이 발생하므로, 
  // 스냅 스크롤이 실제로 일어나는 경우에만 preventDefault 처리
  const direction = event.deltaY > 0 ? 1 : -1;
  const nextPageIndex = currentPageIndex + direction;
  
  if (nextPageIndex >= 0 && nextPageIndex < pageSections.length) {
    event.preventDefault();
    if (!isPageMoving && Math.abs(event.deltaY) >= 8) {
      goToPage(nextPageIndex);
    }
  }
}, { passive: false });

window.addEventListener("keydown", (event) => {
  if (!window.matchMedia("(min-width: 1181px)").matches) return;
  if (document.querySelector("dialog[open]")) return;

  const nextKeys = ["ArrowDown", "PageDown", " "];
  const prevKeys = ["ArrowUp", "PageUp"];

  if (nextKeys.includes(event.key)) {
    event.preventDefault();
    goToPage(currentPageIndex + 1);
  }

  if (prevKeys.includes(event.key)) {
    event.preventDefault();
    goToPage(currentPageIndex - 1);
  }
});

window.addEventListener("scroll", () => {
  if (isPageMoving) return;
  currentPageIndex = getNearestPageIndex();
});

window.addEventListener("resize", () => {
  if (!window.matchMedia("(min-width: 1181px)").matches) return;
  currentPageIndex = getNearestPageIndex();
  goToPage(currentPageIndex, "auto");
});

window.requestAnimationFrame(() => {
  if (!window.matchMedia("(min-width: 1181px)").matches) return;
  currentPageIndex = getNearestPageIndex();
  goToPage(currentPageIndex, "auto");
});
