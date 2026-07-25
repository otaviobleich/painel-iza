// ============================================================
// CONFIGURAÇÃO DO SUPABASE
// Preencha com os dados do SEU projeto Supabase:
// Painel do Supabase > Project Settings > API
// ============================================================
const SUPABASE_URL = "https://gjchbqnomvhyaoifkndj.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqY2hicW5vbXZoeWFvaWZrbmRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4NDM5OTgsImV4cCI6MjEwMDQxOTk5OH0.9ibIynu63vRNUFaKMfWGM9FgZ613C8arYAVFwPnrhzM";

const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ============================================================
// DADOS DE PAGAMENTO (Pix manual)
// Usados no site para mostrar a chave Pix depois de um agendamento
// ou pedido de produto, e o WhatsApp para onde a cliente envia o
// comprovante.
// ============================================================
const STUDIO_PIX_KEY = "COLE_AQUI_A_CHAVE_PIX_DA_IZA";
const STUDIO_PIX_NAME = "Iza Teixeira";
const STUDIO_PIX_QR_IMAGE = "pix-qrcode.png";
const STUDIO_WHATSAPP_DISPLAY = "(99) 99999-9999";

// Porcentagem cobrada como sinal quando a cliente escolhe "pagar agora".
// O restante ela paga na hora que o atendimento for concluído.
const STUDIO_DEPOSIT_PERCENT = 30;