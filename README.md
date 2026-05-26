# OneSiam Factory - Web Catalog

ศูนย์รวมวัสดุและอุปกรณ์งานช่างเกรดพรีเมียม สำหรับสถาปนิก วิศวกร และผู้รับเหมา

## 📋 ภาพรวมโครงการ

นี่คือเว็บไซต์อีคอมเมิร์ส (E-commerce Catalog) สำหรับบริษัท **OneSiam Factory** ที่เชี่ยวชาญในการออกแบบและติดตั้งฟาซาด (Façade) และวัสดุตกแต่งอาคารต่างๆ รวมถึง:

- คอมโพสิต (Aluminum Composite Panel - ACP)
- แผ่นระแนง (Perforated Sheets)
- แผ่นลูกฟูก (Expanded Metal)
- แผ่นเพดาน (Ceiling Panels)
- แผ่นป้องกันการลื่น (Anti-Slip Plates)

---

## 📁 โครงสร้างไฟล์

```
Deploy-Option1-Elevated/
├── index.html          # หน้าเว็บไซต์หลัก
├── app.js              # ตรรกะการทำงานของแอปพลิเคชัน
├── style.css           # การออกแบบและสไตล์ (Design System)
├── README.md           # ไฟล์นี้
└── assets/             # รูปภาพสินค้า
    ├── composite_panel.png
    ├── perforated_sheet.png
    ├── expanded_metal.png
    ├── ceiling_panel.png
    └── anti_slip_plate.png
```

---

## 🎨 ส่วนประกอบหลัก

### 1. **index.html** - หน้าเว็บไซต์
หน้าหลักของเว็บไซต์ประกอบด้วย:

#### Header (ส่วนหัว)
- **โลโก้และชื่อแบรนด์**: OneSiam Factory
- **ช่องค้นหา**: ค้นหาสินค้าอย่างรวดเร็ว
- **ปุ่มการดำเนิน**:
  - 🛒 ตะกร้าสินค้า (Shopping Cart)
  - 🔐 ปุ่มเข้าสู่ระบบ (Login)

#### Navigation Menu (เมนูนำทาง)
- เกี่ยวกับเรา (About Us)
- SOLUTIONS
- บริการของเรา (Services)
- สินค้า (Products)
- โปรเจค (Projects)
- บทความ (Articles)
- ติดต่อวัสดุสาน (Contact)

#### Hero Section (ส่วนแนะนำหลัก)
```
"สินค้าคุณภาพ มาตรฐานระดับสากล"
ศูนย์รวมวัสดุและอุปกรณ์งานช่างเกรดพรีเมียม
```

#### SEO Metadata
- ชื่อเรื่อง: "รับออกแบบและติดตั้งฟาซาด | ONE SIAM ผู้นำงาน Façade ครบวงจร"
- Open Graph Tags (สำหรับ Facebook, Twitter)
- Keywords ที่เหมาะสม

#### Fonts & Icons
- **Fonts**: Kanit, Sarabun (ภาษาไทย), Inter (ภาษาอังกฤษ)
- **Icons**: FontAwesome 6.4.0

---

### 2. **app.js** - ลอจิกโปรแกรม

ไฟล์นี้มีฟังก์ชันสำคัญเพื่อจัดการสินค้า:

#### ฟังก์ชันหลัก
```javascript
getProductById(productId)        // ค้นหาสินค้าตามไอดี
hasContactPrice(product)         // ตรวจสอบว่าราคาต้องติดต่อสอบถาม
formatProductPrice(product)      // จัดรูปแบบราคาให้สวยงาม (฿ 50,000)
getProductSubtitle(product)      // แสดงคำอธิบายราคา
```

#### ข้อมูลสินค้า (PRODUCTS_DATA)
ประกอบด้วยสินค้า 4 รายการ:

| ไอดี | ชื่อสินค้า | หมวดหมู่ | ราคา |
|------|----------|---------|------|
| comp-1 | อลูมิเนียมคอมโพสิต Premium Grade | คอมโพสิต | ฿50,000 |
| comp-2 | คอมโพสิตภายนอก ทนทานสูง | คอมโพสิต | ฿30,000 |
| comp-3 | คอมโพสิตภายใน งานตกแต่ง | คอมโพสิต | ฿30,000 |
| comp-4 | สินค้าทดสอบเกรดประมูล | คอมโพสิต | ฿999 |

**คุณสมบัติของแต่ละสินค้า**:
- `id`: รหัสอ้างอิง
- `code`: รหัสผลิตภัณฑ์ (SKU)
- `title`: ชื่อสินค้า
- `price`: ราคา (null = ต้องติดต่อสอบถาม)
- `image`: เส้นทางรูปภาพ
- `tags`: แท็กสำหรับค้นหา
- `badges`: ป้ายคำพูดขายสินค้า
- `description`: คำอธิบายโดยละเอียด (HTML)

---

### 3. **style.css** - ระบบการออกแบบ

ไฟล์ CSS นี้กำหนดตัวแปร CSS ทั่วทั้งเว็บไซต์:

#### 🎨 พาเลตสี

**Primary (สีประจำแบรนด์)**
- Navy Blue: `#1E3A8A`
- Bright Royal Blue: `#5B6EE1`
- Slate Blue: `#6C7FBF`

**Secondary (สีทอง/แชมเปญ)**
- Champagne Gold: `#D6C58C`
- Dark Bronze: `#8A6D3B`
- Light Gold: `#F0E6BD`

**Neutral (สีเป็นกลาง)**
- Dark Text: `#111827`
- Light Background: `#F9FAFB`
- Border: `#D1D5DB`

**State Colors**
- Success: `#06C755` (สีเขียว)
- Warning: `#FFF6ED` (สีส้ม)
- Info: `#EEF2FF` (สีน้ำเงิน)

#### 📐 Typography (ตัวอักษร)
- **Heading Font**: Kanit (ภาษาไทย)
- **Body Font**: Sarabun (ภาษาไทย)
- **Brand Font**: Inter (ภาษาอังกฤษ)

**ขนาดตัวอักษร**:
- xs: 12px | sm: 14px | base: 16px | lg: 18px
- xl: 20px | 2xl: 24px | 3xl: 30px | 4xl: 36px

#### 🔲 Spacing Scale (ระยะห่าง)
ใช้ระบบ 4px:
- 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px

#### 🎛️ Border Radius (มุมโค้ง)
- sm: 4px | md: 6px | lg: 8px | xl: 12px | 2xl: 16px | 3xl: 24px

#### ✨ Effects (เอฟเฟกต์)
- **Shadow**: drop-shadow-sm, md, lg, xl
- **Glow**: Blue glow effect
- **Transition**: Smooth 0.15s cubic-bezier

#### 📏 Layout
- Max Width: 1280px (Desktop)

---

### 4. **assets/** - รูปภาพสินค้า

โฟลเดอร์นี้เก็บรูปภาพสินค้าต่างๆ:

| รูปภาพ | คำอธิบาย |
|--------|---------|
| `composite_panel.png` | แผ่นคอมโพสิต |
| `perforated_sheet.png` | แผ่นระแนง |
| `expanded_metal.png` | แผ่นลูกฟูก |
| `ceiling_panel.png` | แผ่นเพดาน |
| `anti_slip_plate.png` | แผ่นป้องกันการลื่น |

---

## 🚀 วิธีใช้งาน

### 1. เปิดเว็บไซต์
```
1. เปิด index.html ในเบราว์เซอร์ของคุณ
2. หรือใช้ local server:
   npx http-server
```

### 2. ค้นหาสินค้า
- ใช้ช่องค้นหาในส่วนหัว
- เลื่อนไปยังส่วนสินค้า (#productsGrid)

### 3. ดูรายละเอียดสินค้า
- คลิกที่การ์ดสินค้า
- ดูคำอธิบาย ราคา และคุณสมบัติ

### 4. เพิ่มลงตะกร้าสินค้า
- คลิกปุ่ม "เพิ่มลงตะกร้า"
- ตรวจสอบจำนวนสินค้าในตะกร้า

---

## 💰 ระบบราคา

**ตัวเลือกราคา**:

1. **ราคาแน่นอน**: แสดงราคาที่กำหนด (เช่น ฿50,000)
   - แสดงเป็น: `฿50,000`
   - คำอธิบาย: "ราคาส่งเริ่มต้น (ไม่รวม VAT)"

2. **ราคาติดต่อสอบถาม**: สำหรับสินค้าพิเศษ
   - แสดงเป็น: `ติดต่อสอบถาม`
   - คำอธิบาย: "ราคาตามข้อกำหนดและปริมาณการสั่งผลิตพิเศษ"

---

## 📦 คุณสมบัติสินค้า

แต่ละสินค้ามีข้อมูลดังนี้:

### 🏷️ Tags (แท็ก)
ใช้สำหรับการค้นหาและการกรอง:
- "คุณภาพสูง", "ราคาโรงงาน", "สถาปัตยกรรม"
- "ทนสภาพอากาศ", "จัดส่งทั่วประเทศ" เป็นต้น

### 🎖️ Badges (ป้ายขาย)
แสดงคุณสมบัติหลัก:
- "เกรดพรีเมียม", "ทนไฟ FR Class", "รับประกัน 10 ปี"
- "ทนแดดฝน", "PVDF Coating", "ติดตั้งง่าย" เป็นต้น

### 📝 Description (คำอธิบาย)
- เป็น HTML format
- อธิบายรายละเอียดเทคนิค
- มีรายการสมบัติแต่ละรายการ

---

## 🎯 เป้าหมายของโปรเจค

✅ แสดงสินค้าในรูปแบบ Catalog ที่มีประสิทธิภาพ
✅ ให้ผู้ใช้ค้นหาและกรองสินค้าได้ง่ายๆ
✅ ระบบราคาที่ยืดหยุ่น (ราคาแน่นอน หรือ ติดต่อสอบถาม)
✅ ดีไซน์ที่เป็นมืออาชีพและพร้อมสำหรับ SEO
✅ รองรับภาษาไทยและอังกฤษอย่างสมบูรณ์

---

## 🔧 Customization

### เพิ่มสินค้าใหม่
เพิ่มวัตถุใหม่ใน `PRODUCTS_DATA` ใน `app.js`:

```javascript
{
    id: "comp-5",
    code: "OSF-COMP-05",
    title: "ชื่อสินค้าใหม่",
    category: "composite",
    categoryTh: "คอมโพสิต",
    price: 40000,
    image: "assets/new_image.png",
    tags: ["แท็ก1", "แท็ก2"],
    badges: ["ป้าย1", "ป้าย2"],
    description: `<p>คำอธิบายสินค้า</p>`
}
```

### เปลี่ยนสี
แก้ไขตัวแปร CSS ใน `style.css`:

```css
:root {
    --primary-700: #1E3A8A;      /* เปลี่ยนสีประจำแบรนด์ */
    --accent-500: #D6C58C;       /* เปลี่ยนสีเน้น */
}
```

### เปลี่ยนฟอนต์
แก้ไข `font-family-*` ใน `style.css`:

```css
--font-family-heading: 'Kanit', sans-serif;
--font-family-base: 'Sarabun', sans-serif;
```

---

## 📋 ข้อกำหนด Browser

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Android)

---

## 🏢 ข้อมูลบริษัท

**บริษัท**: OneSiam Factory
**บริการ**: ออกแบบและติดตั้งฟาซาด (Façade Design & Installation)
**ที่อยู่**: ประเทศไทย
**เว็บไซต์**: https://www.onesiamfactory.com

---

## 📞 ติดต่อ

สำหรับข้อมูลเพิ่มเติมเกี่ยวกับสินค้า กรุณา:
- ใช้ช่องค้นหาในเว็บไซต์
- คลิกปุ่มติดต่อ (Contact)
- ตรวจสอบแต่ละสินค้า - หลายรายการมี "ติดต่อสอบถาม" สำหรับราคาพิเศษ

---

## 📄 ใบอนุญาต

© OneSiam Factory. All rights reserved.

---

**Last Updated**: May 26, 2026
