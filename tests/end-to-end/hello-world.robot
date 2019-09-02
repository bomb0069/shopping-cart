*** Settings ***
Library    SeleniumLibrary

*** Test Cases ***
เมื่อเข้ามาที่หน้าแรกจะเห็นคำว่า สวัสดีชาวโลก
    เปิดหน้าจอแรก
    พบคำว่า    สวัสดีชาวโลก

*** Keywords ***
เปิดหน้าจอแรก
    Open Browser    http://localhost/hello-world    chrome
