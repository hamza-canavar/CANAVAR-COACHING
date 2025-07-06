import React, { useState, useCallback, useMemo, Suspense, lazy } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import {
  Menu,
  X,
  Star,
  Users,
  Target,
  BookOpen,
  MessageCircle,
  Mail,
  Phone,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  CheckCircle,
  Award,
  TrendingUp,
  Heart
} from 'lucide-react'
import LazyImage from './components/LazyImage.jsx'
import { smoothScroll, throttle } from './utils/performance.js'
import logo from './assets/logo.png'
import heroBg from './assets/hero-bg.jpg'
import personalTraining from './assets/personal-training.jpg'
import healthyFood from './assets/healthy-food.jpg'
import mealPrep from './assets/meal-prep.jpg'
import hamzaCanavar from './assets/hamza-canavar.jpg'
import recipeBookCover from './assets/recipe-book-cover.png'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev)
  }, [])

  const scrollToSection = useCallback(throttle((sectionId) => {
    smoothScroll(sectionId, 80)
    setIsMenuOpen(false)
  }, 300), [])

  const openWhatsApp = useCallback(throttle((customMessage) => {
    if (isLoading) return
    setIsLoading(true)
    
    try {
      const defaultMessage = "Online Coaching 🔥"
      const message = customMessage || defaultMessage
      const phoneNumber = "201285721685"
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
      window.open(url, "_blank")
    } catch (error) {
      console.error('Error opening WhatsApp:', error)
    } finally {
      setTimeout(() => setIsLoading(false), 1000)
    }
  }, 1000), [isLoading])

  const socialLinks = useMemo(() => [
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@canavar_hamza?_t=ZS-8xmmJhGIxPz&_r=1',
      username: '@canavar_hamza',
      icon: (
        <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.43z"/>
        </svg>
      ),
      bgColor: 'bg-black'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@hamza_canavar?si=M9PRRXKmALSjJcD3',
      username: '@hamza_canavar',
      icon: <Youtube className="w-9 h-9 text-white" />,
      bgColor: 'bg-red-600'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/canavar_hamza?igsh=cGNjMWhoNTluYnZo',
      username: '@canavar_hamza',
      icon: <Instagram className="w-9 h-9 text-white" />,
      bgColor: 'bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500'
    }
  ], [])

  const packages = useMemo(() => [
    {
      id: 'silver',
      name: 'الباقة السيلفر',
      description: 'متابعة أسبوعية',
      color: '#C0C0C0',
      borderColor: 'border-gray-400',
      features: [
        'متابعة أسبوعية لمتابعة التطورات',
        'برنامج تدريبي مخصص حسب الهدف',
        'برنامج غذائي مناسب لك ولاسلوب حياتك',
        'خطة مكملات حسب الرغبة',
        'فيديوهات شرح للتمارين',
        'الإجابة على جميع الأسئلة والاستفسارات عن طريق الواتساب أثناء المتابعة الأسبوعية'
      ],
      whatsappMessage: 'مرحباً، أرغب في معرفة سعر وتفاصيل باقة المتابعة الأسبوعية (السيلفر).'
    },
    {
      id: 'gold',
      name: 'الباقة الجولد',
      description: 'متابعة يومية',
      color: '#FFD700',
      borderColor: 'border-yellow-500',
      isPopular: true,
      features: [
        'متابعة يومية لمراقبة التطورات خطوة بخطوة لضمان الالتزام',
        'برنامج تدريبي مخصص حسب الهدف',
        'برنامج غذائي مناسب لك ولاسلوب حياتك',
        'خطة مكملات حسب الرغبة',
        'فيديوهات شرح للتمارين',
        'فيديوهات أسبوعية لتقييم وتعديل الأداء',
        'الإجابة على جميع الاستفسارات والأسئلة عن طريق الواتساب بشكل يومي'
      ],
      whatsappMessage: 'مرحباً، أرغب في معرفة سعر وتفاصيل باقة المتابعة اليومية (الجولد).'
    },
    {
      id: 'platinum',
      name: 'الباقة البلاتينيوم',
      description: 'متابعة خاصة VIP',
      color: '#E5E4E2',
      borderColor: 'border-purple-500',
      features: [
        'متابعة خاصة عن طريق الواتساب والهاتف الشخصي على مدار الساعة',
        'برنامج تدريبي مخصص حسب الهدف',
        'برنامج غذائي مناسب لك ولاسلوب حياتك',
        'خطة مكملات حسب الرغبة',
        'فيديوهات شرح للتمارين',
        'فيديوهات أسبوعية لتقييم وتعديل الأداء',
        'كتاب الوصفات الصحية',
        'الإجابة على جميع الاستفسارات والأسئلة عن طريق الواتساب والهاتف الشخصي على مدار الساعة',
        'الأولوية في الرد والتوجيه والتعديل',
        'التحضير للبطولات والمنافسات'
      ],
      whatsappMessage: 'مرحباً، أرغب في معرفة سعر وتفاصيل باقة المتابعة الخاصة VIP (البلاتينيوم).'
    }
  ], [])

  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    }>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <LazyImage src={logo} alt="CANAVAR COACHING" className="h-12 w-auto" />
                <div className="hidden md:block">
                  <h1 className="text-xl font-bold text-foreground">CANAVAR COACHING</h1>
                  <p className="text-sm text-muted-foreground">Science Based Coaching</p>
                </div>
              </div>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8">
                <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors duration-200">الرئيسية</button>
                <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors duration-200">الخدمات</button>
                <button onClick={() => scrollToSection('packages')} className="text-foreground hover:text-primary transition-colors duration-200">الباقات</button>
                <button onClick={() => scrollToSection('book')} className="text-foreground hover:text-primary transition-colors duration-200">كتاب الوصفات</button>
                <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors duration-200">عني</button>
                <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors duration-200">تواصل معنا</button>
              </nav>

              {/* Mobile Menu Button */}
              <button 
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-in slide-in-from-top duration-200">
                <div className="flex flex-col space-y-4">
                  <button onClick={() => scrollToSection('home')} className="text-right text-foreground hover:text-primary transition-colors duration-200">الرئيسية</button>
                  <button onClick={() => scrollToSection('services')} className="text-right text-foreground hover:text-primary transition-colors duration-200">الخدمات</button>
                  <button onClick={() => scrollToSection('packages')} className="text-right text-foreground hover:text-primary transition-colors duration-200">الباقات</button>
                  <button onClick={() => scrollToSection('book')} className="text-right text-foreground hover:text-primary transition-colors duration-200">كتاب الوصفات</button>
                  <button onClick={() => scrollToSection('about')} className="text-right text-foreground hover:text-primary transition-colors duration-200">عني</button>
                  <button onClick={() => scrollToSection('contact')} className="text-right text-foreground hover:text-primary transition-colors duration-200">تواصل معنا</button>
                </div>
              </nav>
            )}
          </div>
        </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Training Background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-muted/90"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 text-center lg:text-right mb-8 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                CANAVAR COACHING
              </h1>
              <h2 className="text-2xl lg:text-3xl text-primary mb-6">
                Science Based Coaching
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                نقدم لك التدريب العلمي المبني على أحدث الأبحاث والدراسات العلمية لتحقيق أهدافك في اللياقة البدنية والتغذية بطريقة صحية ومستدامة
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" onClick={() => scrollToSection('services')} className="text-lg px-8 py-3">
                  اكتشف خدماتنا
                </Button>
                <Button variant="outline" size="lg" onClick={openWhatsApp} className="text-lg px-8 py-3">
                  تواصل معنا
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <img src={logo} alt="CANAVAR COACHING" className="w-64 h-64 lg:w-80 lg:h-80 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">خدماتنا</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نقدم مجموعة شاملة من الخدمات المبنية على العلم لمساعدتك في تحقيق أهدافك
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>التدريب الشخصي</CardTitle>
                <CardDescription>
                  برامج تدريب مخصصة ومبنية على احتياجاتك الفردية وأهدافك الشخصية
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>التدريب الجماعي</CardTitle>
                <CardDescription>
                  جلسات تدريب جماعية محفزة ومليئة بالطاقة مع مجموعة من الأشخاص المتشابهين في الأهداف
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>استشارات التغذية</CardTitle>
                <CardDescription>
                  خطط تغذية علمية مخصصة تتناسب مع نمط حياتك وتساعدك في تحقيق أهدافك
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>تحليل الجسم</CardTitle>
                <CardDescription>
                  تحليل شامل لتركيبة الجسم ومتابعة التقدم باستخدام أحدث التقنيات العلمية
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>برامج التأهيل</CardTitle>
                <CardDescription>
                  برامج متخصصة للتأهيل من الإصابات والعودة للنشاط البدني بأمان
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>الدعم النفسي</CardTitle>
                <CardDescription>
                  دعم نفسي ومعنوي لمساعدتك في الحفاظ على الدافعية وتحقيق النتائج المستدامة
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">باقات التدريب الأون لاين</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              اختر الباقة التي تناسب احتياجاتك وابدأ رحلتك نحو تحقيق أهدافك
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="relative hover:shadow-lg transition-shadow border-gray-400">
              <CardHeader>
                <Badge className="w-fit mb-2" style={{ backgroundColor: '#C0C0C0', color: '#333' }}>الباقة السيلفر</Badge>
                <CardTitle className="text-2xl">سعر الباقة السيلفر</CardTitle>
                <CardDescription>متابعة أسبوعية</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>متابعة أسبوعية لمتابعة التطورات</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>برنامج تدريبي مخصص حسب الهدف</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>برنامج غذائي مناسب لك ولاسلوب حياتك</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>خطة مكملات حسب الرغبة</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>فيديوهات شرح للتمارين</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>الإجابة على جميع الأسئلة والاستفسارات عن طريق الواتساب أثناء المتابعة الأسبوعية</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" onClick={() => openWhatsApp("مرحباً، أرغب في معرفة سعر وتفاصيل باقة المتابعة الأسبوعية (السيلفر).")}>سعر وتفاصيل الباقة السيلفر</Button>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-lg transition-shadow border-yellow-500">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">الأكثر شعبية</Badge>
              </div>
              <CardHeader>
                <Badge className="w-fit mb-2" style={{ backgroundColor: '#FFD700', color: '#333' }}>الباقة الجولد</Badge>
                <CardTitle className="text-2xl">سعر الباقة الجولد</CardTitle>
                <CardDescription>متابعة يومية</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>متابعة يومية لمراقبة التطورات خطوة بخطوة لضمان الالتزام</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>برنامج تدريبي مخصص حسب الهدف</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>برنامج غذائي مناسب لك ولاسلوب حياتك</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>خطة مكملات حسب الرغبة</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>فيديوهات شرح للتمارين</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>فيديوهات أسبوعية لتقييم وتعديل الأداء</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>الإجابة على جميع الاستفسارات والأسئلة عن طريق الواتساب بشكل يومي</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" onClick={() => openWhatsApp("مرحباً، أرغب في معرفة سعر وتفاصيل باقة المتابعة اليومية (الجولد).")}>سعر وتفاصيل الباقة الجولد</Button>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-lg transition-shadow border-purple-500">
              <CardHeader>
                <Badge className="w-fit mb-2" style={{ backgroundColor: '#E5E4E2', color: '#333' }}>الباقة البلاتينيوم</Badge>
                <CardTitle className="text-2xl">سعر الباقة البلاتينيوم</CardTitle>
                <CardDescription>متابعة خاصة VIP</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>متابعة خاصة عن طريق الواتساب والهاتف الشخصي على مدار الساعة</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>برنامج تدريبي مخصص حسب الهدف</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>برنامج غذائي مناسب لك ولاسلوب حياتك</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>خطة مكملات حسب الرغبة</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>فيديوهات شرح للتمارين</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>فيديوهات أسبوعية لتقييم وتعديل الأداء</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>كتاب الوصفات الصحية</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>الإجابة على جميع الاستفسارات والأسئلة عن طريق الواتساب والهاتف الشخصي على مدار الساعة</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>الأولوية في الرد والتوجيه والتعديل</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>التحضير للبطولات والمنافسات</span>
                  </li>
                </ul>
                <Button className="w-full mt-6" onClick={() => openWhatsApp("مرحباً، أرغب في معرفة سعر وتفاصيل باقة المتابعة الخاصة VIP (البلاتينيوم).")}>سعر وتفاصيل الباقة البلاتينيوم</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recipe Book Section */}
      <section id="book" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={recipeBookCover} alt="غلاف كتاب الوصفات الصحية" className="w-full h-96 object-cover" />
              </div>
            </div>
            <div className="lg:w-1/2 text-center lg:text-right">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">كتاب الوصفات الصحية</h2>
              <p className="text-lg text-muted-foreground mb-6">
                اكتشف سر التغذية الصحية واللذيذة مع كتاب CANAVAR COACHING للوصفات الصحية. يضم هذا الكتاب مجموعة فريدة من الوصفات المصممة بعناية فائقة، لتوفر لك التوازن المثالي بين النكهة والقيمة الغذائية. كل وصفة مدعومة بأسس علمية لضمان تحقيق أهدافك الصحية، سواء كنت تسعى لبناء العضلات، خسارة الدهون، أو ببساطة تبني نمط حياة صحي ومستدام. اجعل مطبخك مختبراً للإبداع الصحي، وحوّل كل وجبة إلى خطوة نحو تحقيق أفضل نسخة من نفسك.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>وصفات مبتكرة ولذيذة</span>
                </div>
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>مدعومة بأسس علمية</span>
                </div>
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>مناسبة لجميع الأهداف</span>
                </div>
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>معلومات غذائية مفصلة</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" onClick={() => openWhatsApp("مرحباً، أرغب في معرفة سعر وتفاصيل كتاب الوصفات الصحية.")} className="text-lg px-8 py-3">
                  سعر وتفاصيل كتاب الوصفات
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                  معاينة مجانية
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-right">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">عني</h2>
              <h3 className="text-2xl font-semibold text-primary mb-4">C/ HAMZA CANAVAR</h3>
              <p className="text-lg text-muted-foreground mb-6">
                مدرب دولي ولاعب المنتخب الوطني سابقا، عضو السجل الاوروبي لمحترفي التمارين والصحه، حصل على العديد من الشهادات والاعتمادات في التدريب الاون لاين والتدريب الشخصي وتدريب الفتنس وتغذيه الرياضيين والتغذيه العلاجيه والبطولات المحليه والدوليه.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                لديه خبرة علمية وعملية واسعة في تصميم برامج التدريب و التغذيه الاحترافيه، متخصص في تحسين الأداء البدني، بناء الكتلة العضلية، وخسارة الدهون. ساعدتُ المئات من الأشخاص على تحقيق تحولات صحية وبدنية فعّالة، من خلال تقييم دقيق، دعم تحفيزي مستمر، وبرامج مبنية على أسس علمية موثوقة، لتحقيق أفضل النتائج وتغيير نمط حياتهم نحو الأفضل.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">عميل راضٍ</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">8+</div>
                  <div className="text-sm text-muted-foreground">سنوات خبرة</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">شهادة معتمدة</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">معدل النجاح</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={hamzaCanavar} alt="C/ HAMZA CANAVAR" className="w-full h-96 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">تواصل معنا</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              نحن هنا لمساعدتك في تحقيق أهدافك. تواصل معنا عبر أي من الطرق التالية
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer" onClick={openWhatsApp}>
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>واتساب</CardTitle>
                <CardDescription>تواصل فوري</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer" onClick={() => window.open('mailto:info@canavarcoaching.com')}>
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>البريد الإلكتروني</CardTitle>
                <CardDescription>info@canavarcoaching.com</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer" onClick={() => window.open('tel:+1234567890')}>
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>الهاتف</CardTitle>
                <CardDescription>+1234567890</CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>التقييم</CardTitle>
                <CardDescription>5.0 نجوم</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-6">تابعنا على وسائل التواصل الاجتماعي</h3>
            <div className="flex justify-center space-x-6">
              <button 
                onClick={() => window.open("https://www.tiktok.com/@canavar_hamza?_t=ZS-8xmmJhGIxPz&_r=1", "_blank")}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.525 2.502c.18-.04.362-.068.543-.087V8.7c.662.088 1.298.26 1.886.508.588.248 1.12.572 1.595.968.475.396.88.852 1.21 1.368.33.516.58 1.08.74 1.688.16.608.24 1.24.24 1.896v.08c0 .24-.02.48-.06.72-.04.24-.09.48-.16.72-.07.24-.16.48-.27.72-.11.24-.24.48-.39.72-.15.24-.32.48-.51.72-.19.24-.4.48-.63.72-.23.24-.48.48-.75.72-.27.24-.56.48-.87.72-.31.24-.64.48-.99.72-.35.24-.72.48-1.11.72-.39.24-.8.48-1.23.72-.43.24-.88.48-1.35.72-.47.24-.95.48-1.46.72-.51.24-1.04.48-1.59.72-.55.24-1.12.48-1.71.72-.59.24-1.2.48-1.83.72-.63.24-1.28.48-1.95.72-.67.24-1.36.48-2.07.72-.71.24-1.44.48-2.19.72-.75.24-1.52.48-2.31.72-.79.24-1.59.48-2.42.72-.83.24-1.68.48-2.55.72-.87.24-1.75.48-2.66.72-.91.24-1.84.48-2.79.72-1.9.48-3.8.96-5.7 1.44-.18.04-.36.068-.54.087V15.3c.66-.088 1.29-.26 1.88-.508.59-.248 1.12-.572 1.6-.968.47-.396.88-.852 1.21-1.368.33-.516.58-1.08.74-1.688.16-.608.24-1.24.24-1.896v-.08c0-.24.02-.48.06-.72.04-.24.09-.48.16-.72.07-.24.16-.48.27-.72.11-.24.24-.48.39-.72.15-.24.32-.48.51-.72.19-.24.4-.48.63-.72.23-.24.48-.48.75-.72.27-.24.56-.48.87-.72.31-.24.64-.48.99-.72.35-.24.72-.48 1.11-.72.39-.24.8-.48 1.23-.72.43-.24.88-.48 1.35-.72.47-.24.95-.48 1.46-.72.51-.24 1.04-.48 1.59-.72.55-.24 1.12-.48 1.71-.72.59-.24 1.2-.48 1.83-.72.63-.24 1.28-.48 1.95-.72.67-.24 1.36-.48 2.07-.72.71-.24 1.44-.48 2.19-.72.75-.24 1.52-.48 2.31-.72.79-.24 1.59-.48 2.42-.72.83-.24 1.68-.48 2.55-.72.87-.24 1.75.48-2.66.72-.91.24-1.84.48-2.79.72-1.9.48-3.8.96-5.7 1.44z"/>
                  </svg>
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-primary">@canavar_hamza</span>
              </button>
              <button 
                onClick={() => window.open("https://youtube.com/@hamza_canavar?si=M9PRRXKmALSjJcD3", "_blank")}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Youtube className="w-9 h-9 text-white" />
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-primary">@hamza_canavar</span>
              </button>
              <button 
                onClick={() => window.open("https://www.instagram.com/canavar_hamza?igsh=cGNjMWhoNTluYnZo", "_blank")}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Instagram className="w-9 h-9 text-white" />
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-primary">@canavar_hamza</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img src={logo} alt="CANAVAR COACHING" className="h-8 w-auto filter invert" />
              <div>
                <h3 className="font-bold">CANAVAR COACHING</h3>
                <p className="text-sm opacity-80">Science Based Coaching</p>
              </div>
            </div>
            <div className="text-center md:text-left">
              <p className="text-sm opacity-80">© 2024 CANAVAR COACHING. جميع الحقوق محفوظة.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <button 
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-50"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </button>
    </div>
  </Suspense>
  )
}

export default App


