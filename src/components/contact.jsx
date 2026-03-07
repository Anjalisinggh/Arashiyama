import { useState } from 'react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        visitDate: '',
        purpose: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {

            const emailBody = `
お名前 / Name: ${formData.name}
メールアドレス / Email: ${formData.email}
電話番号 / Phone: ${formData.phone}
来場希望日 / Visit Date: ${formData.visitDate}
ご用件 / Purpose: ${formData.purpose}

お問い合わせ内容 / Message:
${formData.message}
            `.trim();

            const subject = formData.purpose || 'お問い合わせ / Contact Form';


            const mailtoLink = `mailto:admin@sectorseven.world?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;


            window.location.href = mailtoLink;


            setSubmitStatus('success');


            setTimeout(() => {
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    visitDate: '',
                    purpose: '',
                    message: ''
                });
                setSubmitStatus(null);
            }, 2000);

        } catch (error) {
            console.error('Error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="relative bg-[#0b0b0b] py-24 pt-1 -mb-20 overflow-hidden">


            <img
                src="/image50.png"
                alt=""
                className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-[420px] lg:h-[520px] pointer-events-none"
            />

            <img
                src="/image49.png"
                alt=""
                className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-[420px] lg:h-[520px] pointer-events-none"
            />

            <div className="relative max-w-4xl mx-auto text-center px-6">


                <h2 className="text-[#CB9E38] text-2xl lg:text-[32px] font-bold relative inline-block">
                    お問い合わせ・ご予約
                    <img
                        src="/yellow.png"
                        alt=""
                        className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-[90px]"
                    />
                </h2>


                <p className="text-white mt-8 mb-14 text-[15px]">
                    ご質問やご予約は以下のフォームよりお願いいたします。
                </p>


                <div className="bg-[#181818] p-10 rounded-md max-w-[500px] mx-auto">

                    <form className="space-y-6" onSubmit={handleSubmit}>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="text-left">
                                <label className="text-[#CDCDCD] text-[13px] mb-1 block">
                                    お名前
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="山田 太郎 / Taro Yamada"
                                    className="w-full h-[40px] bg-[#1B1B1B] border border-[#444] px-3 rounded text-sm text-[#aaa]"
                                    required
                                />
                            </div>

                            <div className="text-left">
                                <label className="text-[#CDCDCD] text-[13px] mb-1 block">
                                    メールアドレス
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="example@email.com"
                                    className="w-full h-[40px] bg-[#1B1B1B] border border-[#444] px-3 rounded text-sm text-[#aaa]"
                                    required
                                />
                            </div>
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="text-left">
                                <label className="text-[#CDCDCD] text-[13px] mb-1 block">
                                    電話番号
                                </label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="090-1234-5678"
                                    className="w-full h-[40px] bg-[#1B1B1B] border border-[#444] px-3 rounded text-sm text-[#aaa]"
                                />
                            </div>

                            <div className="text-left">
                                <label className="text-[#CDCDCD] text-[13px] mb-1 block">
                                    来場希望日
                                </label>
                                <input
                                    type="text"
                                    name="visitDate"
                                    value={formData.visitDate}
                                    onChange={handleChange}
                                    placeholder="yyyy/mm/dd"
                                    className="w-full h-[40px] bg-[#1B1B1B] border border-[#444] px-3 rounded text-sm text-[#aaa]"
                                />
                            </div>
                        </div>


                        <div className="text-left">
                            <label className="text-[#CDCDCD] text-[13px] mb-1 block">
                                ご用件
                            </label>
                            <input
                                type="text"
                                name="purpose"
                                value={formData.purpose}
                                onChange={handleChange}
                                placeholder="入力してください"
                                className="w-full h-[40px] bg-[#1B1B1B] border border-[#444] px-3 rounded text-sm text-[#aaa]"
                            />
                        </div>


                        <div className="text-left">
                            <label className="text-[#CDCDCD] text-[13px] mb-1 block">
                                お問い合わせ内容
                            </label>
                            <textarea
                                rows="4"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="ご質問やご要望をご記入ください"
                                className="w-full bg-[#1B1B1B] border border-[#444] px-3 py-2 rounded text-sm text-[#aaa] resize-none"
                                required
                            />
                        </div>


                        <div className="flex flex-col items-center pt-2 gap-2">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-[#840012] hover:bg-[#610C0F] disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-2 rounded-full text-sm font-bold transition-colors"
                            >
                                {isSubmitting ? '送信中...' : '送信する'}
                            </button>
                            {submitStatus === 'success' && (
                                <p className="text-green-400 text-sm">メッセージを送信しました！</p>
                            )}
                            {submitStatus === 'error' && (
                                <p className="text-red-400 text-sm">エラーが発生しました。もう一度お試しください。</p>
                            )}
                        </div>

                    </form>

                </div>
            </div>
        </section>
    );
}