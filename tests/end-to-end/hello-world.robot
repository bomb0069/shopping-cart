*** Settings ***
Library    SeleniumLibrary
Test Teardown    Close Browser

*** Test Cases ***
เมื่อเข้ามาที่หน้าแรกจะเห็นคำว่า สวัสดีชาวโลก
    เปิดหน้าจอแรก
    พบคำว่า    สวัสดีชาวโลก

*** Keywords ***
เปิดหน้าจอแรก
    Open Browser    http://localhost:3000/    chrome

พบคำว่า
    [Arguments]    ${hello}
    Wait Until Page Contains    ${hello}