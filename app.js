/* ==========================================================================
   ONESIAM FACTORY - WEB CATALOG INTERACTIVITY & LOGIC
   ========================================================================== */

// Mock Products Catalog Data with detailed specs for Detail View
const PRICE_CONTACT = null;

function getProductById(productId) {
    return PRODUCTS_DATA.find(product => product.id === productId) || null;
}

function hasContactPrice(product) {
    return product?.price === PRICE_CONTACT;
}

function formatProductPrice(product, { withCurrency = true, fallback = "ติดต่อสอบถาม" } = {}) {
    if (!product) return fallback;
    if (hasContactPrice(product)) return fallback;
    const value = Number(product.price || 0);
    return withCurrency ? `฿${value.toLocaleString()}` : value.toLocaleString();
}

function getProductSubtitle(product) {
    return hasContactPrice(product) ? "ราคาตามข้อกำหนดและปริมาณการสั่งผลิตพิเศษ" : "ราคาส่งเริ่มต้น (ไม่รวม VAT)";
}

const PRODUCTS_DATA = [
    // 1. คอมโพสิต (composite)
    {
        id: "comp-1",
        code: "OSF-COMP-01",
        title: "อลูมิเนียมคอมโพสิต Premium Grade",
        category: "composite",
        categoryTh: "คอมโพสิต",
        price: 50000,
        image: "assets/composite_panel.png",
        tags: ["คุณภาพสูง", "ราคาโรงงาน", "สถาปัตยกรรม"],
        badges: ["เกรดพรีเมียม", "ทนไฟ FR Class", "รับประกัน 10 ปี"],
        description: `
            <p><strong>แผ่นอลูมิเนียมคอมโพสิต (Aluminum Composite Panel - ACP) เกรดสถาปัตยกรรมระดับท็อป</strong> เหมาะสำหรับงานหุ้มอาคารสูง งานป้ายโฆษณา และการตกแต่งภายในที่ต้องการความหรูหราทันสมัย</p>
            <ul>
                <li><strong>ความหนาแผ่นรวม:</strong> 4.0 มม. (ความหนาอลูมิเนียม 0.5 มม. ทั้งสองด้าน)</li>
                <li><strong>ระบบสีเคลือบ:</strong> PVDF Kynar 500 ทนทานต่อรังสี UV และสารเคมี ไม่ลอกร่อน</li>
                <li><strong>ไส้กลาง (Core):</strong> FR Core (Fire Retardant) ป้องกันการลามไฟ ผ่านมาตรฐาน ASTM</li>
                <li><strong>คุณสมบัติเด่น:</strong> น้ำหนักเบา รับแรงลมได้ดี ดัดโค้งขึ้นรูปได้หลากหลาย ทนความร้อนสูง</li>
            </ul>
        `
    },
    {
        id: "comp-2",
        code: "OSF-COMP-02",
        title: "คอมโพสิตภายนอก ทนทานสูง (Exterior)",
        category: "composite",
        categoryTh: "คอมโพสิต",
        price: 30000,
        image: "assets/composite_panel.png",
        tags: ["ทนสภาพอากาศ", "ราคาโรงงาน", "จัดส่งทั่วประเทศ"],
        badges: ["ทนแดดฝน", "PVDF Coating", "ติดตั้งง่าย"],
        description: `
            <p><strong>แผ่นคอมโพสิตสำหรับตกแต่งภายนอกอาคาร (Exterior ACP)</strong> ออกแบบมาเพื่อเผชิญกับสภาพภูมิอากาศร้อนชื้นของประเทศไทยโดยเฉพาะ สีสันคงทนยาวนานไม่ซีดจาง</p>
            <ul>
                <li><strong>ความหนาแผ่นรวม:</strong> 4.0 มม. (ความหนาอลูมิเนียม 0.3 มม.)</li>
                <li><strong>การเคลือบผิว:</strong> สองชั้น (Double-coat PVDF) กันความชื้นและไอเค็มทะเล</li>
                <li><strong>วัสดุไส้กลาง:</strong> LDPE (Low Density Polyethylene) ยืดหยุ่นตัวสูง ดัดพับทำมุมฉากได้ง่าย</li>
                <li><strong>การใช้งาน:</strong> งานรีโนเวทตึกเก่า หุ้มเสา กันสาด หน้ากากโชว์รูม</li>
            </ul>
        `
    },
    {
        id: "comp-3",
        code: "OSF-COMP-03",
        title: "คอมโพสิตภายใน งานตกแต่ง (Interior)",
        category: "composite",
        categoryTh: "คอมโพสิต",
        price: 30000,
        image: "assets/composite_panel.png",
        tags: ["งานละเอียด", "ราคาโรงงาน", "จัดส่งทั่วประเทศ"],
        badges: ["น้ำหนักเบา", "PE Coating", "ผิวเรียบหรู"],
        description: `
            <p><strong>แผ่นคอมโพสิตสำหรับงานตกแต่งภายใน (Interior ACP)</strong> ผิวสัมผัสเรียบเนียนระดับลักชัวรี น้ำหนักเบา ติดตั้งรวดเร็ว เหมาะสำหรับเปลี่ยนโฉมผนังภายในห้องโถง ล็อบบี้ หรือฝ้าเพดาน</p>
            <ul>
                <li><strong>ความหนาแผ่นรวม:</strong> 3.0 มม. (ความหนาอลูมิเนียม 0.21 มม.)</li>
                <li><strong>ระบบสีเคลือบ:</strong> Polyester (PE) เงางามเป็นพิเศษ เช็ดล้างทำความสะอาดได้ง่าย</li>
                <li><strong>ความปลอดภัย:</strong> ปราศจากสารระเหยที่เป็นพิษ (Zero VOCs) ปลอดภัยต่อผู้อยู่อาศัย</li>
                <li><strong>การติดตั้ง:</strong> สามารถใช้กาวตะปูยึดติดกับโครงผนังเบาหรือไม้อัดได้ทันที</li>
            </ul>
        `
    },
    {
        id: "comp-4",
        code: "OSF-COMP-04",
        title: "สินค้าทดสอบเกรดประมูล 1779417899155",
        category: "composite",
        categoryTh: "คอมโพสิต",
        price: 999,
        image: "assets/composite_panel.png",
        tags: ["สินค้าทดลอง", "ส่งด่วน"],
        badges: ["เกรดทดสอบ", "ราคาโปรโมชัน"],
        description: `
            <p><strong>แผ่นวัสดุคอมโพสิตขนาดตัวอย่างสำหรับการทดสอบมาตรฐานโครงสร้าง</strong> เหมาะสำหรับผู้รับเหมาและวิศวกรที่ต้องการนำไปทดสอบคุณสมบัติก่อนทำการประมูลโครงการใหญ่</p>
            <ul>
                <li><strong>ขนาดแผ่นตัวอย่าง:</strong> 30 x 30 ซม. สำหรับทดสอบความหนาและระบบสี</li>
                <li><strong>การทดสอบที่รองรับ:</strong> การดัดพับ (Bending test), การทดสอบความแข็งเกร็ง (Rigidity test)</li>
            </ul>
        `
    },

    // 2. ตะแกรงแผ่นเจาะรู (perforated-grate)
    {
        id: "perf-g1",
        code: "OSF-PERFG-01",
        title: "ตะแกรงเจาะรูทรงรังผึ้ง (Honeycomb Design)",
        category: "perforated-grate",
        categoryTh: "ตะแกรงแผ่นเจาะรู",
        price: PRICE_CONTACT,
        image: "assets/perforated_sheet.png",
        tags: ["ลวดลายรังผึ้ง", "สั่งผลิตพิเศษ", "เหล็กกล้า"],
        badges: ["สั่งทำขนาดพิเศษ", "ลวดลายโมเดิร์น", "โครงสร้างแกร่ง"],
        description: `
            <p><strong>ตะแกรงแผ่นเจาะรูลวดลายหกเหลี่ยมรังผึ้ง (Honeycomb Perforated Sheet)</strong> โดดเด่นด้วยดีไซน์รังผึ้งสามมิติ เหมาะสำหรับตกแต่งฟาซาดภายนอก ฉากกั้นห้อง แผงบังตา หรือหน้ากากอาคารที่ต้องการมุมมองที่เปิดโปร่งแต่ยังคงความเป็นส่วนตัว</p>
            <ul>
                <li><strong>วัสดุให้เลือกผลิต:</strong> อลูมิเนียม 1100, สแตนเลส 304, หรือเหล็กแผ่นดำหนาพิเศษ</li>
                <li><strong>ขนาดรูเจาะ (Aperture):</strong> รูหกเหลี่ยมขนาด 12 มม. ระยะ Pitch 15 มม. (เปิดช่องแสงผ่านได้ประมาณ 58%)</li>
                <li><strong>การเคลือบผิวสี:</strong> พ่นสีฝุ่นฝังแน่นอบความร้อนสูง (Powder Coating) หรือ Anodized สำหรับอลูมิเนียม</li>
                <li><strong>ความหนาแผ่น:</strong> เลือกได้ตั้งแต่ 1.2 มม. ถึง 3.0 มม.</li>
            </ul>
        `
    },

    // 3. ตะแกรงโลหะ (metal-grate)
    {
        id: "met-g1",
        code: "OSF-METG-01",
        title: "ตะแกรงเหล็กฉีกความหนาพิเศษ",
        category: "metal-grate",
        categoryTh: "ตะแกรงโลหะ",
        price: 950,
        image: "assets/expanded_metal.png",
        tags: ["เหล็กเหนียว", "ราคาโรงงาน", "จัดส่งทั่วประเทศ"],
        badges: ["รุ่นหนาพิเศษ", "ทนแรงกด", "เกรดอุตสาหกรรม"],
        description: `
            <p><strong>ตะแกรงเหล็กฉีก (Expanded Metal Mesh) เกรดโครงสร้างอุตสาหกรรม</strong> ผ่านการรีดและฉีกเป็นช่องตาข่ายข้าวหลามตัดสม่ำเสมอ ไร้รอยต่อ แข็งแรงสูง รับแรงกดและน้ำหนักเดินเท้าได้เป็นอย่างดี</p>
            <ul>
                <li><strong>รุ่นมาตรฐาน:</strong> XS-42 / XS-52 สำหรับงานปูพื้น ทางเดิน หรือโครงสร้างรับน้ำหนัก</li>
                <li><strong>วัสดุ:</strong> เหล็กกล้า SS400 เหนียวพิเศษ ทนต่อการแตกร้าวและการบิดตัว</li>
                <li><strong>ผิวสัมผัสกันลื่น:</strong> ลายตาข่ายขรุขระช่วยเพิ่มแรงเสียดทาน ป้องกันการลื่นไถลขณะเปียก</li>
                <li><strong>การใช้งานยอดนิยม:</strong> ปูพื้นทางลาด ฝาท่อระบายน้ำ บันไดหนีไฟภายนอกโรงงาน</li>
            </ul>
        `
    },
    {
        id: "met-g2",
        code: "OSF-METG-02",
        title: "สแตนเลสฉีก ทนสนิมสูง (SUS304)",
        category: "metal-grate",
        categoryTh: "ตะแกรงโลหะ",
        price: 2499,
        image: "assets/expanded_metal.png",
        tags: ["สแตนเลสแท้", "ทนทานสารเคมี"],
        badges: ["SUS 304 แท้", "ปลอดสนิม 100%", "งานเคมี-อาหาร"],
        description: `
            <p><strong>ตะแกรงสแตนเลสฉีกเกรดหรูหรา (Stainless Steel Expanded Mesh SUS304)</strong> สำหรับอุตสาหกรรมอาหาร เคมี หรืออาคารสไตล์ Modern-Industrial ที่ต้องการอายุการใช้งานยาวนานโดยปราศจากสนิม</p>
            <ul>
                <li><strong>วัสดุ:</strong> สแตนเลสเกรด SUS304 แท้ ความต้านทานการกัดกร่อนยอดเยี่ยม</li>
                <li><strong>ผิวสัมผัส:</strong> ขัดมันเรียบเนียน ปราศจากเสี้ยนคมเหล็ก</li>
                <li><strong>การประยุกต์ใช้:</strong> ตะแกรงตากแห้งอาหาร, ฝาครอบเครื่องจักรเคมี, ตกแต่งภายในร้านค้าลักชัวรี</li>
            </ul>
        `
    },
    {
        id: "met-g3",
        code: "OSF-METG-03",
        title: "อลูมิเนียมฉีก น้ำหนักเบา (Premium)",
        category: "metal-grate",
        categoryTh: "ตะแกรงโลหะ",
        price: 3890,
        image: "assets/expanded_metal.png",
        tags: ["อลูมิเนียมเกรดสูง", "ไม่เป็นสนิม"],
        badges: ["น้ำหนักเบามาก", "ดัดโค้งง่าย", "สีอโนไดซ์"],
        description: `
            <p><strong>ตะแกรงอลูมิเนียมฉีก Premium Grade</strong> น้ำหนักเบากว่าเหล็กถึง 3 เท่า ติดตั้งง่าย ไม่เป็นภาระต่อโครงสร้างอาคาร เหมาะกับงานสถาปัตยกรรมแนวใหม่</p>
            <ul>
                <li><strong>วัสดุ:</strong> อลูมิเนียม อัลลอยด์ เกรด 1100-H14</li>
                <li><strong>ผิวหน้า:</strong> ผ่านกระบวนการชุบสีไฟฟ้า Anodizing ป้องกันคราบหมองและรอยขีดข่วน</li>
                <li><strong>การใช้งาน:</strong> แผงกันแดด (Sunshade), เปลือกอาคารภายนอก (Façade Cladding), ฝ้าเพดานตาข่ายโปร่งแสง</li>
            </ul>
        `
    },

    // 4. ตะแกรงเหล็กฉีก (expanded-metal)
    {
        id: "exp-1",
        code: "OSF-EXPM-01",
        title: "ตะแกรงเหล็กฉีก มาตรฐานโครงการใหญ่",
        category: "expanded-metal",
        categoryTh: "ตะแกรงเหล็กฉีก",
        price: null,
        image: "assets/expanded_metal.png",
        tags: ["เหล็กหนาพิเศษ", "ทนทานแรงกดทับ"],
        badges: ["เกรดโครงการ", "ผ่านการทดสอบ ASTM"],
        description: `
            <p><strong>ตะแกรงเหล็กฉีกเกรดงานวิศวกรรมโครงสร้าง</strong> มักถูกใช้ในงานโครงสร้างฐานรองรับเครื่องจักรหนัก ทางรถวิ่ง และสะพานคนข้ามในโครงการเมกะโปรเจกต์</p>
            <ul>
                <li><strong>กระบวนการผลิต:</strong> Cold-rolled expansion ชิ้นงานแกร่งทนทาน</li>
                <li><strong>การชุบสังกะสี:</strong> ผ่านการชุบกัลวาไนซ์แบบจุ่มร้อน (Hot-Dip Galvanized) กันสนิมกว่า 20 ปี</li>
                <li><strong>บริการพิเศษ:</strong> มีบริการตัดแบ่งตามขนาดโครงการ และทำสีพิเศษฝุ่นภายนอกอาคาร</li>
            </ul>
        `
    },
    {
        id: "exp-2",
        code: "OSF-EXPM-02",
        title: "ตะแกรงเหล็กฉีก XS-52 SP (Expanded Metal)",
        category: "expanded-metal",
        categoryTh: "ตะแกรงเหล็กฉีก",
        price: null,
        image: "assets/expanded_metal.png",
        tags: ["XS-52 SP", "ผ่านการทดสอบ JIS"],
        badges: ["JIS Standard", "รุ่นยอดนิยม", "XS-52 SP"],
        description: `
            <p><strong>ตะแกรงเหล็กฉีกรุ่นดังระดับตำนาน XS-52 SP</strong> นิยมใช้อย่างแพร่หลายในอุตสาหกรรมการก่อสร้างและผู้รับเหมาทั่วไป มีความลงตัวระหว่างราคาที่คุ้มค่าและความแข็งแรงเชิงกลสูง</p>
            <ul>
                <li><strong>ขนาดความหนา:</strong> 3.2 มม. | สันตะแกรงกว้าง 4.0 มม.</li>
                <li><strong>ขนาดช่องตาข่าย:</strong> 36 x 80 มม. (ระยะรูตามแนวเฉียง)</li>
                <li><strong>การใช้งานเด่น:</strong> ปูพื้นระเบียงนอกอาคาร, รั้วกั้นทางหลวง, แผงกั้นรักษาความปลอดภัยเครื่องจักร</li>
            </ul>
        `
    },
    {
        id: "exp-3",
        code: "OSF-EXPM-03",
        title: "ตะแกรงเหล็กฉีก cb-32 เกรดมาตรฐานอุตสาหกรรม",
        category: "expanded-metal",
        categoryTh: "ตะแกรงเหล็กฉีก",
        price: 887,
        image: "assets/expanded_metal.png",
        tags: ["cb-32", "ราคาคุ้มค่า"],
        badges: ["ราคาสบายกระเป๋า", "พร้อมส่งด่วน"],
        description: `
            <p><strong>ตะแกรงเหล็กฉีกรุ่นน้ำหนักเบา cb-32</strong> ขนาดช่องตาเล็ก เหมาะสำหรับงานทำกรงสัตว์เลี้ยง รั้วประดับสวนงาน DIY หรือชั้นวางสินค้าในโกดัง</p>
            <ul>
                <li><strong>ขนาดความหนา:</strong> 1.6 มม. น้ำหนักเบา เคลื่อนย้ายสะดวกรวดเร็ว</li>
                <li><strong>คุณสมบัติเด่น:</strong> ราคาประหยัด ตัดตกแต่งขอบได้ง่ายโดยใช้เครื่องตัดมือทั่วไป</li>
                <li><strong>การสั่งซื้อ:</strong> มีสต็อกพร้อมจัดส่งทันทีไม่ต้องรอสั่งผลิต</li>
            </ul>
        `
    },

    // 5. แผ่นเจาะรู (perforated-plate)
    {
        id: "perf-p1",
        code: "OSF-PERFP-01",
        title: "อลูมิเนียมเจาะรูสำหรับปิดช่องระบายอากาศ",
        category: "perforated-plate",
        categoryTh: "แผ่นเจาะรู",
        price: 12000,
        image: "assets/perforated_sheet.png",
        tags: ["อลูมิเนียมแท้", "ไม่ขึ้นสนิม", "สั่งเจาะพิเศษ"],
        badges: ["ระบายอากาศดี", "อลูมิเนียม AL5052", "งานห้องเย็น"],
        description: `
            <p><strong>แผ่นอลูมิเนียมเจาะรูระบายอากาศ (Alu Perforated Panel)</strong> ใช้ปิดช่องลมเพื่อระบายความร้อน ปกป้องแมลงและสัตว์เล็กเข้าไปทำลายสายไฟภายในฝ้าเพดานหรือตู้คอนโทรล</p>
            <ul>
                <li><strong>วัสดุ:</strong> อลูมิเนียมอัลลอย 5052-H32 ทนน้ำเค็ม คลอรีน และความชื้นสูง</li>
                <li><strong>รูปแบบรู:</strong> รูกลมจัดแถวแบบทแยง 60 องศา (Staggered Pattern) ลมพัดผ่านลื่นไหล</li>
                <li><strong>ความหนาแผ่น:</strong> 1.5 มม. เจาะรูกลาง 3 มม. ระยะพิตช์ 5 มม.</li>
            </ul>
        `
    },
    {
        id: "perf-p2",
        code: "OSF-PERFP-02",
        title: "สแตนเลสเจาะรู SUS316 เกรดเคมี",
        category: "perforated-plate",
        categoryTh: "แผ่นเจาะรู",
        price: 9000,
        image: "assets/perforated_sheet.png",
        tags: ["ทนสารเคมี", "เกรดส่งออก"],
        badges: ["SUS 316 Premium", "ทนกรดด่าง", "เกรดห้องแล็บ"],
        description: `
            <p><strong>แผ่นสแตนเลสเจาะรูเกรดทหารและอุตสาหกรรมเคมีหนัก SUS316</strong> ทนทานต่อการกัดกร่อนจากสารเคมีกรดรุนแรง สภาพกรดด่างในห้องแล็บ และน้ำทะเลที่มีความเข้มข้นเกลือสูง</p>
            <ul>
                <li><strong>เกรดเหล็ก:</strong> สแตนเลสคาร์บอนต่ำพิเศษ Austenitic SUS316</li>
                <li><strong>มาตรฐานรู:</strong> ผ่านการเจาะด้วยเลเซอร์ CNC ความเที่ยงตรงสูง ขนาดรูกลมคมชัดเท่ากันทุกรู</li>
                <li><strong>การนำไปใช้:</strong> แผ่นกรองสารเคมี, ตะกร้าชุบโลหะ, อุปกรณ์ปิโตรเคมี</li>
            </ul>
        `
    },
    {
        id: "perf-p3",
        code: "OSF-PERFP-03",
        title: "เหล็กแผ่นเจาะรู แข็งแรงทนทาน",
        category: "perforated-plate",
        categoryTh: "แผ่นเจาะรู",
        price: 15000,
        image: "assets/perforated_sheet.png",
        tags: ["เหล็กแผ่นเรียบ", "พ่นสีกันสนิมได้"],
        badges: ["เหล็กเหนียวแผ่นเรียบ", "หนาแข็งแกร่ง"],
        description: `
            <p><strong>แผ่นเหล็กดำเจาะรูกรันด์มาตรฐานอุตสาหกรรมก่อสร้าง</strong> แข็งแกร่งสูง ราคาคุ้มค่า เหมาะสำหรับนำไปดัดโค้ง พ่นสี หรือพ่นทรายตกแต่งผนังภายนอกอาคาร</p>
            <ul>
                <li><strong>การเตรียมผิว:</strong> เคลือบน้ำมันกันสนิมชนิดบางพิเศษ (Anti-rust oil) ป้องกันเบื้องต้น</li>
                <li><strong>การเชื่อมประกอบ:</strong> เชื่อมเชื่อมแก๊สหรือเชื่อมไฟฟ้าได้ง่าย ผิวเรียบดัดโค้งโครงเหล็กได้ดี</li>
                <li><strong>การใช้สอย:</strong> ตะแกรงโม่หิน, แผ่นคัดแยกพืชผลเกษตร, ผนังกั้นห้องแบบกึ่งโปร่งแสง</li>
            </ul>
        `
    },
    {
        id: "perf-p4",
        code: "OSF-PERFP-04",
        title: "แผ่นเจาะรูรูกลม (Round Hole Standard)",
        category: "perforated-plate",
        categoryTh: "แผ่นเจาะรู",
        price: 15000,
        image: "assets/perforated_sheet.png",
        tags: ["รูกลมมาตรฐาน", "ระบายอากาศดี"],
        badges: ["รูกลมฟิสิกส์", "พร้อมส่งเยอะ"],
        description: `
            <p><strong>แผ่นเจาะรูกลมลวดลายมาตรฐานคลาสสิก</strong> อเนกประสงค์ ใช้งานได้ในงานวิศวกรรม งานประดับตกแต่ง และอุตสาหกรรมการผลิตชิ้นส่วนต่าง ๆ</p>
            <ul>
                <li><strong>ขนาดรูกลม:</strong> 5.0 มม. ระยะขอบเรียงตัวสวยงาม</li>
                <li><strong>ตัวเลือกวัสดุ:</strong> สแตนเลส 304, เหล็ก, สังกะสีซิงค์</li>
            </ul>
        `
    },
    {
        id: "perf-p5",
        code: "OSF-PERFP-05",
        title: "แผ่นเจาะรูสี่เหลี่ยม (Square Hole Grid)",
        category: "perforated-plate",
        categoryTh: "แผ่นเจาะรู",
        price: 15000,
        image: "assets/perforated_sheet.png",
        tags: ["รูเหลี่ยมดีไซน์โมเดิร์น", "สถาปัตยกรรม"],
        badges: ["ลวดลายโมเดิร์น", "สี่เหลี่ยมจัตุรัส"],
        description: `
            <p><strong>แผ่นโลหะเจาะรูรูปทรงสี่เหลี่ยมจัตุรัส (Square Hole Perforated Sheet)</strong> สำหรับสถาปนิกที่ต้องการลวดลายเส้นตรงที่เฉียบคม เข้ากันได้ดีกับการตกแต่งร้านค้าสไตล์ลอฟท์ มินิมอล หรือโมเดิร์นคลาสสิก</p>
            <ul>
                <li><strong>สัดส่วนเปิดโล่ง:</strong> สูงถึง 65% แสงและอากาศไหลผ่านได้อย่างสะดวกสบาย</li>
                <li><strong>แนะนำการแต่งสี:</strong> โค้ทสีดำด้านกึ่งเงา หรือสีบรอนซ์ทองลักชัวรี</li>
            </ul>
        `
    },
    {
        id: "perf-p6",
        code: "OSF-PERFP-06",
        title: "แผ่นเจาะรูสลับลาย (Patterned Layout)",
        category: "perforated-plate",
        categoryTh: "แผ่นเจาะรู",
        price: 8500,
        image: "assets/perforated_sheet.png",
        tags: ["ดีไซน์หรูหรา", "งานผนังตกแต่ง"],
        badges: ["สลับลวดลายอัจฉริยะ", "งานสถาปนิกออกแบบ"],
        description: `
            <p><strong>แผ่นตกแต่งเจาะรูไล่ระดับขนาดและลวดลายสลับ (Artistic Patterned Sheet)</strong> สามารถตั้งโปรแกรม CNC ไล่จุดความหนาแน่นเพื่อสร้างมิติศิลปะบนแผ่นโลหะได้ตามภาพสเก็ตช์</p>
            <ul>
                <li><strong>การเจาะเทคโนโลยีใหม่:</strong> CNC Multi-tooling เจาะรูขนาดต่างกันลงบนแผ่นเดียวอย่างสมบูรณ์แบบ</li>
                <li><strong>การใช้งาน:</strong> งานฉลุลายตกแต่งล็อบบี้โรงแรม, ผนังโชว์รูมแบรนด์เนม</li>
            </ul>
        `
    },
    {
        id: "perf-p7",
        code: "OSF-PERFP-07",
        title: "แผ่นตกแต่งผนังภายนอกอาคาร",
        category: "perforated-plate",
        categoryTh: "แผ่นเจาะรู",
        price: 17000,
        image: "assets/perforated_sheet.png",
        tags: ["สถาปัตยกรรมภายนอก", "กันลม"],
        badges: ["Facade Exterior", "รับแรงพายุฝน"],
        description: `
            <p><strong>หน้ากากโลหะเจาะรูตกแต่งผนังภายนอก (Perforated Building Envelope)</strong> ช่วยบังแสงแดดจัดที่จะส่องเข้าอาคารโดยตรง (Shading facade) แต่ยังสว่างโปร่งและลดอุณหภูมิภายในตัวตึกได้อย่างยอดเยี่ยม</p>
            <ul>
                <li><strong>ความหนาเหล็ก/อลูมิเนียม:</strong> 2.0 มม. - 3.0 มม. พร้อมพับปีกเสริมกระดูกงูความแข็งแรงด้านหลัง</li>
                <li><strong>การันตีความทนสี:</strong> พ่นระบบสีฝุ่นภายนอก (Super Durable Polyester Powder) รับประกันไม่ลอกร่อน 10 ปี</li>
            </ul>
        `
    },

    // 6. แผ่นฝ้าถาด (ceiling)
    {
        id: "ceil-1",
        code: "OSF-CEIL-01",
        title: "แผ่นฝ้าถาดคอมโพสิต กันความร้อน",
        category: "ceiling",
        categoryTh: "แผ่นฝ้าถาด",
        price: 60000,
        image: "assets/ceiling_panel.png",
        tags: ["กันความร้อน", "สวยงามทนทาน"],
        badges: ["ฝ้าเพดานเย็น", "หน่วงความร้อน"],
        description: `
            <p><strong>แผ่นฝ้าถาดคอมโพสิต (ACP Ceiling Panel) เกรดฉนวนกันความร้อน</strong> ช่วยหน่วงและสะท้อนความร้อนใต้หลังคาก่อนเข้าสู่ห้องพัก เหมาะสำหรับบ้านประหยัดพลังงานหรืออาคารสำนักงานยุคใหม่</p>
            <ul>
                <li><strong>ระบบโครงสร้าง:</strong> Lay-in หรือ Clip-in เข้าชุดโครงอลูมิเนียมได้เรียบร้อยเรียบกริบ</li>
                <li><strong>ความเงียบ:</strong> มีชั้นแกนกลางช่วยดูดซับแรงสั่นสะเทือนจากหยดน้ำฝนบนหลังคา</li>
                <li><strong>การดูแลรักษา:</strong> ป้องกันคราบราดำ ฝุ่นไม่เกาะ เช็ดทำความสะอาดง่ายด้วยผ้าหมาด</li>
            </ul>
        `
    },
    {
        id: "ceil-2",
        code: "OSF-CEIL-02",
        title: "ตะแกรงฝ้าถาด อคูสติกซับเสียง",
        category: "ceiling",
        categoryTh: "แผ่นฝ้าถาด",
        price: 70000,
        image: "assets/ceiling_panel.png",
        tags: ["ซับเสียงยอดเยี่ยม", "สถาปัตยกรรมโมเดิร์น"],
        badges: ["Acoustic Absorption", "เก็บเสียงเป็นเลิศ"],
        description: `
            <p><strong>แผ่นฝ้าเพดานโลหะเจาะรูประกบแผ่นใยซับเสียงด้านหลัง (Acoustic Metal Ceiling)</strong> ออกแบบมาสำหรับติดตั้งในห้องประชุมใหญ่ โถงบรรยาย สนามบิน หรือออฟฟิศขนาดใหญ่ เพื่อลดเสียงก้อง สะท้อน และรบกวน</p>
            <ul>
                <li><strong>แผ่นซับเสียงด้านหลัง:</strong> แผ่นใย Soundtex นำเข้าจากประเทศเยอรมนี ดูดซับเสียงสะท้อนได้มีประสิทธิภาพสูง</li>
                <li><strong>รูปแบบการติดตั้ง:</strong> ระบบฝังในทีบาร์มาตรฐาน (T-Bar system) รวดเร็ว ช่างทั่วไปทำได้ทันที</li>
            </ul>
        `
    },
    {
        id: "ceil-3",
        code: "OSF-CEIL-03",
        title: "แผ่นฝ้าถาดเหล็ก พ่นสีพาวเดอร์โค้ท",
        category: "ceiling",
        categoryTh: "แผ่นฝ้าถาด",
        price: 50000,
        image: "assets/ceiling_panel.png",
        tags: ["Powder Coated", "สีทนไม่ซีดจาง"],
        badges: ["เหล็กซิงค์อบสี", "ทนรอยขีดข่วน"],
        description: `
            <p><strong>แผ่นฝ้าเพดานถาดเหล็กพับขึ้นรูปเคลือบสารกันสนิม</strong> อบสีฝุ่นอุณหภูมิสูง ให้ผิวสัมผัสหนา สวยงามหรูหรา ปราศจากคลื่นหน้าเรียบแผ่นตึงตัวดีเลิศ</p>
            <ul>
                <li><strong>วัสดุ:</strong> แผ่นเหล็กชุบสังกะสีกันสนิมสูง (Electro-Galvanized Steel)</li>
                <li><strong>สีผิวสัมผัส:</strong> ขาวนวลพิเศษ (Soft White Matt) ไม่สะท้อนแสงแยงสายตา หรือมีสีดำ/ทองพิเศษสำหรับออกแบบกึ่งลักชัวรี</li>
            </ul>
        `
    },
    {
        id: "ceil-4",
        code: "OSF-CEIL-04",
        title: "แผ่นฝ้าถาดอลูมิเนียม น้ำหนักเบาพิเศษ",
        category: "ceiling",
        categoryTh: "แผ่นฝ้าถาด",
        price: 80000,
        image: "assets/ceiling_panel.png",
        tags: ["อลูมิเนียมน้ำหนักเบา", "ติดตั้งง่าย"],
        badges: ["อลูมิเนียมแท้เบาหวิว", "อายุการใช้งานยาวนาน"],
        description: `
            <p><strong>แผ่นฝ้าอลูมิเนียมถาดหนาพิเศษแบบติดตั้งคลิปอัพพรีเมียม</strong> ปลอดสนิมตลอดชีพ น้ำหนักเบาเพียง 0.8 กก./แผ่น ปลอดภัยสูงสุดหากมีเหตุการณ์แผ่นดินไหว</p>
            <ul>
                <li><strong>คุณสมบัติเด่น:</strong> ถอดประกอบเข้าออกได้บ่อยเพื่อบำรุงรักษางานระบบเหนือฝ้าโดยแผ่นไม่บุบหรือเสียรูปทรง</li>
                <li><strong>การรับประกัน:</strong> รับประกันการเกิดสนิมและการผุกร่อน ตลอดอายุการใช้งานของอาคาร</li>
            </ul>
        `
    },

    // 7. แผ่นลายกันลื่น (anti-slip)
    {
        id: "as-1",
        code: "OSF-ANTIS-01",
        title: "อลูมิเนียมลายตีนเป็ดกันลื่น (Checker Plate)",
        category: "anti-slip",
        categoryTh: "แผ่นลายกันลื่น",
        price: 40000,
        image: "assets/anti_slip_plate.png",
        tags: ["อลูมิเนียมตีนเป็ด", "ความปลอดภัยสูง"],
        badges: ["มี 2 เกรดคุณภาพ", "ลายชัดนูนสูง", "เกรดรถบรรทุก/เรือ"],
        description: `
            <p><strong>แผ่นอลูมิเนียมลายตีนเป็ดนูน 5 ลาย (Aluminium Checker Plate 5-Bar Pattern)</strong> เกรดทหารและอุตสาหกรรมหนัก มีลายนูนเด่นชัดกันลื่นไถลได้ดีที่สุด เหมาะสำหรับทำพื้นรถบรรทุก พื้นท้ายรถกระบะ บันไดขึ้นลงจุดขนส่งสินค้า และห้องเครื่องเรือเดินสมุทร</p>
            <ul>
                <li><strong>วัสดุและเกรด:</strong> อลูมิเนียม 3105-H14 (เกรดงานทั่วไป) หรือ 5083-H112 (เกรดงานสะพาน งานเรือเดินทะเล ทนทานสูง)</li>
                <li><strong>ความหนาแผ่นฐาน:</strong> 2.0 มม. ถึง 4.5 มม. (ไม่รวมความนูนของตัวลายตีนเป็ด)</li>
                <li><strong>คุณสมบัติ:</strong> อลูมิเนียมคัดเกรดเหนียว ไม่กรอบหัก พับฉากทำรูปทางเดินได้ง่าย ไม่ก่อเกิดประกายไฟเมื่อเกิดแรงเสียดสี</li>
                <li><strong>มิติการใช้งาน:</strong> นิยมใช้ปูแผ่นรองบันไดโรงงานผลิตอาหารเนื่องจากปลอดคราบราสนิม ทำความสะอาดง่าย</li>
            </ul>
        `
    },
    {
        id: "as-2",
        code: "OSF-ANTIS-02",
        title: "สแตนเลสลายกันลื่น งานบันไดอุตสาหกรรม",
        category: "anti-slip",
        categoryTh: "แผ่นลายกันลื่น",
        price: 20000,
        image: "assets/anti_slip_plate.png",
        tags: ["สแตนเลสทนทาน", "โรงงานอุตสาหกรรม"],
        badges: ["สแตนเลส 304 แท้", "ทนน้ำยาล้างพื้น", "ความปลอดภัยเดินเท้า"],
        description: `
            <p><strong>แผ่นสแตนเลสปั๊มลายนูนกันลื่นลายตีนเป็ด/ตีนไก่</strong> เหมาะกับโรงงานอุตสาหกรรมห้องเย็น โรงแปรรูปเนื้อสัตว์ โรงผลิตยา ที่ต้องล้างสารเคมีและทำความสะอาดฆ่าเชื้อด้วยน้ำยาแรงสูงทุกวัน</p>
            <ul>
                <li><strong>วัสดุ:</strong> สแตนเลสเกรดอาหาร SUS304 ผิว 2B สว่างเงางาม</li>
                <li><strong>ความต้านทานแรงดัน:</strong> แผ่นแกร่งรับน้ำหนักการเหยียบย่ำของรองเท้าบูทเหล็กและรถลากจูงขนาดย่อมได้ดีเยี่ยม</li>
                <li><strong>อายุการใช้งาน:</strong> ยาวนานกว่าเหล็กชุบ 10 เท่า ทนต่อน้ำยาล้างพื้นแอมโมเนียและกรดเจือจาง</li>
            </ul>
        `
    },
    {
        id: "as-3",
        code: "OSF-ANTIS-03",
        title: "เหล็กแผ่นกันลื่น ลายหนาพิเศษ",
        category: "anti-slip",
        categoryTh: "แผ่นลายกันลื่น",
        price: 10000,
        image: "assets/anti_slip_plate.png",
        tags: ["เหล็กกล้าคาร์บอน", "ราคาประหยัด"],
        badges: ["เหล็กดำเหนียวแข็ง", "ราคาจับต้องได้", "หนาแข็งแกร่ง"],
        description: `
            <p><strong>แผ่นเหล็กลายกันลื่นลายเม็ดข้าวสาร/ลายไดมอนด์ (Steel Tear Drop Plate)</strong> ราคาประหยัด ปลอดภัยสูง สำหรับประกอบงานทางขึ้นสะพานลอย พื้นปั๊มน้ำมัน พื้นทางลาดรอบคลังสินค้า</p>
            <ul>
                <li><strong>ความหนาเลือกสั่งได้:</strong> 2.3 มม., 3.0 มม., 4.5 มม. และสูงสุด 6.0 มม.</li>
                <li><strong>วัสดุเหล็ก:</strong> SS400 แผ่นเหนียวเชื่อมขึ้นรูปง่าย ยึดเกาะรอยต่อโครงเหล็กได้มั่นคง</li>
                <li><strong>บริการเพิ่มเติม:</strong> จัดส่งพ่นสีกันสนิม Primer แดงเพื่อเตรียมพร้อมทำสีจริงหน้างานได้ทันที</li>
            </ul>
        `
    }
];

// Category Maps for Horizontal Grouped Layout
const categoryNameThMap = {
    "composite": "คอมโพสิต",
    "perforated-grate": "ตะแกรงแผ่นเจาะรู",
    "metal-grate": "ตะแกรงโลหะ",
    "expanded-metal": "ตะแกรงเหล็กฉีก",
    "perforated-plate": "แผ่นเจาะรู",
    "ceiling": "แผ่นฝ้าถาด",
    "anti-slip": "แผ่นลายกันลื่น"
};

const categoryIconCharMap = {
    "composite": "ค",
    "perforated-grate": "ต",
    "metal-grate": "ต",
    "expanded-metal": "ต",
    "perforated-plate": "แ",
    "ceiling": "แ",
    "anti-slip": "แ"
};

// Global category click trigger for scroll cards redirection
window.selectCategory = function(catCode) {
    const tab = document.querySelector(`.category-tab[data-category="${catCode}"]`);
    if (tab) {
        // Scroll to category tabs if not in view
        const element = document.getElementById("categoryBar");
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        tab.click();
    }
};

// Google Product Schema JSON-LD Injection
function injectProductSchema(products) {
    const existingScript = document.getElementById("google-product-schema");
    if (existingScript) {
        existingScript.remove();
    }

    const schemaGraph = products.map(prod => {
        const hasPrice = !hasContactPrice(prod);
        return {
            "@type": "Product",
            "@id": `https://www.onesiamfactory.com/products#${prod.id}`,
            "name": prod.title,
            "image": `https://www.onesiamfactory.com/${prod.image}`,
            "description": prod.title + " ผลิตและจำหน่ายโดย OneSiam Factory ผู้นำทางด้านงานฟาซาดและวัสดุอุตสาหกรรมสำหรับผู้รับเหมาและวิศวกร",
            "sku": prod.code,
            "mpn": prod.code,
            "brand": {
                "@type": "Brand",
                "name": "OneSiam Factory"
            },
            "offers": {
                "@type": "Offer",
                "url": `https://www.onesiamfactory.com/products#${prod.id}`,
                "priceCurrency": "THB",
                "price": hasPrice ? prod.price.toString() : "0.00",
                "priceValidUntil": "2027-12-31",
                "itemCondition": "https://schema.org/NewCondition",
                "availability": hasPrice ? "https://schema.org/InStock" : "https://schema.org/PreOrder",
                "valueAddedTaxIncluded": "false"
            }
        };
    });

    const schema = {
        "@context": "https://schema.org",
        "@graph": schemaGraph
    };

    const script = document.createElement("script");
    script.id = "google-product-schema";
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema, null, 2);
    document.head.appendChild(script);
}

function renderProducts() {
    // Start from the public catalog only; keep the test product out of the storefront view.
    let filteredList = PRODUCTS_DATA.filter(prod => prod.id !== "comp-4");
    
    // 1. Filter by search query if any
    if (searchQuery.length > 0) {
        filteredList = filteredList.filter(prod => 
            prod.title.toLowerCase().includes(searchQuery) ||
            prod.code.toLowerCase().includes(searchQuery) ||
            prod.categoryTh.toLowerCase().includes(searchQuery) ||
            prod.tags.some(tag => tag.toLowerCase().includes(searchQuery))
        );
    }

    // 2. Sort the list if sorting is set (clone before sorting to avoid mutating the source catalog)
    if (currentSort === "price-asc") {
        filteredList = [...filteredList].sort((a, b) => a.price - b.price);
    } else if (currentSort === "price-desc") {
        filteredList = [...filteredList].sort((a, b) => b.price - a.price);
    }

    // 3. Update the label and determine grid class
    if (currentCategory !== "all") {
        filteredList = filteredList.filter(prod => prod.category === currentCategory);
        productsGrid.classList.remove("grouped-layout");
    } else {
        productsGrid.classList.add("grouped-layout");
    }

    itemCountLabel.innerHTML = `พบ <strong style="color: var(--primary-600)">${filteredList.length}</strong> สินค้าในหมวดหมู่`;
    productsGrid.innerHTML = "";

    if (filteredList.length === 0) {
        productsGrid.innerHTML = `
            <div class="no-results">
                <i class="fa-solid fa-box-open" aria-hidden="true"></i>
                <h3>ไม่พบข้อมูลสินค้าที่คุณต้องการค้นหา</h3>
                <p>โปรดลองใช้คำค้นหาอื่น หรือเลือกหมวดหมู่อื่นเพื่อค้นหาวัสดุที่คุณต้องการ</p>
            </div>
        `;
        return;
    }

    // 4. Render layout based on active tab
    if (currentCategory !== "all") {
        // Standard Grid Layout for specific categories
        filteredList.forEach((prod, index) => {
            const card = createProductCardElement(prod, index);
            productsGrid.appendChild(card);
            setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }, 50);
        });
    } else {
        // Grouped Horizontal Scrolling rows for "All" view
        const categoriesOrder = ["composite", "perforated-grate", "metal-grate", "expanded-metal", "perforated-plate", "ceiling", "anti-slip"];
        
        categoriesOrder.forEach((catCode) => {
            const categoryItems = filteredList.filter(p => p.category === catCode);
            if (categoryItems.length === 0) return; // Skip if no products match in this category

            const section = document.createElement("div");
            section.className = "category-group-section";

            const thName = categoryNameThMap[catCode] || "หมวดหมู่";
            const iconChar = categoryIconCharMap[catCode] || "ส";

            section.innerHTML = `
                <div class="category-group-header">
                    <div class="category-group-title">
                        <span class="category-icon-badge">${iconChar}</span>
                        <h3>${thName}</h3>
                        <span class="category-count">${categoryItems.length} สินค้า</span>
                    </div>
                    <button class="btn-view-all-category" onclick="selectCategory('${catCode}')">
                        ดูทั้งหมด <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
                    </button>
                </div>
                <div class="category-row-scroll">
                    <!-- Cards will be dynamically appended here -->
                </div>
            `;

            const scrollRow = section.querySelector(".category-row-scroll");
            
            categoryItems.forEach((prod, index) => {
                const card = createProductCardElement(prod, index);
                scrollRow.appendChild(card);
                setTimeout(() => {
                    card.style.opacity = "1";
                    card.style.transform = "translateY(0)";
                }, 50);
            });

            // Append "View More in this Category" card at the end of the scroll row
            const viewMoreCard = document.createElement("div");
            viewMoreCard.className = "view-more-card";
            viewMoreCard.setAttribute("tabindex", "0");
            viewMoreCard.setAttribute("aria-label", `ดูเพิ่มเติมในหมวดหมู่ ${thName}`);
            viewMoreCard.innerHTML = `
                <div class="view-more-circle"><i class="fa-solid fa-arrow-right" aria-hidden="true"></i></div>
                <span>ดูเพิ่มเติม<br>ในหมวดนี้</span>
            `;
            viewMoreCard.addEventListener("click", () => selectCategory(catCode));
            viewMoreCard.addEventListener("keydown", (e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    selectCategory(catCode);
                }
            });

            scrollRow.appendChild(viewMoreCard);
            productsGrid.appendChild(section);
        });
    }
}

// App State
let currentCategory = "all";
let searchQuery = "";
let currentSort = "default";
let activeView = "catalog"; // "catalog" or "detail"
let activeProductId = null;
let savedScrollPosition = 0;
let cart = JSON.parse(localStorage.getItem("onesiam_cart")) || [];

// DOM Elements
const productsGrid = document.getElementById("productsGrid");
const categoryBar = document.getElementById("categoryBar");
const searchInput = document.getElementById("searchInput");
const searchClearBtn = document.getElementById("searchClearBtn");
const sortSelect = document.getElementById("sortSelect");
const activeCategoryTitle = document.getElementById("activeCategoryTitle");
const itemCountLabel = document.getElementById("itemCountLabel");
const backToTopBtn = document.getElementById("backToTopBtn");

// Mobile Layout DOM Elements
const headerSearchInput = document.getElementById("headerSearchInput");
const btnMenuMobile = document.getElementById("btnMenuMobile");
const btnCloseMenu = document.getElementById("btnCloseMenu");
const menuBackdrop = document.getElementById("menuBackdrop");
const mobileDrawer = document.getElementById("mobileDrawer");
const btnSearchMobile = document.getElementById("btnSearchMobile");
const mobileSearchClose = document.getElementById("mobileSearchClose");
const mobileSearchPanel = document.getElementById("mobileSearchPanel");
const mobileSearchInput = document.getElementById("mobileSearchInput");
const mobileLoginBtn = document.getElementById("mobileLoginBtn");

// Page View Elements
const catalogView = document.querySelector(".catalog-container");
const productDetailView = document.getElementById("productDetailView");
const heroSection = document.querySelector(".hero-section");
const filterSection = document.querySelector(".filter-section");
const filterStatusCard = document.querySelector(".filter-status-card");

// Detail View Targets
const detailCategoryName = document.getElementById("detailCategoryName");
const detailProductImage = document.getElementById("detailProductImage");
const detailProductTitle = document.getElementById("detailProductTitle");
const detailPriceValue = document.getElementById("detailPriceValue");
const detailDescriptionText = document.getElementById("detailDescriptionText");
const detailBadgesRow = document.getElementById("detailBadgesRow");
const relatedProductsGrid = document.getElementById("relatedProductsGrid");
const qtyInput = document.getElementById("qtyInput");
const qtyMinusBtn = document.getElementById("qtyMinusBtn");
const qtyPlusBtn = document.getElementById("qtyPlusBtn");

// Detail Actions Buttons
const addToCartBtn = document.getElementById("addToCartBtn");
const buyNowBtn = document.getElementById("buyNowBtn");
const contactSellerBtn = document.getElementById("contactSellerBtn");
const backToCatalogBtn = document.getElementById("backToCatalogBtn");

// Header Cart Elements
const headerCartBtn = document.getElementById("headerCartBtn");
const headerCartBadge = document.getElementById("headerCartBadge");

// Cart Drawer Elements
const cartContainer = document.getElementById("cartContainer");
const cartToggleBtn = document.getElementById("cartToggleBtn");
const floatingCartBadge = document.getElementById("floatingCartBadge");
const cartDrawer = document.getElementById("cartDrawer");
const cartBackdrop = document.getElementById("cartBackdrop");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartItemsList = document.getElementById("cartItemsList");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartCountLabel = document.getElementById("cartCountLabel");
const clearCartBtn = document.getElementById("clearCartBtn");
const checkoutNextBtn = document.getElementById("checkoutNextBtn");

// Checkout Form Step
const cartStepItems = document.getElementById("cartStepItems");
const cartStepForm = document.getElementById("cartStepForm");
const cartStepSuccess = document.getElementById("cartStepSuccess");
const btnBackToItems = document.getElementById("btnBackToItems");
const checkoutForm = document.getElementById("checkoutForm");
const submitQuotationBtn = document.getElementById("submitQuotationBtn");

// Success Step Elements
const successRefId = document.getElementById("successRefId");
const successName = document.getElementById("successName");
const successItemsCount = document.getElementById("successItemsCount");
const btnDownloadPDF = document.getElementById("btnDownloadPDF");
const btnSuccessClose = document.getElementById("btnSuccessClose");

// Toast Container
const toastContainer = document.getElementById("toastContainer");

// Breadcrumbs & Tabs Targets
const detailBreadcrumbCategory = document.getElementById("detailBreadcrumbCategory");
const detailBreadcrumbTitle = document.getElementById("detailBreadcrumbTitle");
const detailImageGallery = document.getElementById("detailImageGallery");
const detailSpecsTable = document.getElementById("detailSpecsTable");
const detailAppsText = document.getElementById("detailAppsText");

// Category Display Name Mapping
const categoryNameMap = {
    "all": "สินค้าทั้งหมด",
    "composite": "คอมโพสิต (Composite Panels)",
    "perforated-grate": "ตะแกรงแผ่นเจาะรู (Perforated Sheets)",
    "metal-grate": "ตะแกรงโลหะ (Metal Grates)",
    "expanded-metal": "ตะแกรงเหล็กฉีก (Expanded Metal)",
    "perforated-plate": "แผ่นเจาะรู (Perforated Plates)",
    "ceiling": "แผ่นฝ้าถาด (Ceiling Panels)",
    "anti-slip": "แผ่นลายกันลื่น (Anti-Slip Plates)"
};

// Detailed Specifications & Applications Data Map
const CATEGORY_SPECS = {
    "composite": {
        specs: [
            { label: "ความหนาแผ่นรวม (Total Thickness)", value: "4.0 มิลลิเมตร" },
            { label: "ความหนาอลูมิเนียม (Alu Skin)", value: "0.5 มิลลิเมตร (ทั้งสองด้าน)" },
            { label: "ชนิดไส้กลาง (Core Material)", value: "FR Core (Fire Retardant เกรดหน่วงไฟ)" },
            { label: "ระบบเคลือบสี (Coating System)", value: "PVDF Kynar 500 (ทนรังสี UV 100%)" },
            { label: "การทนไฟ (Fire Class)", value: "Class A (ผ่านการทดสอบ ASTM E84)" },
            { label: "การดัดโค้ง (Bending Ability)", value: "สามารถดัดโค้ง พับวีตัดมุม 90 องศาได้ดีเลิศ" }
        ],
        apps: `
            <ul>
                <li>หุ้มผนังภายนอกและภายในอาคารสูง (Facade Cladding)</li>
                <li>ทำหน้ากากอาคาร ป้ายโชว์รูม และซุ้มประตูทางเข้า</li>
                <li>งานฝ้าเพดานภายนอกที่ต้องการทนแรงลมสูง</li>
                <li>ตกแต่งผนังห้องโถง ล็อบบี้โรงแรม หรือห้างสรรพสินค้า</li>
            </ul>
        `
    },
    "perforated-grate": {
        specs: [
            { label: "รูปแบบลวดลาย (Pattern)", value: "Honeycomb (ลายรังผึ้งหกเหลี่ยม)" },
            { label: "วัสดุที่เลือกผลิต (Material Option)", value: "อลูมิเนียม 1100 / สแตนเลส 304 / เหล็กดำ" },
            { label: "ความหนาแผ่นฐาน (Thickness)", value: "1.5 มม. - 3.0 มม. (ตามต้องการ)" },
            { label: "ขนาดรูเจาะ (Aperture size)", value: "12 มิลลิเมตร" },
            { label: "ระยะกึ่งกลางรู (Pitch distance)", value: "15 มิลลิเมตร" },
            { label: "อัตราส่วนเปิดโล่ง (Open Area)", value: "ประมาณ 58% (แสงและอากาศพัดผ่านได้ดี)" }
        ],
        apps: `
            <ul>
                <li>ผนังตกแต่งภายนอกอาคารและฟาซาดกรองแสง (Sunshade Facade)</li>
                <li>แผงระเบียงกั้น ราวกันตก และฉากกั้นห้องสไตล์โมเดิร์น</li>
                <li>หน้ากากปิดท่อน้ำและพอร์ตพัดลมเครื่องจักรขนาดใหญ่</li>
                <li>งานประดับสวน ลวดลายตกแต่งผนังร้านค้า</li>
            </ul>
        `
    },
    "metal-grate": {
        specs: [
            { label: "วัสดุในการผลิต (Material)", value: "เหล็กเหนียวคุณภาพสูง SS400 / สแตนเลส SUS304" },
            { label: "การชุบกันสนิม (Galvanization)", value: "Hot-Dip Galvanized ตามมาตรฐาน ASTM A123" },
            { label: "ความหนาเหล็ก (Steel Thickness)", value: "3.2 มิลลิเมตร (รุ่นแข็งแกร่งพิเศษ)" },
            { label: "ขนาดช่องตารู (Mesh Size)", value: "36 x 80 มิลลิเมตร (รุ่น XS-52)" },
            { label: "การรับแรงกด (Load Capacity)", value: "ปูปูพื้นทางเดินรับน้ำหนักได้ 250 กก./ตร.ม." },
            { label: "มาตรฐานการทดสอบ (Standard)", value: "ผ่านการรับรองมาตรฐานอุตสาหกรรม JIS G3351" }
        ],
        apps: `
            <ul>
                <li>พื้นบันไดเหล็ก บันไดหนีไฟภายนอกโรงงานอุตสาหกรรม</li>
                <li>ทางลาด ตะแกรงฝาท่อระบายน้ำที่ต้องการการระบายน้ำรวดเร็ว</li>
                <li>รั้วกั้นทางหลวง รั้วป้องกันรอบคลังสินค้า</li>
                <li>ตะแกรงฝาครอบและแผงป้องกันความปลอดภัยสำหรับเครื่องจักร</li>
            </ul>
        `
    },
    "expanded-metal": {
        specs: [
            { label: "มาตรฐานผลิตภัณฑ์ (Standard)", value: "JIS G3351 (Expanded Metals)" },
            { label: "รุ่นรหัสมาตรฐาน (Code Model)", value: "XS-42 / XS-52 / CB-32" },
            { label: "วัสดุในการรีดฉีก (Material)", value: "เหล็กแผ่นดำเหนียว SS400 ปราศจากรอยต่อ" },
            { label: "การเคลือบผิวกันสนิม (Surface)", value: "ชุบซิงค์กัลวาไนซ์ / อบสีฝุ่น Powder Coat ดำด้าน" },
            { label: "ขนาดแผ่นมาตรฐาน (Sheet Size)", value: "1.2 x 2.4 เมตร (4 x 8 ฟุต)" },
            { label: "ความกว้างของสันตา (Strand Width)", value: "4.0 มิลลิเมตร" }
        ],
        apps: `
            <ul>
                <li>ทำกรงสัตว์เลี้ยง รั้วประดับสวน DIY สไตล์ลอฟท์</li>
                <li>ฝาครอบปิดระบบไฟฟ้า ท่อแอร์ และปล่องระบายอากาศ</li>
                <li>ชั้นวางของอเนกประสงค์ แผงห้อยเครื่องมือช่างในโกดัง</li>
                <li>โครงเหล็กฉาบปูนแต่งผนังปูนลอฟท์กันการแตกร้าว</li>
            </ul>
        `
    },
    "perforated-plate": {
        specs: [
            { label: "รูปทรงรูเจาะ (Hole Shape)", value: "รูกลม (Round Hole) / รูสี่เหลี่ยม (Square Grid)" },
            { label: "ขนาดความกว้างรู (Hole Size)", value: "5.0 มิลลิเมตร (รูกลมมาตรฐาน)" },
            { label: "ความหนาของแผ่นโลหะ (Thickness)", value: "1.5 มม. - 2.0 มม. (สม่ำเสมอเท่ากันทุกจุด)" },
            { label: "วัสดุที่เลือกใช้ (Material Option)", value: "อลูมิเนียม AL5052-H32 / สแตนเลส SUS316 / สังกะสีซิงค์" },
            { label: "ผิวสัมผัสภายนอก (Surface)", value: "ผิวเรียบ ปราศจากเสี้ยนคมเหล็ก CNC ตัดเรียบ" },
            { label: "การทนกรดด่าง (Acid Resistance)", value: "ทนสารเคมีในห้องทดลองสูงมาก (เฉพาะรุ่น SUS316)" }
        ],
        apps: `
            <ul>
                <li>แผ่นกรองของเสีย แผ่นคัดแยกเมล็ดพันธุ์การเกษตร</li>
                <li>หน้ากากปิดพัดลมระบายอากาศและตู้คอนโทรลโรงงาน</li>
                <li>ผนังกั้นห้องแบบโปร่งกึ่งส่วนตัว ผนังบังสายตา (Louver Panel)</li>
                <li>ตะแกรงกรองสารเคมี และอ่างล้างอุปกรณ์ในแล็บวิจัย</li>
            </ul>
        `
    },
    "ceiling": {
        specs: [
            { label: "ระบบติดตั้งฝ้า (Ceiling System)", value: "Lay-in (วางโครงสวมทีบาร์) / Clip-in (ล็อคซ่อนโครง)" },
            { label: "ขนาดแผ่นฝ้าถาด (Panel Size)", value: "600 x 600 มิลลิเมตร (มาตรฐานสากล)" },
            { label: "ความหนาแผ่นรวม (Thickness)", value: "0.7 มิลลิเมตร" },
            { label: "แผ่นซับเสียงด้านหลัง (Acoustic Pad)", value: "ใยเก็บเสียง Soundtex นำเข้าจากประเทศเยอรมนี" },
            { label: "น้ำหนักต่อแผ่น (Weight per sheet)", value: "0.8 กิโลกรัม (น้ำหนักเบาพิเศษ ปลอดภัยมาก)" },
            { label: "การดูแลรักษา (Maintenance)", value: "เช็ดล้างน้ำยาคราบฝุ่นได้ ป้องกันคราบเชื้อราดำ 100%" }
        ],
        apps: `
            <ul>
                <li>ฝ้าเพดานห้องประชุมใหญ่ โถงบรรยาย สนามบิน และสถานีรถไฟ</li>
                <li>ฝ้าเพดานออฟฟิศขนาดใหญ่เพื่อซับเสียงสะท้อนจากการคุยงาน</li>
                <li>หุ้มฝ้าชายคาภายนอกอาคารเพื่อหน่วงความร้อนก่อนเข้าสู่ตัวตึก</li>
                <li>งานรีโนเวทปรับแต่งฝ้าในสำนักงานสไตล์ลักชัวรี</li>
            </ul>
        `
    },
    "anti-slip": {
        specs: [
            { label: "ลวดลายกันลื่น (Pattern Style)", value: "5-Bar Checker Plate (ลายตีนเป็ดนูนชัด)" },
            { label: "ความสูงส่วนลายนูน (Pattern Height)", value: "1.2 มิลลิเมตร (กันลื่นได้ดีที่สุดแม้เปียกชื้น)" },
            { label: "เกรดโลหะที่ใช้ (Metal Grade)", value: "อลูมิเนียมเกรดเดินทะเล 5083-H112 / สแตนเลส SUS304" },
            { label: "ความหนาของแผ่นฐาน (Base Thickness)", value: "3.0 มิลลิเมตร (ไม่รวมส่วนนูน)" },
            { label: "คุณสมบัติความปลอดภัย (Surface)", value: "ไม่เกิดประกายไฟจากการชนกระแทก ปราศจากคราบสนิม" },
            { label: "ความต้านทานแรงดึง (Tensile)", value: "สูงมาก พับขึ้นรูปทำขอบบันไดไม่แตกหักง่าย" }
        ],
        apps: `
            <ul>
                <li>ปูพื้นและบันไดของรถบรรทุกสิบล้อ รถเทรลเลอร์ขนส่ง และเรือเดินสมุทร</li>
                <li>พื้นห้องเย็นและห้องผลิตในอุตสาหกรรมแปรรูปอาหารและยา</li>
                <li>บันไดหนีไฟสะพานลอย และทางลาดสำหรับรถเข็นคนพิการ</li>
                <li>ปูพื้นแท่นปฏิบัติงานในส่วนผลิตที่มีคราบน้ำมันหล่อลื่น</li>
            </ul>
        `
    }
};

/* ==========================================================================
   INITIALIZATION & MAIN LOGIC
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    injectProductSchema(PRODUCTS_DATA);
    updateCartBadges();

    // Event Listeners for Categories
    categoryBar.addEventListener("click", (e) => {
        if (e.target.classList.contains("category-tab")) {
            document.querySelectorAll(".category-tab").forEach(tab => tab.classList.remove("active"));
            e.target.classList.add("active");
            currentCategory = e.target.getAttribute("data-category");
            updateCategoryHeader();
            renderProducts();
        }
    });

    // Search input synchronization helper
    const syncSearch = (val) => {
        searchQuery = val.toLowerCase().trim();
        if (searchInput) searchInput.value = val;
        if (headerSearchInput) headerSearchInput.value = val;
        if (mobileSearchInput) mobileSearchInput.value = val;
        
        if (searchQuery.length > 0) {
            if (searchClearBtn) searchClearBtn.style.display = "block";
        } else {
            if (searchClearBtn) searchClearBtn.style.display = "none";
        }
        renderProducts();
    };

    if (searchInput) {
        searchInput.addEventListener("input", (e) => syncSearch(e.target.value));
    }
    if (headerSearchInput) {
        headerSearchInput.addEventListener("input", (e) => syncSearch(e.target.value));
        const headerSearchBtn = document.querySelector(".header-search-btn");
        if (headerSearchBtn) {
            headerSearchBtn.addEventListener("click", () => {
                syncSearch(headerSearchInput.value);
            });
        }
    }
    if (mobileSearchInput) {
        mobileSearchInput.addEventListener("input", (e) => syncSearch(e.target.value));
    }

    // Clear Search Field
    if (searchClearBtn) {
        searchClearBtn.addEventListener("click", () => {
            syncSearch("");
            if (searchInput) searchInput.focus();
        });
    }

    // Mobile Hamburger Menu Listeners
    if (btnMenuMobile) {
        btnMenuMobile.addEventListener("click", openMobileMenu);
    }
    if (btnCloseMenu) {
        btnCloseMenu.addEventListener("click", closeMobileMenu);
    }
    if (menuBackdrop) {
        menuBackdrop.addEventListener("click", closeMobileMenu);
    }
    if (mobileLoginBtn) {
        mobileLoginBtn.addEventListener("click", () => {
            closeMobileMenu();
            const loginBtn = document.getElementById("loginBtn");
            if (loginBtn) loginBtn.click();
        });
    }

    // Mobile Search Panel Listeners
    if (btnSearchMobile) {
        btnSearchMobile.addEventListener("click", () => {
            mobileSearchPanel.classList.toggle("open");
            if (mobileSearchPanel.classList.contains("open")) {
                mobileSearchInput.focus();
            }
        });
    }
    if (mobileSearchClose) {
        mobileSearchClose.addEventListener("click", () => {
            mobileSearchPanel.classList.remove("open");
            syncSearch("");
        });
    }

    // Escape key global listener for accessibility escape routes
    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeCartDrawer();
            closeMobileMenu();
            if (mobileSearchPanel) {
                mobileSearchPanel.classList.remove("open");
            }
        }
    });

    // Event Listeners for Sorting
    sortSelect.addEventListener("change", (e) => {
        currentSort = e.target.value;
        renderProducts();
    });

    // Back to top button scroll listener
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            backToTopBtn.style.opacity = "1";
            backToTopBtn.style.pointerEvents = "auto";
        } else {
            backToTopBtn.style.opacity = "0";
            backToTopBtn.style.pointerEvents = "none";
        }
    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Back button in Detail view
    backToCatalogBtn.addEventListener("click", backToCatalog);

    // Breadcrumb Category click to return and filter
    if (detailBreadcrumbCategory) {
        detailBreadcrumbCategory.addEventListener("click", (e) => {
            e.preventDefault();
            if (activeProductId) {
                const activeProduct = getProductById(activeProductId);
                if (activeProduct) {
                    currentCategory = activeProduct.category;
                    document.querySelectorAll(".category-tab").forEach(tab => {
                        tab.classList.remove("active");
                        if (tab.getAttribute("data-category") === currentCategory) {
                            tab.classList.add("active");
                        }
                    });
                    updateCategoryHeader();
                    backToCatalog();
                }
            }
        });
    }

    // Quantity Increment/Decrement Event Listeners
    qtyMinusBtn.addEventListener("click", () => {
        let val = parseInt(qtyInput.value) || 1;
        if (val > 1) {
            qtyInput.value = val - 1;
        }
    });

    qtyPlusBtn.addEventListener("click", () => {
        let val = parseInt(qtyInput.value) || 1;
        if (val < 99) {
            qtyInput.value = val + 1;
        }
    });

    // Action buttons inside product detail page
    addToCartBtn.addEventListener("click", () => {
        const qty = parseInt(qtyInput.value) || 1;
        addToCart(activeProductId, qty);
    });

    buyNowBtn.addEventListener("click", () => {
        const qty = parseInt(qtyInput.value) || 1;
        addToCart(activeProductId, qty);
        openCartDrawer();
        goToCartStep("form");
    });

    contactSellerBtn.addEventListener("click", () => {
        const prod = getProductById(activeProductId);
        if (!prod) return;
        window.open(`https://line.me/R/ti/p/@onesiamfactory?text=${encodeURIComponent('ต้องการปรึกษาเจ้าหน้าที่เรื่องเทคนิควัสดุและขนาดสั่งผลิตของ ' + prod.title + ' (รหัส: ' + prod.code + ')')}`, "_blank");
    });

    // Cart Drawer Toggle Event Listeners
    if (headerCartBtn) {
        headerCartBtn.addEventListener("click", openCartDrawer);
    }
    if (cartToggleBtn) {
        cartToggleBtn.addEventListener("click", openCartDrawer);
    }
    if (closeCartBtn) {
        closeCartBtn.addEventListener("click", closeCartDrawer);
    }
    if (cartBackdrop) {
        cartBackdrop.addEventListener("click", closeCartDrawer);
    }
    if (clearCartBtn) {
        clearCartBtn.addEventListener("click", clearCart);
    }

    setupCheckoutForm();
});

/* ==========================================================================
   RENDER & FILTERING METHODS
   ========================================================================== */

function updateCategoryHeader() {
    activeCategoryTitle.textContent = categoryNameMap[currentCategory] || "สินค้าทั้งหมด";
}

function createProductCardElement(prod, index) {
    const card = document.createElement("div");
    card.className = "product-card";
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
    card.style.transitionDelay = `${(index % 4) * 0.05}s`;
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", `คลิกดูรายละเอียดของ ${prod.title}`);

    const formattedPrice = formatProductPrice(prod);
    
    // Choose badge style
    let badgeHtml = '';
    if (prod.badges && prod.badges.length > 0) {
        // Use the first badge
        const badgeType = prod.badges[0].includes("พรีเมียม") || prod.badges[0].includes("Premium") ? "badge-secondary" : 
                          prod.badges[0].includes("ทดสอบ") || prod.badges[0].includes("ด่วน") ? "badge-error" : 
                          prod.badges[0].includes("ใหม่") ? "badge-primary" : "badge-success";
        badgeHtml = `<span class="badge ${badgeType}" style="position: absolute; top: 12px; left: 12px; z-index: 10; box-shadow: var(--drop-shadow-sm);">${prod.badges[0]}</span>`;
    } else {
        badgeHtml = `<span class="badge badge-neutral" style="position: absolute; top: 12px; left: 12px; z-index: 10;">${prod.categoryTh}</span>`;
    }

    // Convert old card HTML to new Premium Product Card from Design System
    card.innerHTML = `
        <div style="position: relative; overflow: hidden; height: 220px;">
            ${badgeHtml}
            <img src="${prod.image}" alt="${prod.title}" class="product-card-img" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;">
            <div style="position: absolute; bottom: 0; left: 0; width: 100%; height: 40%; background: linear-gradient(to top, rgba(0,0,0,0.6), transparent); pointer-events: none;"></div>
            <span style="position: absolute; bottom: 12px; left: 12px; font-size: 0.75rem; color: rgba(255,255,255,0.9); font-weight: 500;">${prod.code}</span>
        </div>
        <div class="product-card-body" style="padding: 16px; display: flex; flex-direction: column; flex-grow: 1;">
            <div class="product-card-title" style="font-size: 1.05rem; font-weight: 600; color: var(--primary-900); margin-bottom: 8px; line-height: 1.4; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; flex-grow: 1;">${prod.title}</div>
            
            <div style="display: flex; gap: 4px; flex-wrap: wrap; margin-bottom: 12px;">
                ${prod.tags.slice(0, 2).map(tag => `<span style="font-size: 0.7rem; background: var(--neutral-100); color: var(--neutral-600); padding: 2px 6px; border-radius: 4px;">${tag}</span>`).join('')}
            </div>

            <div style="display: flex; align-items: flex-end; justify-content: space-between; margin-top: auto; padding-top: 12px; border-top: 1px solid var(--neutral-200);">
                <div>
                    <div style="font-size: 0.7rem; color: var(--neutral-500); margin-bottom: 2px;">ราคาเริ่มต้น</div>
                    <div class="product-card-price" style="font-size: 1.15rem; font-weight: 700; color: ${hasContactPrice(prod) ? 'var(--primary-600)' : 'var(--primary-900)'};">${formattedPrice}</div>
                </div>
                <button class="btn btn-primary" style="padding: 8px; width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; border-radius: 50%;" title="เพิ่มลงรถเข็น" onclick="event.stopPropagation(); triggerInquiry('${prod.id}')">
                    <i class="fa-solid fa-cart-plus" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    `;

    // Card clicks to open Detail View
    card.addEventListener("click", () => {
        showProductDetail(prod.id);
    });

    // Keydown for keyboard accessibility
    card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            showProductDetail(prod.id);
        }
    });

    return card;
}

// Open cart drawer and add item
window.triggerInquiry = (productId) => {
    addToCart(productId, 1);
    openCartDrawer();
};

/* ==========================================================================
   VIEW TRANSITION LOGIC (CATALOG <-> PRODUCT DETAIL)
   ========================================================================== */

function showProductDetail(productId) {
    // Save scroll position on catalog
    if (activeView === "catalog") {
        savedScrollPosition = window.scrollY;
    }

    const prod = getProductById(productId);
    if (!prod) return;
    activeProductId = productId;

    // Reset quantity input to 1
    qtyInput.value = 1;

    // Update detail text bindings
    detailCategoryName.textContent = prod.categoryTh;
    detailProductImage.src = prod.image;
    detailProductImage.alt = prod.title;
    detailProductTitle.textContent = prod.title;
    detailPriceValue.textContent = formatProductPrice(prod, { withCurrency: false });
    
    // Breadcrumbs bindings
    if (detailBreadcrumbCategory) {
        detailBreadcrumbCategory.textContent = prod.categoryTh;
    }
    if (detailBreadcrumbTitle) {
        detailBreadcrumbTitle.textContent = prod.title;
    }
    
    // Render product gallery alternative angles
    renderProductGallery(prod.id);
    
    // Setup specs tabs
    setupSpecsTabs(prod.id);
    
    // Hide standard label if "ติดต่อสอบถาม"
    const subLabel = document.querySelector(".price-sub-label");
    const currencySym = document.querySelector(".price-val-row .currency");
    if (currencySym) currencySym.style.display = hasContactPrice(prod) ? "none" : "inline";
    if (subLabel) subLabel.textContent = getProductSubtitle(prod);

    detailDescriptionText.innerHTML = prod.description;

    // Badges Row
    detailBadgesRow.innerHTML = "";
    if (prod.badges) {
        prod.badges.forEach(badgeText => {
            const badge = document.createElement("span");
            badge.className = "detail-badge";
            badge.textContent = badgeText;
            detailBadgesRow.appendChild(badge);
        });
    }

    // Render Related Products
    renderRelatedProducts(prod);

    // Hide Catalog layout components
    catalogView.style.display = "none";
    heroSection.style.display = "none";

    // Show Detail Layout
    productDetailView.style.display = "block";
    activeView = "detail";

    // Mobile: Show sticky detail action bar, hide bottom nav
    const mobileDetailBar = document.getElementById('mobileDetailActionBar');
    const mobileBottomBar = document.getElementById('mobileBottomBar');
    if (mobileDetailBar) mobileDetailBar.style.display = '';
    if (mobileBottomBar) mobileBottomBar.style.display = 'none';

    // Scroll smoothly to top of detail view
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function backToCatalog() {
    // Hide Detail layout
    productDetailView.style.display = "none";

    // Restore Catalog layouts
    catalogView.style.display = "block";
    heroSection.style.display = "block";
    activeView = "catalog";

    // Mobile: Hide sticky detail action bar, restore bottom nav
    const mobileDetailBar = document.getElementById('mobileDetailActionBar');
    const mobileBottomBar = document.getElementById('mobileBottomBar');
    if (mobileDetailBar) mobileDetailBar.style.display = 'none';
    if (mobileBottomBar) mobileBottomBar.style.display = '';

    // Re-render and restore scroll position
    renderProducts();
    window.scrollTo({ top: savedScrollPosition, behavior: "smooth" });
}

function renderRelatedProducts(currentProd) {
    // Filter items in same category, exclude current
    let related = PRODUCTS_DATA.filter(p => p.category === currentProd.category && p.id !== currentProd.id);
    
    // Slice to 3 items
    related = related.slice(0, 3);

    relatedProductsGrid.innerHTML = "";

    if (related.length === 0) {
        // Fallback to general products if empty
        related = PRODUCTS_DATA.filter(p => p.id !== currentProd.id).slice(0, 3);
    }

    related.forEach((prod, index) => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.style.opacity = "0";
        card.style.transform = "translateY(15px)";
        card.style.transition = "opacity 0.6s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
        card.style.transitionDelay = `${index * 0.05}s`;
        card.setAttribute("tabindex", "0");
        card.setAttribute("aria-label", `สินค้าที่เกี่ยวข้อง: ${prod.title}`);

        const formattedPrice = formatProductPrice(prod);

        card.innerHTML = `
            <div class="card-image-wrapper">
                <span class="card-category-badge">${prod.categoryTh}</span>
                <img src="${prod.image}" alt="${prod.title}" loading="lazy" width="340" height="230">
                <div class="card-overlay-gradient"></div>
            </div>
            <div class="card-info">
                <span class="product-code">${prod.code}</span>
                <h3 class="product-title">${prod.title}</h3>
                
                <div class="card-details-row">
                    ${prod.tags.slice(0, 3).map(tag => `<span>${tag}</span>`).join('')}
                </div>

                <div class="card-bottom-row">
                    <div class="price-container">
                        <span class="price-label">ราคาเริ่มต้น</span>
                        <span class="price-value" style="${hasContactPrice(prod) ? 'font-size: 1.05rem; font-weight: 600;' : ''}">${formattedPrice}</span>
                    </div>
                    <button class="btn-card-action" title="เพิ่มลงรถเข็น" aria-label="เพิ่มลงรถเข็น: ${prod.title}" onclick="event.stopPropagation(); triggerInquiry('${prod.id}')">
                        <i class="fa-solid fa-cart-plus" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        `;

        // Card clicks to open Detail View
        card.addEventListener("click", () => {
            showProductDetail(prod.id);
        });

        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                showProductDetail(prod.id);
            }
        });

        relatedProductsGrid.appendChild(card);

        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 10);
    });
}

/* ==========================================================================
   SHOPPING CART & DRAWER ACTIONS
   ========================================================================== */

function saveCart() {
    localStorage.setItem("onesiam_cart", JSON.stringify(cart));
    updateCartBadges();
}

function updateCartBadges() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (headerCartBadge) headerCartBadge.textContent = totalCount;
    if (floatingCartBadge) floatingCartBadge.textContent = totalCount;
    if (cartCountLabel) cartCountLabel.textContent = cart.length;
    // Update mobile bottom bar cart badge
    const mobileCartBadge = document.getElementById('mobileCartBadge');
    if (mobileCartBadge) {
        mobileCartBadge.textContent = totalCount;
        mobileCartBadge.style.display = totalCount > 0 ? 'flex' : 'none';
    }
}

function addToCart(productId, quantity = 1) {
    const prod = getProductById(productId);
    if (!prod) return;

    const existingItem = cart.find(item => item.productId === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ productId, quantity });
    }

    saveCart();
    renderCartItems();
    showToast(`เพิ่ม <strong>${prod.title}</strong> (${quantity} ชิ้น) ลงรถเข็นขอใบเสนอราคาแล้ว`, "success");
}

function updateCartQty(productId, newQty) {
    const item = cart.find(item => item.productId === productId);
    if (item) {
        item.quantity = Math.max(1, parseInt(newQty) || 1);
        saveCart();
        renderCartItems();
    }
}

function removeFromCart(productId) {
    const prod = PRODUCTS_DATA.find(p => p.id === productId);
    cart = cart.filter(item => item.productId !== productId);
    saveCart();
    renderCartItems();
    if (prod) {
        showToast(`ลบ <strong>${prod.title}</strong> ออกจากรถเข็นแล้ว`, "info");
    }
}

function clearCart() {
    cart = [];
    saveCart();
    renderCartItems();
    showToast("ล้างรายการในรถเข็นเรียบร้อยแล้ว", "info");
}

function calculateSubtotal() {
    let total = 0;
    let hasQuoteOnly = false;
    
    cart.forEach(item => {
        const prod = PRODUCTS_DATA.find(p => p.id === item.productId);
        if (prod) {
            if (hasContactPrice(prod)) {
                hasQuoteOnly = true;
            } else {
                total += Number(prod.price || 0) * item.quantity;
            }
        }
    });
    
    return { total, hasQuoteOnly };
}

function renderCartItems() {
    if (!cartItemsList) return;
    
    if (cart.length === 0) {
        cartItemsList.innerHTML = `
            <div class="cart-empty-state">
                <i class="fa-solid fa-cart-flatbed-suitcases"></i>
                <p>ยังไม่มีสินค้าในรถเข็นขอใบเสนอราคา</p>
                <button class="btn-shop-now" type="button" data-action="close-cart-drawer">กลับไปเลือกสินค้า</button>
            </div>
        `;
        if (cartSubtotal) cartSubtotal.textContent = "฿0";
        if (checkoutNextBtn) checkoutNextBtn.disabled = true;
        return;
    }
    
    if (checkoutNextBtn) checkoutNextBtn.disabled = false;
    
    cartItemsList.innerHTML = "";
    cart.forEach(item => {
        const prod = PRODUCTS_DATA.find(p => p.id === item.productId);
        if (!prod) return;
        
        const priceLabel = hasContactPrice(prod) ? "ติดต่อสอบถามราคาพิเศษ" : `฿${(Number(prod.price || 0) * item.quantity).toLocaleString()}`;
        
        const row = document.createElement("div");
        row.className = "cart-item";
        row.innerHTML = `
            <img src="${prod.image}" alt="${prod.title}" class="cart-item-image">
            <div class="cart-item-info">
                <span class="cart-item-code">${prod.code}</span>
                <h4 class="cart-item-title">${prod.title}</h4>
                <span class="cart-item-price">${priceLabel}</span>
            </div>
            <div class="cart-item-actions">
                <button class="btn-cart-item-remove" onclick="removeFromCart('${prod.id}')" aria-label="ลบสินค้า">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
                <div class="cart-item-qty-control">
                    <button class="btn-cart-qty" onclick="changeCartItemQty('${prod.id}', -1)">-</button>
                    <input type="number" class="cart-qty-input" value="${item.quantity}" readonly>
                    <button class="btn-cart-qty" onclick="changeCartItemQty('${prod.id}', 1)">+</button>
                </div>
            </div>
        `;
        cartItemsList.appendChild(row);
    });
    
    const { total, hasQuoteOnly } = calculateSubtotal();
    let subtotalText = `฿${total.toLocaleString()}`;
    if (hasQuoteOnly) {
        subtotalText = total > 0 ? `฿${total.toLocaleString()} + สอบถามเพิ่มเติม` : "ติดต่อสอบถามราคา";
    }
    if (cartSubtotal) cartSubtotal.textContent = subtotalText;
}

window.changeCartItemQty = (productId, delta) => {
    const item = cart.find(item => item.productId === productId);
    if (item) {
        const newQty = item.quantity + delta;
        if (newQty >= 1 && newQty <= 99) {
            updateCartQty(productId, newQty);
        }
    }
};

function openCartDrawer() {
    cartDrawer.classList.add("open");
    cartBackdrop.classList.add("open");
    document.body.classList.add("body-scroll-lock");
    renderCartItems();
    goToCartStep("items");
}

function closeCartDrawer() {
    cartDrawer.classList.remove("open");
    cartBackdrop.classList.remove("open");
    document.body.classList.remove("body-scroll-lock");
}

function openMobileMenu() {
    if (mobileDrawer && menuBackdrop) {
        mobileDrawer.classList.add("open");
        menuBackdrop.classList.add("open");
        mobileDrawer.setAttribute("aria-hidden", "false");
        document.body.classList.add("body-scroll-lock");
    }
}

function closeMobileMenu() {
    if (mobileDrawer && menuBackdrop) {
        mobileDrawer.classList.remove("open");
        menuBackdrop.classList.remove("open");
        mobileDrawer.setAttribute("aria-hidden", "true");
        document.body.classList.remove("body-scroll-lock");
    }
}
window.closeMobileMenu = closeMobileMenu;

function goToCartStep(step) {
    cartStepItems.classList.remove("active");
    cartStepForm.classList.remove("active");
    cartStepSuccess.classList.remove("active");
    
    if (step === "items") {
        cartStepItems.classList.add("active");
    } else if (step === "form") {
        cartStepForm.classList.add("active");
    } else if (step === "success") {
        cartStepSuccess.classList.add("active");
    }
}

// Toast Alert System
function showToast(message, type = "success") {
    if (!toastContainer) return;
    
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    
    let iconClass = "fa-circle-check";
    if (type === "info" || type === "general") iconClass = "fa-circle-info";
    if (type === "warning" || type === "error") iconClass = "fa-circle-exclamation";
    
    toast.innerHTML = `
        <i class="fa-solid ${iconClass}"></i>
        <div>${message}</div>
        <button class="toast-close-btn" aria-label="ปิดการแจ้งเตือน"><i class="fa-solid fa-xmark"></i></button>
    `;
    
    toast.querySelector(".toast-close-btn").addEventListener("click", () => {
        toast.style.opacity = "0";
        toast.style.transform = "translateY(10px)";
        setTimeout(() => toast.remove(), 300);
    });
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        if (toast.parentNode) {
            toast.style.opacity = "0";
            toast.style.transform = "translateY(10px)";
            setTimeout(() => toast.remove(), 300);
        }
    }, 4000);
}

// Checkout Form Setup
function setupCheckoutForm() {
    if (checkoutNextBtn) {
        checkoutNextBtn.addEventListener("click", () => {
            goToCartStep("form");
        });
    }
    
    if (btnBackToItems) {
        btnBackToItems.addEventListener("click", () => {
            goToCartStep("items");
        });
    }
    
    if (submitQuotationBtn) {
        submitQuotationBtn.addEventListener("click", (e) => {
            e.preventDefault();
            if (validateCheckoutForm()) {
                submitQuotation();
            } else {
                showToast("เกิดข้อผิดพลาด กรุณากรอกข้อมูลผู้ติดต่อให้ถูกต้องและครบถ้วน", "error");
            }
        });
    }
    
    if (btnSuccessClose) {
        btnSuccessClose.addEventListener("click", () => {
            closeCartDrawer();
        });
    }
    
    if (btnDownloadPDF) {
        btnDownloadPDF.addEventListener("click", downloadDraftQuotationPDF);
    }
    
    if (cartItemsList) {
        cartItemsList.addEventListener("click", (e) => {
            const closeBtn = e.target.closest('[data-action="close-cart-drawer"]');
            if (closeBtn) {
                closeCartDrawer();
                return;
            }
        });
    }
}

function validateCheckoutForm() {
    let isValid = true;
    const nameInput = document.getElementById("inputContactName");
    const phoneInput = document.getElementById("inputPhone");
    const emailInput = document.getElementById("inputEmail");
    
    if (!nameInput || !phoneInput || !emailInput) return false;
    
    // Reset errors
    document.querySelectorAll(".form-group").forEach(el => el.classList.remove("error"));
    
    if (!nameInput.value.trim()) {
        nameInput.closest(".form-group")?.classList.add("error");
        isValid = false;
    }
    
    const phoneVal = phoneInput.value.trim();
    if (!phoneVal || !/^[0-9]{9,10}$/.test(phoneVal)) {
        phoneInput.closest(".form-group")?.classList.add("error");
        isValid = false;
    }
    
    const emailVal = emailInput.value.trim();
    if (!emailVal || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
        emailInput.closest(".form-group")?.classList.add("error");
        isValid = false;
    }
    
    return isValid;
}

function submitQuotation() {
    const nameInput = document.getElementById("inputContactName");
    const companyInput = document.getElementById("inputCompanyName");
    
    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const randNum = Math.floor(1000 + Math.random() * 9000);
    const refId = `OSF-${dateStr}-${randNum}`;
    
    if (successRefId) successRefId.textContent = refId;
    if (successName) successName.textContent = nameInput.value.trim();
    if (successItemsCount) successItemsCount.textContent = `${cart.length} รายการ (รวม ${cart.reduce((sum, item) => sum + item.quantity, 0)} ชิ้น)`;
    
    const lineLink = document.querySelector(".btn-success-line");
    if (lineLink) {
        const companyText = companyInput.value.trim() ? ` (บริษัท: ${companyInput.value.trim()})` : "";
        const text = encodeURIComponent(`สวัสดีครับ แจ้งเลขอ้างอิงการขอใบเสนอราคา ${refId} จากคุณ ${nameInput.value.trim()}${companyText} รบกวนเจ้าหน้าที่ตรวจเช็กและออกใบเสนอราคาให้ด้วยครับ`);
        lineLink.href = `https://line.me/R/ti/p/@onesiamfactory?text=${text}`;
    }
    
    // Save cart contents to localStorage for PDF/Text generation before clearing
    localStorage.setItem("onesiam_last_checkout_cart", JSON.stringify(cart));
    
    cart = [];
    saveCart();
    
    goToCartStep("success");
    showToast("ส่งคำขอเสนอราคาเสร็จสมบูรณ์!", "success");
}

function downloadDraftQuotationPDF() {
    showToast("ระบบกำลังสร้างเอกสาร PDF และกำลังดาวน์โหลด...", "info");
    
    setTimeout(() => {
        const ref = successRefId.textContent;
        const name = successName.textContent;
        const lastCart = JSON.parse(localStorage.getItem("onesiam_last_checkout_cart")) || [];
        
        let text = `====================================================\n`;
        text += `        ONESIAM FACTORY - DRAFT QUOTATION\n`;
        text += `====================================================\n`;
        text += `Quotation Ref: ${ref}\n`;
        text += `Date: ${new Date().toLocaleDateString('th-TH')}\n`;
        text += `Customer Name: ${name}\n`;
        text += `Status: DRAFT (ประมาณการราคาก่อนเสนอจริง)\n`;
        text += `----------------------------------------------------\n`;
        text += `ความหนา สเปก และจำนวนของรายการวัสดุ:\n`;
        
        let totalVal = 0;
        let hasQuoteOnly = false;
        
        if (lastCart.length === 0) {
            text += `(ไม่มีรายการสินค้าในรถเข็น)\n`;
        } else {
            lastCart.forEach(item => {
                const prod = getProductById(item.productId);
                if (prod) {
                    const priceLabel = hasContactPrice(prod) ? "ติดต่อสอบถามราคาพิเศษ" : `฿${(Number(prod.price || 0) * item.quantity).toLocaleString()}`;
                    text += `- ${prod.title} (${prod.code})\n`;
                    text += `  จำนวน: ${item.quantity} แผ่น/ชิ้น | ราคา: ${priceLabel}\n`;
                    if (hasContactPrice(prod)) {
                        hasQuoteOnly = true;
                    } else {
                        totalVal += Number(prod.price || 0) * item.quantity;
                    }
                }
            });
        }
        
        text += `----------------------------------------------------\n`;
        let subtotalText = `฿${totalVal.toLocaleString()}`;
        if (hasQuoteOnly) {
            subtotalText = totalVal > 0 ? `฿${totalVal.toLocaleString()} + รอเสนอราคาเพิ่มเติม` : "ติดต่อสอบถามราคา";
        }
        text += `ยอดรวมประมาณการ: ${subtotalText}\n`;
        text += `----------------------------------------------------\n`;
        text += `* เอกสารนี้เป็นเอกสารประมาณการร่างชั่วคราว *\n`;
        text += `เจ้าหน้าที่จะส่งใบเสนอราคาอย่างเป็นทางการ\n`;
        text += `พร้อมระบุส่วนลดโครงการพิเศษให้ทางอีเมลของท่าน\n`;
        text += `====================================================\n`;
        
        const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = `Draft-Quotation-${ref}.txt`;
        link.click();
        showToast("ดาวน์โหลดเอกสารร่างสำเร็จ!", "success");
    }, 1200);
}

// Product alternative views gallery
function renderProductGallery(productId) {
    const prod = getProductById(productId);
    if (!prod || !detailImageGallery) return;
    
    const thumbs = [
        { label: "ภาพหลัก", style: "" },
        { label: "โคลสอัพ", style: "filter: contrast(120%) brightness(95%);" },
        { label: "ติดตั้งจริง", style: "filter: hue-rotate(20deg) brightness(85%);" }
    ];
    
    detailImageGallery.innerHTML = "";
    
    thumbs.forEach((thumb, idx) => {
        const img = document.createElement("img");
        img.src = prod.image;
        img.alt = `${prod.title} - ${thumb.label}`;
        img.className = `gallery-thumb ${idx === 0 ? "active" : ""}`;
        img.style = thumb.style;
        
        img.addEventListener("click", () => {
            document.querySelectorAll(".gallery-thumb").forEach(t => t.classList.remove("active"));
            img.classList.add("active");
            
            detailProductImage.src = prod.image;
            detailProductImage.style = thumb.style;
        });
        
        detailImageGallery.appendChild(img);
    });
    
    detailProductImage.style = "";
}

// Interactive tabs rendering inside details
function setupSpecsTabs(productId) {
    const prod = PRODUCTS_DATA.find(p => p.id === productId);
    if (!prod) return;
    
    const categoryData = CATEGORY_SPECS[prod.category] || CATEGORY_SPECS["composite"];
    
    const specsTable = document.getElementById("detailSpecsTable");
    if (specsTable) {
        let tableHtml = `<table class="specs-table"><tbody>`;
        categoryData.specs.forEach(spec => {
            tableHtml += `
                <tr>
                    <td class="spec-label">${spec.label}</td>
                    <td class="spec-value">${spec.value}</td>
                </tr>
            `;
        });
        tableHtml += `</tbody></table>`;
        specsTable.innerHTML = tableHtml;
    }
    
    const appsText = document.getElementById("detailAppsText");
    if (appsText) {
        appsText.innerHTML = categoryData.apps;
    }
    
    const tabsContainer = document.querySelector(".detail-tabs-container");
    if (!tabsContainer) return;

    tabsContainer.onclick = (e) => {
        const btn = e.target.closest(".tab-btn");
        if (!btn) return;
        const targetTab = btn.getAttribute("data-tab");
        const tabButtons = tabsContainer.querySelectorAll(".tab-btn");
        const tabPanes = tabsContainer.querySelectorAll(".tab-pane");

        tabButtons.forEach(b => b.classList.remove("active"));
        tabPanes.forEach(p => p.classList.remove("active"));

        btn.classList.add("active");
        document.getElementById(`tab-pane-${targetTab}`)?.classList.add("active");
    };

    const tabButtons = tabsContainer.querySelectorAll(".tab-btn");
    const tabPanes = tabsContainer.querySelectorAll(".tab-pane");
    tabButtons.forEach(b => b.classList.remove("active"));
    tabPanes.forEach(p => p.classList.remove("active"));
    tabButtons[0]?.classList.add("active");
    document.getElementById("tab-pane-description")?.classList.add("active");
}

/* ==========================================================================
   MOBILE BOTTOM BAR, SCROLL-TO-TOP, & DETAIL ACTION BAR (Pro Max Mobile UX)
   ========================================================================== */
(function initMobileFeatures() {
    document.addEventListener('DOMContentLoaded', () => {
        // ----- Mobile Bottom Bar Navigation -----
        const mobileBottomHome = document.getElementById('mobileBottomHome');
        const mobileBottomProducts = document.getElementById('mobileBottomProducts');
        const mobileBottomSearch = document.getElementById('mobileBottomSearch');
        const mobileBottomCart = document.getElementById('mobileBottomCart');
        const mobileBottomMenu = document.getElementById('mobileBottomMenu');

        function setActiveBottomItem(activeBtn) {
            const allItems = document.querySelectorAll('.mobile-bottom-item');
            allItems.forEach(item => item.classList.remove('active'));
            if (activeBtn) activeBtn.classList.add('active');
        }

        if (mobileBottomHome) {
            mobileBottomHome.addEventListener('click', () => {
                setActiveBottomItem(mobileBottomHome);
                if (typeof activeView !== 'undefined' && activeView === 'detail') {
                    backToCatalog();
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }
        if (mobileBottomProducts) {
            mobileBottomProducts.addEventListener('click', () => {
                setActiveBottomItem(mobileBottomProducts);
                if (typeof activeView !== 'undefined' && activeView === 'detail') {
                    backToCatalog();
                }
                const productsGrid = document.getElementById('productsGrid');
                if (productsGrid) {
                    productsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        }
        if (mobileBottomSearch) {
            mobileBottomSearch.addEventListener('click', () => {
                setActiveBottomItem(mobileBottomSearch);
                // Trigger mobile search panel if available
                const btnSearchMobile = document.getElementById('btnSearchMobile');
                const mobileSearchPanel = document.getElementById('mobileSearchPanel');
                const mobileSearchInput = document.getElementById('mobileSearchInput');
                if (mobileSearchPanel) {
                    mobileSearchPanel.classList.toggle('open');
                    if (mobileSearchPanel.classList.contains('open') && mobileSearchInput) {
                        setTimeout(() => mobileSearchInput.focus(), 300);
                    }
                } else if (btnSearchMobile) {
                    btnSearchMobile.click();
                }
            });
        }
        if (mobileBottomCart) {
            mobileBottomCart.addEventListener('click', () => {
                setActiveBottomItem(mobileBottomCart);
                // Open cart drawer
                if (typeof openCartDrawer === 'function') {
                    openCartDrawer();
                } else {
                    const cartDrawer = document.querySelector('.cart-drawer');
                    const cartBackdrop = document.querySelector('.cart-drawer-backdrop');
                    if (cartDrawer) cartDrawer.classList.add('open');
                    if (cartBackdrop) cartBackdrop.classList.add('open');
                    document.body.classList.add('body-scroll-lock');
                }
            });
        }
        if (mobileBottomMenu) {
            mobileBottomMenu.addEventListener('click', () => {
                setActiveBottomItem(mobileBottomMenu);
                // Open mobile menu drawer
                if (typeof openMobileMenu === 'function') {
                    openMobileMenu();
                } else {
                    const btnMenuMobile = document.getElementById('btnMenuMobile');
                    if (btnMenuMobile) btnMenuMobile.click();
                }
            });
        }

        // ----- Mobile Scroll-to-Top FAB -----
        const mobileScrollTop = document.getElementById('mobileScrollTop');
        if (mobileScrollTop) {
            let scrollTicking = false;
            window.addEventListener('scroll', () => {
                if (!scrollTicking) {
                    requestAnimationFrame(() => {
                        if (window.scrollY > 400) {
                            mobileScrollTop.classList.add('visible');
                        } else {
                            mobileScrollTop.classList.remove('visible');
                        }
                        scrollTicking = false;
                    });
                    scrollTicking = true;
                }
            }, { passive: true });

            mobileScrollTop.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // ----- Mobile Detail Action Bar: Add to Cart -----
        const mobileDetailAddCart = document.getElementById('mobileDetailAddCart');
        if (mobileDetailAddCart) {
            mobileDetailAddCart.addEventListener('click', () => {
                if (typeof activeProductId !== 'undefined' && activeProductId) {
                    const qtyInput = document.getElementById('qtyInput');
                    const qty = qtyInput ? parseInt(qtyInput.value) || 1 : 1;
                    addToCart(activeProductId, qty);
                }
            });
        }

        // ----- Auto-detect active bottom item based on scroll -----
        let scrollDetectTicking = false;
        window.addEventListener('scroll', () => {
            if (!scrollDetectTicking) {
                requestAnimationFrame(() => {
                    if (typeof activeView !== 'undefined' && activeView === 'catalog') {
                        const productsGrid = document.getElementById('productsGrid');
                        if (productsGrid) {
                            const rect = productsGrid.getBoundingClientRect();
                            if (rect.top < window.innerHeight * 0.5 && rect.bottom > 0) {
                                setActiveBottomItem(mobileBottomProducts);
                            } else if (window.scrollY < 200) {
                                setActiveBottomItem(mobileBottomHome);
                            }
                        }
                    }
                    scrollDetectTicking = false;
                });
                scrollDetectTicking = true;
            }
        }, { passive: true });

        // ----- Initialize mobile cart badge on load -----
        if (typeof updateCartBadges === 'function') {
            updateCartBadges();
        }
    });
})();
