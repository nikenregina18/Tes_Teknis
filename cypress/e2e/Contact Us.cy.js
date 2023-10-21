require('cypress-xpath');

describe('Contact Us', () => {
  it('[Bug 2] Referal Cant be chosen', () => {
    cy.visit('https://javan.co.id')
    cy.xpath("//a[@class='text-base text-white'][normalize-space()='Contact Us']").click()

    cy.wait(3000)
    cy.xpath("//input[@id='in_name']").type("Full Name")
    cy.xpath("//input[@id='in_nickname']").type("Nickname")
    cy.xpath("//input[@id='in_email']").type("email@email.com")
    cy.xpath("//input[@id='in_phone']").type("08123456789")
    cy.xpath("//label[@for='in_institution']").type("Just A Test")
    cy.get('select').select('Search Engine')
    cy.get('select').select('Referal')
    cy.xpath("//textarea[@id='in_message']").type("This is just a test to prove a bugs. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur purus diam, lobortis a sodales quis, blandit nec turpis.")
    cy.wait(3000)
    cy.xpath("//button[normalize-space()='Send']").click()
    cy.screenshot()
    //Expected -> Berhasil send saat pilih referal pada drop down "How did you find"
  })

  it('[Bug 9] Tracking id empty (No warning)', () => {
    cy.visit('https://javan.co.id')
    cy.xpath("//a[@class='text-base text-white'][normalize-space()='Contact Us']").click()
    cy.wait(3000)
    cy.xpath("//a[@id='tracking-btn']").click()
    //cy.xpath("//input[@id='in_id_tracking']").type("asdfghsdf")
    cy.xpath("//span[@class='mx-auto']").click()
    cy.wait(3000)
    cy.screenshot()
    //Expected -> Popup succes submit tidak muncul
  })

})