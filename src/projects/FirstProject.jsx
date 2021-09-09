import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import Total from '../components/Total'
import Test from '../components/Test'
import { getCourse } from '../services/courses'

const FirstProject = () => {
    const [course, setCourse] = useState([])
    const [subject, setSubject] = useState("")

    useEffect(() => {
        let mounted = true
        getCourse()
        .then(items => {
            if(mounted){
                setSubject(items.name)
                setCourse(items.parts)
            }
        })
        return () => mounted = false
    }, [])
    return (
        <div>
            <Header subject={subject} />
            <Content course={course} />
            <Total course={course} />
            <Test />
        </div>
    )
}

export default FirstProject
