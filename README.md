# 🏗️ OneSiam Factory - Web Catalog Project

**ศูนย์รวมวัสดุและอุปกรณ์งานช่างเกรดพรีเมียม** | **Façade & Construction Materials E-Commerce Platform**

---

## 📌 ข้อมูลโครงการ

| องค์ประกอบ | รายละเอียด |
|----------|-----------|
| **ชื่อโครงการ** | OneSiam Factory Web Catalog |
| **ประเภท** | E-Commerce Platform (Static Web App) |
| **ภาษา** | HTML5, CSS3, JavaScript (Vanilla) |
| **ปลายทาง** | Desktop & Mobile Responsive |
| **สถานะ** | 🟢 Development (Deploy-Option1-Elevated) |
| **Git Repository** | ✓ Version Control Enabled (.git/) |

---

## 🗂️ โครงสร้างโครงการ

```
work_design/
├── .git/                    # Git Version Control
├── index.html               # 🌐 หน้าเว็บไซต์หลัก
├── app.js                   # ⚙️ ตรรกะโปรแกรม & ข้อมูลสินค้า
├── style.css                # 🎨 Design System & Styling
├── README.md                # 📖 เอกสารนี้
├── assets/                  # 📸 รูปภาพสินค้า
│   ├── composite_panel.png
│   ├── perforated_sheet.png
│   ├── expanded_metal.png
│   ├── ceiling_panel.png
│   └── anti_slip_plate.png
└── Deploy-Option1-Elevated/ # (เวอร์ชันเดพลอยตัวเลือกที่ 1)
    └── [ไฟล์เดียวกัน]
```

---

## 📖 ส่วนประกอบหลัก

### 1️⃣ **index.html** - หน้าเว็บไซต์หลัก

#### ส่วนประกอบ:
- **Header (ส่วนหัว)**
  - โลโก้: `OneSiam Factory` พร้อมไอคอน industry
  - ช่องค้นหา: ค้นหาสินค้าอย่างรวดเร็ว
  - ปุ่มการดำเนิน: 🛒 Cart, 🔐 Login

- **Navigation Menu (เมนูนำทาง)**
  - เกี่ยวกับเรา | SOLUTIONS | บริการของเรา | สินค้า | โปรเจค | บทความ | ติดต่อ

- **Hero Section (แบนเนอร์หลัก)**
  - หัวข้อ: "สินค้าคุณภาพ มาตรฐานระดับสากล"
  - คำบรรยาย: ศูนย์รวมวัสดุงานช่างเกรดพรีเมียม

- **SEO Optimization**
  - Meta Tags: Title, Description, Keywords
  - Open Graph: Facebook/Twitter Integration
  - Canonical URL
  - Language: Thai (lang="th")

- **Resources**
  - Fonts: Google Fonts (Kanit, Sarabun, Inter)
  - Icons: FontAwesome 6.4.0 (CDN)
  - CSS: style.css (Internal)

---

### 2️⃣ **app.js** - ตรรกะการทำงาน

#### ฟังก์ชันสำคัญ:

```javascript
// 1. ค้นหาสินค้า
getProductById(productId)          // ค้นหาตาม ID

// 2. ตรวจสอบระบบราคา
hasContactPrice(product)           // ตรวจสอบราคาติดต่อ
formatProductPrice(product)        // จัดรูปแบบ (฿50,000)
getProductSubtitle(product)        // ข้อความราคา
```

#### ข้อมูลสินค้า (PRODUCTS_DATA):

| ID | ชื่อ | ราคา | คำอธิบาย |
|-----|------|------|---------|
| comp-1 | Premium Grade คอมโพสิต | ฿50,000 | ระดับสถาปัตยกรรม ทนไฟ |
| comp-2 | คอมโพสิตภายนอก | ฿30,000 | ทนแดดฝน PVDF Coating |
| comp-3 | คอมโพสิตภายใน | ฿30,000 | น้ำหนักเบา ผิวเรียบ |
| comp-4 | สินค้าทดสอบ | ฿999 | เกรดประมูล |

#### โครงสร้าง Product Object:
```javascript
{
    id: "comp-1",                      // รหัสอ้างอิง
    code: "OSF-COMP-01",               // SKU
    title: "ชื่อสินค้า",
    category: "composite",
    categoryTh: "คอมโพสิต",
    price: 50000,                      // ฿ หรือ null (ติดต่อสอบถาม)
    image: "assets/composite_panel.png",
    tags: ["คุณภาพสูง", "ราคาโรงงาน"], // สำหรับค้นหา
    badges: ["เกรดพรีเมียม", "ทนไฟ"], // ป้ายขายสินค้า
    description: "<p>...HTML content...</p>"
}
```

---

### 3️⃣ **style.css** - ระบบการออกแบบ (Design System)

#### 🎨 **Color Palette**

**Primary Colors (สีประจำแบรนด์)**
```css
--primary-700: #1E3A8A    /* Navy Blue หลัก */
--primary-400: #5B6EE1    /* Bright Royal Blue */
--primary-300: #6C7FBF    /* Slate Blue */
```

**Secondary Colors (สีเสริม - ทอง)**
```css
--gold-600: #D6C58C       /* Champagne Gold */
--gold-900: #8A6D3B       /* Dark Bronze */
```

**Neutral Colors (สีเป็นกลาง)**
```css
--neutral-900: #111827    /* Main Dark Text */
--neutral-50: #F9FAFB     /* Page Background */
--neutral-300: #D1D5DB    /* Borders */
```

#### 📐 **Typography**

```css
/* Fonts */
--font-family-heading: 'Kanit'      /* ภาษาไทย - Heading */
--font-family-base: 'Sarabun'       /* ภาษาไทย - Body */
--font-family-brand: 'Inter'        /* ภาษาอังกฤษ - Brand */

/* Sizes: xs(12px) → sm(14px) → base(16px) → lg(18px) → xl(20px) → 2xl(24px) → 3xl(30px) → 4xl(36px) */
```

#### 🔲 **Spacing System** (Base 4px)
- 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px

#### 🎛️ **Border Radius Scale**
- sm: 4px | md: 6px | lg: 8px | xl: 12px | 2xl: 16px | 3xl: 24px

#### ✨ **Effects**
- Shadows: drop-shadow-sm, md, lg, xl
- Transitions: 0.15s cubic-bezier
- Glow: Blue glow effect (rgba(51, 75, 200, 0.2))

#### 📏 **Layout Constants**
- Max Width: 1280px (Desktop)
- Responsive: Mobile-first approach

---

### 4️⃣ **assets/** - ไลบรารีรูปภาพ

| ไฟล์ | ขนาด | ประเภท | ใช้สำหรับ |
|------|------|-------|---------|
| composite_panel.png | ? | PNG | แผ่นคอมโพสิต |
| perforated_sheet.png | ? | PNG | แผ่นระแนง |
| expanded_metal.png | ? | PNG | แผ่นลูกฟูก |
| ceiling_panel.png | ? | PNG | แผ่นเพดาน |
| anti_slip_plate.png | ? | PNG | แผ่นป้องกันการลื่น |

---

## 🚀 การตั้งค่าและเรียกใช้งาน

### ✅ ข้อกำหนดเบื้องต้น
- โปรแกรมจัดการไฟล์: File Explorer / Terminal
- เบราว์เซอร์: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- Server (ไม่จำเป็น): Python, Node.js, PHP

### 📌 ขั้นตอนการตั้งค่า

**ตัวเลือก 1: เปิดไฟล์โดยตรง**
```bash
1. เปิด index.html ด้วยเบราว์เซอร์
2. ดูเว็บไซต์ทันที (ไม่ต้องติดตั้ง)
```

**ตัวเลือก 2: ใช้ Local Server**
```bash
# ใช้ Python
python -m http.server 8000

# หรือ Node.js
npx http-server

# หรือ PHP
php -S localhost:8000

# ที่อยู่: http://localhost:8000
```

**ตัวเลือก 3: Deploy ขึ้น Cloud**
```bash
# GitHub Pages, Netlify, Vercel, AWS S3 เป็นต้น
```

---

## 💡 วิธีใช้งาน

### 🔍 **ค้นหาสินค้า**
1. ปรเข้าหน้า index.html
2. ใช้ช่องค้นหา "ค้นหาสินค้า" ที่ส่วนหัว
3. พิมพ์คำค้นหา (ชื่อ, แท็ก, หรือหมวดหมู่)

### 📝 **ดูรายละเอียดสินค้า**
1. เลื่อนไปยังส่วนสินค้า
2. คลิกการ์ดสินค้า
3. อ่านคำอธิบายละเอียด, ราคา, badges, tags

### 🛒 **เพิ่มลงตะกร้า**
1. เลือกสินค้า
2. คลิกปุ่ม "เพิ่มลงตะกร้า"
3. ตรวจสอบจำนวนในไอคอน 🛒

---

## 💰 **ระบบราคา**

### ประเภท 1️⃣: ราคาแน่นอน
```
💵 ฿50,000
📝 ราคาส่งเริ่มต้น (ไม่รวม VAT)
```
- แสดงราคาตรง

### ประเภท 2️⃣: ราคาติดต่อสอบถาม
```
📞 ติดต่อสอบถาม
📝 ราคาตามข้อกำหนดและปริมาณการสั่งผลิตพิเศษ
```
- สำหรับสินค้าคำสั่งพิเศษ/ปริมาณมาก

---

## 🛠️ **Customization - วิธีปรับแต่ง**

### ➕ **เพิ่มสินค้าใหม่**

แก้ไข `app.js` - เพิ่มใน `PRODUCTS_DATA`:

```javascript
{
    id: "comp-5",
    code: "OSF-COMP-05",
    title: "ชื่อสินค้าใหม่",
    category: "composite",
    categoryTh: "คอมโพสิต",
    price: 40000,           // หรือ null
    image: "assets/image.png",
    tags: ["แท็ก1", "แท็ก2"],
    badges: ["ป้าย1"],
    description: `<p>คำอธิบายสินค้า...</p>`
}
```

### 🎨 **เปลี่ยนสี**

แก้ไข `style.css` - ตัวแปร `:root`:

```css
:root {
    --primary-700: #FF0000;    /* เปลี่ยนเป็นสีแดง */
    --gold-600: #FFD700;       /* เปลี่ยนทองเป็น gold */
}
```

### 📝 **เปลี่ยนฟอนต์**

แก้ไข `style.css`:

```css
--font-family-heading: 'Roboto';    /* เปลี่ยนจาก Kanit */
--font-family-base: 'Poppins';      /* เปลี่ยนจาก Sarabun */
```

### 📏 **เปลี่ยน Layout**

```css
--layout-max-width: 1920px;   /* เปลี่ยนความกว้างสูงสุด */
--border-radius-lg: 16px;     /* เปลี่ยนมุมโค้ง */
```

---

## 📋 **Browser Compatibility**

| Browser | เวอร์ชัน | สถานะ |
|---------|---------|-------|
| Chrome | 90+ | ✅ Full Support |
| Firefox | 88+ | ✅ Full Support |
| Safari | 14+ | ✅ Full Support |
| Edge | 90+ | ✅ Full Support |
| iOS Safari | 14+ | ✅ Full Support |
| Chrome Android | Latest | ✅ Full Support |

---

## 📊 **Performance & SEO**

### ✅ SEO Features
- Meta Tags (Title, Description, Keywords)
- Open Graph (Facebook, Twitter, LinkedIn)
- Canonical URL
- Language Declaration (Thai)
- Mobile Viewport Meta Tag
- Semantic HTML5

### ⚡ Performance
- Vanilla JavaScript (ไม่มี Framework overhead)
- CSS Variables (ลดขนาด)
- Responsive Images
- Font Optimization (Google Fonts)

---

## 🏢 **ข้อมูลบริษัท**

| องค์ประกอบ | รายละเอียด |
|----------|-----------|
| **ชื่อบริษัท** | OneSiam Factory |
| **บริการหลัก** | ออกแบบ + ติดตั้งฟาซาด (Façade Design & Installation) |
| **ผลิตภัณฑ์** | วัสดุตกแต่งอาคาร (Composite, Metal, Panels) |
| **ตลาด** | สถาปนิก, วิศวกร, ผู้รับเหมา |
| **ประเทศ** | ไทย 🇹🇭 |
| **เว็บไซต์** | https://www.onesiamfactory.com |

---

## 🔗 **ลิงก์ที่เกี่ยวข้อง**

- [หน้าแรก](index.html) - เปิดเว็บไซต์
- [ติดต่อ](index.html#contact) - ส่วนติดต่อ
- [สินค้า](index.html#productsGrid) - ดูสินค้าทั้งหมด
- [โปรเจค](index.html#projects) - โปรเจคผลงาน
- [บทความ](index.html#articles) - อ่านบทความ

---

## 📄 **License & Rights**

```
© OneSiam Factory. All Rights Reserved.
License: Proprietary
Year: 2026
```

---

## 🔄 **Version History**

| เวอร์ชัน | วันที่ | สถานะ | หมายเหตุ |
|--------|-----|----|---------|
| 1.0 | May 26, 2026 | 🟢 Active | Initial Release |
| - | - | - | - |

---

## 📞 **ติดต่อสำหรับการสนับสนุน**

| ช่องทาง | รายละเอียด |
|--------|-----------|
| 📧 Email | [ติดต่อผ่านเว็บไซต์] |
| 🌐 Website | https://www.onesiamfactory.com |
| 📍 Location | Thailand |
| 💬 Chat | ใช้ฟอร์มติดต่อในเว็บไซต์ |

---

## ✨ **Features Checklist**

- ✅ Responsive Design (Mobile, Tablet, Desktop)
- ✅ Thai Language Support
- ✅ Product Catalog (4+ products)
- ✅ Search Functionality
- ✅ Flexible Pricing System
- ✅ Shopping Cart (UI)
- ✅ Login Button (UI)
- ✅ SEO Optimized
- ✅ Performance Optimized
- ✅ Professional Design
- ✅ Accessible (ARIA labels)
- ✅ Git Version Control

---

**📅 Last Updated: May 26, 2026**  
**🔐 Status: Production Ready**  
**📍 Deployment: Ready for deployment
