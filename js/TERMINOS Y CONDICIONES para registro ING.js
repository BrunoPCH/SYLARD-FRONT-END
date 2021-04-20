//MODAL TERMINOS Y CONDICIONES,
Swal.fire({
    backdrop:'true',
    // title: 'Términos y condiciones',
    icon: 'warning',
    html:
      '<h2 class="llamada sa_title">Terms and Conditions</h2>' +
      '<h4>Before continuing you must accept our policies:</h4>'+
      '<div class="sa_div_scroll_text"><h3 class="sa_titulo_h3">Mesolex: SYLARD is an open access portal with two major goals:</h3><p>To provide Collaborators with a tool, SYLARD, that will generate from an ELAN file an HTML page with line-by-line playback of audio and any time-coded annotations.</p><p>To provide Visitors with a portal to this material, which would otherwise be difficult to access as it would require downloading sound and ELAN files from an archive, installing ELAN locally, and linking the ELAN file to the audio. This process is not friendly to non-specialized yet potentially interested parties.</p><h3 class="sa_titulo_h3">Registration</h3><p>The act of registration certifies that the Visitor or Collaborator has read and agreed to the Terms and Conditions below. Visitors and Collaborators are required to truthfully provide their first and last names, their email, and their country of origin. The first three items are used only to manage the account. The last item is to help the SYLARD administration understand the geographic distribution of registered individuals, data that will be useful for future funding requests. None of this data will be shared in any way and all statistics (e.g., geographic distribution) will be kept anonymous.</p><p>During registration Mesolex: SYLARD also gives Visitors and Collaborators the option of providing three additional sets of information: (1) a personal statement; (2) language(s) spoken; and (3) language(s) of interest (e.g., for research or as a heritage speaker). This information will only be used internally to better understand the nature of the audience that this portal is reaching and thus better plan future developments. All users are welcome to write directly to Mesolex at any time (mesolex.director@gmail.com). All exchanges are confidential.</p><h3 class="sa_titulo_h3">License and Use</h3><p>Mesolex: SYLARD does not acquire copyright of any material available through its portal. By default, rights to recordings remain with the speaker(s) and rights to annotations remain with the Collaborator or other designated person. In making material available via Mesolex: SYLARD, Collaborators acknowledge that the material was obtained ethically, and that the intellectual property rights of speakers and communities was respected. By default all materials available via Mesolex: SYLARD are covered by Creative Commons BY-NC-SA, which requires Attribution (see Citation format with each collection), prohibits commercial use, and obliges any enhancement or transformation of the material to be shared under the same license as the original.</p><p>Fair Use includes the following:</p><p>Recordings and annotations may be used for academic, educational, or teaching purposes provided that such use is offered without charge or remuneration;</p><p>Recordings and annotations may be analyzed for inclusion in an academic study with proper citation of the original source (in this case a Mesolex: SYLARD collection and item);</p><p>Use does not negatively impact the intellectual property or moral rights of the language material or speakers.</p><h3 class="sa_titulo_h3">In registering as Visitor I certify that:</h3><p>I am the person named in the registration form, the registered name is my true name and I am legally capable of agreeing to these terms;</p><p>I will use materials only for non-commercial private research or educational activity and follow the Creative Commons license as stated above;</p><p>I will not transfer this material to other interested parties but will ask them to register with Mesolex: SYLARD so as to document their agreement to the terms here presented;</p><p>If the materials are used in any publication I will cite them as set forth in each collection. (Note: If Mesolex: SYLARD materials are cited or used we would appreciate notification so as to be able to document the impact of this portal);</p><p>I will not use Mesolex: SYLARD material in any way that may be considered disrespectful or damaging;</p><p>I have read and agree to these conditions.</p><p>By the act of registration I certify that I have read and agree to the terms and conditions for Visitors.</p><h3 class="sa_titulo_h3">In registering as Collaborator I certify that:</h3><p>I am the person named in the registration form, the registered name is my true name and I am legally capable of agreeing to these terms;</p><p>I have the rights and permissions to disseminate the audio, transcription, translation or any other annotation via the Mesolex: SYLARD portal;</p><p>I do not cede to Mesolex: SYLARD the rights to transfer any part of the collection to another archive or institution;</p><p>I do not cede to Mesolex: SYLARD any copyright to the collection;</p><p>I will not hold Mesolex: SYLARD responsible for any misuse of their collection materials by a Visitor;</p><p>I will provide to Mesolex: SYLARD a citation format for the recordings and transcriptions included in the collection in which Mesolex: SYLARD will be mentioned as the venue;</p><p>I will update any change in contact information and respond to any queries that might arise in regards to the collection;</p><p>I take full responsibility for having proceeded ethically, including having obtained any required IRB approval at a home institution and proper permissions from the speakers and, if necessary, communities involved to disseminate the uploaded material via Mesolex: SYLARD.</p><p>By the act of registration I certify that I have read and agree to the terms and conditions for Collaborators.</p><h3 class="sa_titulo_h3">Audio Location</h3><p>mp3 file location: To make use of the Mesolex: SYLARD program and portal a Collaborator must have audio in mp3 format on a secure (https) server. If this is not possible, please contact the Mesolex: SYLARD director for alternative possibilities mesolex.director@gmail.com.</p><h3 class="sa_titulo_h3">Registration process</h3><p>Once a Collaborator has registered they will be contacted by Mesolex: SYLARD to plan the processing of their material.</p><h3 class="sa_titulo_h3">Responsibilities of Mesolex: SYLARD:</h3><p>Mesolex: SYLARD is a unit within Mesolex: Lexicosemantic Resources for Mesoamerican Languages, an initiative supported by the National Endowment for the Humanities, Office of Digital Humanities to disseminate lexicons, grammars, and corpora of Mesoamerican language to a range of potential stakeholders: Indigenous communities and scholars, students and speakers; Western academics; and the general public. Ethical agreements with speakers and communities are the responsibility of the Collaborator who, by signing the Terms and Conditions for Collaborators, takes responsibility for working in an ethical manner and obtaining proper informed consent.</p><h3 class="sa_titulo_h3">Help document the utility of Mesolex: SYLARD</h3><p>Mesolex: SYLARD is a program to disseminate language documentation resources, in this case audio recordings annotated in ELAN. The developers of this tool, part of the Mesolex data portal and initiative, would greatly appreciate comments, suggestions, and reports on bugs as well as information on how SYLARD has been used to benefit endangered language documentation, description, and education. Please send all such comments to mesolex.director@gmail.com.<p></div>',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: true,
    buttonsStyling:false,
    confirmButtonText:
      'Aceptar',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText:
      'Salir',
    cancelButtonAriaLabel: 'Thumbs down',
    footer:'<p class="secundario"><strong>*Al darle click en aceptar, estas de acuerdo con los terminos antes expuestos</strong></p>',
    customClass: {
        container: '',
        popup:'sa-popup',
        header: 'sa_header',
        title: 'sa_title',
        // closeButton: '...',
        icon:'sa_icon',
        // image: '...',
        // content: '...',
        //htmlContainer: 'sa_popup',
        // input: '...',
        // inputLabel: '...',
        // validationMessage: '...',
        // actions: '...',
        confirmButton: 'btn btn-primario sa_btn_confirm',
        // denyButton: '...',
        cancelButton: 'btn btn-secundario sa_btn',
        // loader: '...',
        footer: 'secundario '
      },
      

});


