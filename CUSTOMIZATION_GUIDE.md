# دليل التخصيص المفصل - موقع CANAVAR COACHING

## تخصيص المحتوى خطوة بخطوة

### 1. تغيير معلومات الشركة الأساسية

#### تغيير اسم الشركة والشعار الفرعي:
1. افتح ملف `src/App.jsx`
2. ابحث عن السطر: `CANAVAR COACHING`
3. غيره إلى اسم شركتك
4. ابحث عن السطر: `Science Based Coaching`
5. غيره إلى الشعار الفرعي المطلوب

#### تغيير الوصف الرئيسي:
1. ابحث عن النص: "نقدم لك التدريب العلمي المبني على أحدث الأبحاث..."
2. استبدله بوصف شركتك

### 2. تخصيص معلومات التواصل

#### تغيير رقم الواتساب:
1. ابحث عن دالة `openWhatsApp`
2. غير `const phoneNumber = "+1234567890"` إلى رقمك
3. غير نص الرسالة في `const message`

#### تغيير الإيميل:
1. ابحث عن `info@canavarcoaching.com`
2. استبدله بإيميلك
3. ابحث عن `mailto:info@canavarcoaching.com`
4. استبدله أيضاً

#### تغيير رقم الهاتف:
1. ابحث عن `+1234567890`
2. استبدله برقم هاتفك
3. ابحث عن `tel:+1234567890`
4. استبدله أيضاً

### 3. تخصيص وسائل التواصل الاجتماعي

#### Instagram:
1. ابحث عن `https://instagram.com/canavarcoaching`
2. غيره إلى رابط حسابك على Instagram

#### Facebook:
1. ابحث عن `https://facebook.com/canavarcoaching`
2. غيره إلى رابط صفحتك على Facebook

#### Twitter:
1. ابحث عن `https://twitter.com/canavarcoaching`
2. غيره إلى رابط حسابك على Twitter

#### YouTube:
1. ابحث عن `https://youtube.com/@canavarcoaching`
2. غيره إلى رابط قناتك على YouTube

### 4. تخصيص الخدمات

#### إضافة خدمة جديدة:
1. ابحث عن قسم "Services Section"
2. انسخ هذا الكود واستبدل المحتوى:

```jsx
<Card className="hover:shadow-lg transition-shadow">
  <CardHeader>
    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
      <Target className="w-6 h-6 text-primary" />
    </div>
    <CardTitle>اسم الخدمة الجديدة</CardTitle>
    <CardDescription>
      وصف الخدمة الجديدة هنا
    </CardDescription>
  </CardHeader>
</Card>
```

#### تغيير الأيقونات:
- استبدل `Target` بأي أيقونة من مكتبة Lucide React
- الأيقونات المتاحة: `Users`, `BookOpen`, `TrendingUp`, `Award`, `Heart`, `Star`, إلخ

### 5. تخصيص الباقات

#### تعديل باقة موجودة:
1. ابحث عن قسم "Packages Section"
2. غير السعر في `$99/شهر`
3. غير الوصف في `مثالية للمبتدئين`
4. أضف أو احذف الميزات من القائمة

#### إضافة باقة جديدة:
انسخ هذا الكود وعدل المحتوى:

```jsx
<Card className="relative hover:shadow-lg transition-shadow">
  <CardHeader>
    <Badge className="w-fit mb-2">اسم الباقة</Badge>
    <CardTitle className="text-2xl">$السعر/شهر</CardTitle>
    <CardDescription>وصف الباقة</CardDescription>
  </CardHeader>
  <CardContent>
    <ul className="space-y-3">
      <li className="flex items-center gap-2">
        <CheckCircle className="w-5 h-5 text-primary" />
        <span>ميزة 1</span>
      </li>
      <li className="flex items-center gap-2">
        <CheckCircle className="w-5 h-5 text-primary" />
        <span>ميزة 2</span>
      </li>
    </ul>
    <Button className="w-full mt-6" onClick={openWhatsApp}>اختر هذه الباقة</Button>
  </CardContent>
</Card>
```

### 6. تخصيص قسم "عني"

#### تغيير النص الشخصي:
1. ابحث عن قسم "About Section"
2. غير النص: "مرحباً، أنا مدرب معتمد..."
3. غير الفقرة الثانية: "لدي خبرة تزيد عن 8 سنوات..."

#### تغيير الإحصائيات:
1. غير `500+` إلى عدد عملائك
2. غير `8+` إلى سنوات خبرتك
3. غير `15+` إلى عدد شهادaتك
4. غير `95%` إلى معدل نجاحك

### 7. تخصيص كتاب الوصفات

#### تغيير معلومات الكتاب:
1. ابحث عن قسم "Recipe Book Section"
2. غير العنوان: "كتاب الوصفات الصحية"
3. غير الوصف والميزات
4. غير السعر في `$29.99`

### 8. تغيير الصور

#### استبدال الصور:
1. ضع صورك الجديدة في مجلد `src/assets/`
2. في ملف `src/App.jsx`، غير أسماء الملفات:
   - `logo.png` - شعار الشركة
   - `hero-bg.jpg` - صورة الخلفية الرئيسية
   - `personal-training.jpg` - صورة التدريب الشخصي
   - `healthy-food.jpg` - صورة الطعام الصحي
   - `meal-prep.jpg` - صورة تحضير الوجبات

### 9. تخصيص الألوان

#### تغيير اللون الأساسي:
1. افتح ملف `src/App.css`
2. ابحث عن `--primary: oklch(0.4 0.2 15);`
3. استبدل القيمة باللون المطلوب

#### ألوان أخرى قابلة للتخصيص:
- `--background` - لون الخلفية
- `--foreground` - لون النص
- `--muted` - لون الخلفية الثانوية
- `--accent` - لون التمييز

### 10. إضافة أقسام جديدة

#### إضافة قسم جديد:
1. انسخ أي قسم موجود
2. غير المحتوى
3. أضف رابط في قائمة التنقل
4. أضف دالة `scrollToSection` جديدة

### 11. تخصيص عنوان الصفحة

#### تغيير عنوان المتصفح:
1. افتح ملف `index.html`
2. غير `<title>CANAVAR COACHING - Science Based Coaching</title>`
3. ضع العنوان المطلوب

### 12. نصائح مهمة للتخصيص

#### قبل التعديل:
- احتفظ بنسخة احتياطية من الملفات
- اختبر التعديلات على جهازك أولاً
- تأكد من صحة الكود قبل الحفظ

#### بعد التعديل:
- اختبر الموقع على أجهزة مختلفة
- تأكد من عمل جميع الروابط
- تحقق من سرعة تحميل الصور

#### أدوات مفيدة:
- استخدم محرر نصوص مثل VS Code
- استخدم أدوات المطور في المتصفح للاختبار
- اختبر الموقع على الهاتف والكمبيوتر

### 13. استكشاف الأخطاء

#### إذا لم تظهر التغييرات:
1. احفظ الملف واضغط Ctrl+F5 لإعادة تحميل الصفحة
2. تأكد من عدم وجود أخطاء في الكود
3. تحقق من وحدة التحكم في المتصفح

#### إذا ظهرت أخطاء:
1. تحقق من صحة أسماء الملفات
2. تأكد من وجود جميع الفواصل والأقواس
3. راجع الكود المضاف أو المعدل

هذا الدليل يغطي جميع جوانب التخصيص الأساسية. يمكنك دائماً الرجوع إليه عند الحاجة لتعديل أي جزء من الموقع.

