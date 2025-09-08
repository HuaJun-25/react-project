import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { IoIosAddCircle, IoIosRemoveCircle } from "react-icons/io";
import { div } from 'motion/react-client';

const App = () => {
    // 作用中的變數
    const [activeQuestion, setActiveQuestion] = useState(null)

    const questions = [
        {
            id: 1,
            question: '題目1',
            answer: '答案1',
        },
        {
            id: 2,
            question: '題目2',
            answer: '答案2',
        },
        {
            id: 3,
            question: '題目3',
            answer: '答案3',
        }
    ]

    return (
        <>
            <div className="wrap" style={{
                maxWidth: '100vw',
                height: '100vh',
                backgroundColor: '#555',

            }}>
                <div className='accordion' style={{
                    width: '80%',
                    margin: 'auto',
                    maxWidth: '1400px',
                    backgroundColor: '#bbb',
                    padding: '8px',
                    borderRadius: '5px',
                }}>
                    <h3 style={{
                        textAlign: 'center',
                        marginBottom: '6px',
                    }}>主標題</h3>

                    { // 貸出陣列資料
                        questions.map((q) => {
                            return (
                                <div key={q.id} style={{
                                    margin: '5px',
                                }}>
                                    {/* QA按鈕 */}
                                    <button
                                        style={{
                                            width: '100%',
                                            textAlign: 'left',
                                            border: 'none',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            height: '30px',
                                            fontSize:'1.15rem',
                                        }}
                                        onClick={()=>{setActiveQuestion(activeQuestion == q.id?null:q.id)}}
                                    >
                                        {q.question}
                                        {/* 加減號 */}
                                        {activeQuestion === q.id ? <IoIosRemoveCircle /> : <IoIosAddCircle />}
                                    </button>
                                    <AnimatePresence>
                                        {
                                            // 類似if，條件成立的話就做&&
                                            activeQuestion == q.id && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }} 
                                                    style={{margin: '5px 0 0 10px',color:'#222'}}
                                                    >
                                                    {/* 這裡寫答案 */}
                                                    {q.answer}
                                                </motion.div>
                                            )
                                        }
                                    </AnimatePresence>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default App