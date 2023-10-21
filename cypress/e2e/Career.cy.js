require('cypress-xpath');

describe('Career', () => {
  it('No warning data not found', () => {
    cy.visit('https://javan.co.id')
    cy.xpath("//a[@class='text-base text-white'][normalize-space()='Career']").click()

    cy.wait(3000)
    cy.xpath("//input[@placeholder='Search your dream job...']").type("inidreamjob")
    cy.xpath("//button[normalize-space()='Search']").click()
    cy.wait(3000)
    cy.screenshot()
    //Expected -> Menampilkan warning data not found

  })

  it('[Bug 3 & 4 ]Email and tracking code dont match', () => {
    cy.fixture('tracking').then((data)=>{
      data.forEach((trackingData) => {
        cy.visit('https://javan.co.id')
        cy.xpath("//a[@class='text-base text-white'][normalize-space()='Career']").click()
        cy.wait(3000)
        cy.xpath("//button[@id='tracking-btn']").click()
        cy.xpath("//input[@id='in_id_tracking']").type(trackingData.id)
        cy.xpath("//input[@id='in_email']").type(trackingData.email)
        cy.screenshot()
        cy.xpath("//button[@class='card-btn-primary text-center w-2/5']").click()
        cy.wait(1000)
        cy.xpath("//div[contains(text(),'"+trackingData.email+"')]").should('exist')
        cy.contains(trackingData.id)
        //Disini akan terjadi error karena inputan email saat tracking dengan email hasil tracking tidak sama
        cy.xpath("//div[@class='w-3/5 grid sm:grid-cols-2 ms:grid-cols-2 lg:grid-cols-2 gap-4 mt-10']//div[contains(text(),'"+trackingData.email+"')]")
        cy.screenshot()
      });
    })
    
    cy.wait(3000)
    cy.screenshot()
    //Expected -> Email dan id sesuai dengan yang dicari
  })
})